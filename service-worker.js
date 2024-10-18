/*
 * LibResilient Service Worker.
 */

// initialize the LibResilientConfig array
// 
// this also sets some sane defaults,
// which then can be modified via config.json
if (typeof self.LibResilientConfig !== 'object' || self.LibResilientConfig === null) {
    self.LibResilientConfig = {
        
        // how long do we wait before we decide that a plugin is unresponsive,
        // and move on?
        defaultPluginTimeout: 10000,
            
        // how long should LibResilient wait before displaying the "still loading" screen
        // to the user if the request mode is "navigate"?
        // 
        // NOTICE: the still-loading screen is only used if this setting is > 0
        // NOTICE: *and* there is a stashing plugin (normally, `cache`) configured and enabled in the config
        // NOTICE: this is done to avoid loops -- otherwise, user would find themselves in a (manual, but still) loop
        stillLoadingTimeout: 5000,
        
        // plugins settings namespace
        //
        // this defines which plugins get loaded,
        // and the order in which they are deployed to try to retrieve content
        // assumption: plugin path = ./plugins/<plugin-name>.js
        // 
        // this relies on JavaScript preserving the insertion order for properties
        // https://stackoverflow.com/a/5525820
        plugins: [{
                name: 'fetch'
            },{
                name: 'cache'
            }
        ],
        
        // which components should be logged?
        // this is an array of strings, components not listed here
        // will have their debug output disabled
        // 
        // by default, the service worker and all enabled plugins
        // (so, all components that are used)
        loggedComponents: [
            'service-worker',
            'fetch',
            'cache'
        ],
        
        // should we normalize query params?
        // 
        // this usually makes sense: a request to example.com/?a=a&b=b is
        // exactly equivalent to example.com/?b=b&a=a
        // 
        // but in case a given website does something weird with query params...
        // ..normalization can be disabled here
        normalizeQueryParams: true,
        
        // do we want to use content-based MIME type detection using an external library?
        // 
        // some plugins (for example, based on IPFS), receive content without a content type,
        // because the transport simply does not support it. so we need to find a way to
        // figure out the content type on our own -- that's done by the guessMimeType() function
        // 
        // it can do this based on the extension of the file being requested,
        // but that is a limited, imperfect approach.
        // 
        // it can also load an external library (currently that's `file-type`), and guess
        // the content type based on it. this approach is more exact, works for paths that
        // do not have an "extension", and works for many more MIME types than the alternative.
        // 
        // however, it is also slower (content needs to be read, inspected, and compared to a lot
        // of signatures), and relies on an external library that needs to be distributed along
        // with LibResilient.
        // 
        // so, since it is not needed in case of most plugins, it is disabled by default.
        useMimeSniffingLibrary: false
    }
}


/**
 * internal logging facility
 * 
 * component - name of the component being logged about
 *             if the component is not in the LibResilientConfig.loggedComponents array,
 *             message will not be displayed
 * items     - the rest of arguments will be passed to console.debug()
 */
self.log = function(component, ...items) {
    if ( ('LibResilientConfig' in self) && ('loggedComponents' in self.LibResilientConfig) && (self.LibResilientConfig.loggedComponents != undefined)) {
        if (self.LibResilientConfig.loggedComponents.indexOf(component) >= 0) {
            console.debug(`LibResilient [COMMIT_UNKNOWN, ${component}] ::`, ...items)
        }
    }
}

// Map() of file extensions to MIME types for the guessing game below
// this is by no means complete, and focuses mainly on formats that
// are important on the Web
let ext_to_mime = new Map([
    ['htm',    'text/html'],
    ['html',   'text/html'],
    ['css',    'text/css'],
    ['js',     'text/javascript'],
    ['json',   'application/json'],
    ['svg',    'image/svg+xml'],
    ['ico',    'image/x-icon'],
    ['gif',    'image/gif'],
    ['png',    'image/png'],
    ['jpg',    'image/jpeg'],
    ['jpeg',   'image/jpeg'],
    ['jpe',    'image/jpeg'],
    ['jfif',   'image/jpeg'],
    ['pjpeg',  'image/jpeg'],
    ['pjp',    'image/jpeg'],
    ['webp',   'image/webp'],
    ['avi',    'video/avi'],
    ['mp4',    'video/mp4'],
    ['mp2',    'video/mpeg'],
    ['mp3',    'audio/mpeg'],
    ['mpa',    'video/mpeg'],
    ['pdf',    'application/pdf'],
    ['txt',    'text/plain'],
    ['ics',    'text/calendar'],
    ['jsonld', 'application/ld+json'],
    ['mjs',    'text/javascript'],
    ['oga',    'audio/ogg'],
    ['ogv',    'video/ogg'],
    ['ogx',    'application/ogg'],
    ['opus',   'audio/opus'],
    ['otf',    'font/otf'],
    ['ts',     'video/mp2t'],
    ['ttf',    'font/ttf'],
    ['weba',   'audio/webm'],
    ['webm',   'video/webm'],
    ['webp',   'image/webp'],
    ['woff',   'font/woff'],
    ['woff2',  'font/woff2'],
    ['xhtml',  'application/xhtml+xml'],
    ['xml',    'application/xml']
])

// preparing the variable for the MIME detection module
// in case we want to use it
let detectMimeFromBuffer = null

/**
 * guess the MIME type, based on content and path extension
 * 
 * important: according to RFC 7231 we should not set Content-Type if we're not sure!
 * https://www.rfc-editor.org/rfc/rfc7231#section-3.1.1.5
 * 
 * @param ext     - the extension of the path content was fetched as
 * @param content - the content itself
 * @returns string containing the MIME type, or empty string if guessing failed
 */
self.guessMimeType = async function(ext, content) {

    // if we have file-type library loaded, that means that useMimeSniffingLibrary config field is set to true
    // and that we were able to load file-type.js
    // 
    // in other words, we want to use it, we can use it -- so use it!
    if (detectMimeFromBuffer !== null) {
        let ft = undefined
        try {
            ft = await detectMimeFromBuffer(content)
        } catch (e) {
            self.log('service-worker', "+-- error while trying to guess MIME type based on content:", e);
        }
        // did we actually get anything?
        if ( (ft !== undefined) && (typeof ft === "object") && ("mime" in ft) ) {
            // yup!
            self.log('service-worker', "+-- guessed MIME type based on content: " + ft.mime);
            return ft.mime;
        } else {
            self.log('service-worker', "+-- unable to guess MIME type based on content.")
        }
    }
    
    // an empty string is in our case equivalent to not setting the Content-Type
    // as `new Blob()` with no `type` option set ends up having type set to an empty string
    if (ext_to_mime.has(ext)) {
        self.log('service-worker', "+-- guessed MIME type based on extension: " + ext_to_mime.get(ext));
        return ext_to_mime.get(ext)
    }
    
    // if we're unable to guess the MIME type, we need to return an empty string
    self.log('service-worker', "   +-- unable to guess the MIME type");
    return "";
}


/**
 * verifying a config data object
 * 
 * we are *NOT* checking for fields that are unknown/unexpected
 * as resilience is more important than conrrectness here:
 * we do want the config to load if at all it can be loaded,
 * an extra field or two is not a problem here
 * 
 * cdata - config data to verify
 */
let verifyConfigData = (cdata) => {
    // cdata needs to be an object
    if ( typeof cdata !== "object" || cdata === null ) {
        self.log('service-worker', 'fetched config does not contain a valid JSON object')
        return false;
    }    
    // basic check for the plugins field
    if ( !("plugins" in cdata) || ! Array.isArray(cdata.plugins) ) {
        self.log('service-worker', 'fetched config does not contain a valid "plugins" field')
        return false;
    }
    // basic check for the loggedComponents
    if ( !("loggedComponents" in cdata) || !Array.isArray(cdata.loggedComponents) ) {
        self.log('service-worker', 'fetched config does not contain a valid "loggedComponents" field')
        return false;
    }
    // defaultPluginTimeout is optional
    if ("defaultPluginTimeout" in cdata) {
        if (!Number.isInteger(cdata.defaultPluginTimeout)) {
            self.log('service-worker', 'fetched config contains invalid "defaultPluginTimeout" data (integer expected)')
            return false;
        }
    }
    // stillLoadingTimeout is optional
    if ("stillLoadingTimeout" in cdata) {
        if (!Number.isInteger(cdata.stillLoadingTimeout)) {
            self.log('service-worker', 'fetched config contains invalid "stillLoadingTimeout" data (integer expected)')
            return false;
        }
    }
    // normalizeQueryParams is optional
    if ("normalizeQueryParams" in cdata) {
        if (cdata.normalizeQueryParams !== true && cdata.normalizeQueryParams !== false) {
            self.log('service-worker', 'fetched config contains invalid "normalizeQueryParams" data (boolean expected)')
            return false;
        }
    }
    // useMimeSniffingLibrary is optional
    if ("useMimeSniffingLibrary" in cdata) {
        if (cdata.useMimeSniffingLibrary !== true && cdata.useMimeSniffingLibrary !== false) {
            self.log('service-worker', 'fetched config contains invalid "useMimeSniffingLibrary" data (boolean expected)')
            return false;
        }
    }
    // we're good
    return true;
}


/**
 * cache the `config.json` response, wherever from we got it
 * 
 * configURL - url of the config file
 * cresponse - response we're caching
 */
let cacheConfigJSON = async (configURL, cresponse, use_source) => {
    try {
        var cache = await caches.open(use_source)
        await cache.put(configURL, cresponse)
        self.log('service-worker', `config cached in cache: ${use_source}.`)
    } catch(e) {
        self.log('service-worker', `failed to cache config in cache ${use_source}: ${e}`)
    }
}


/**
 * get config JSON and verify it's valid
 * 
 * cresponse - the Response object to work with
 */
let getConfigJSON = async (cresponse) => {
    if ( (cresponse === undefined) || (cresponse === null) || (typeof cresponse !== 'object') || ! ("status" in cresponse) || ! ("statusText" in cresponse) ) {
        self.log('service-worker', 'config.json response is undefined or invalid')
        return false;
    }
    if (cresponse.status != 200) {
        self.log('service-worker', `config.json response status is not 200: ${cresponse.status} ${cresponse.statusText})`)
        return false;
    }
    // cloning the response before applying json()
    // so that we can cache the response later
    var cdata = await cresponse.clone().json()
    if (verifyConfigData(cdata)) {
        return cdata;
    }
    return false;
}


/**
 * execute on the configuration
 * 
 * load plugin modules, making constructors available
 * cycle through the plugin config instantiating plugins and their dependencies
 */
let executeConfig = (config) => {
    
    // working on a copy of the plugins config so that config.plugins remains unmodified
    // in case we need it later (for example, when re-loading the config)
    let pluginsConfig = [...config.plugins]
        
    // this is the stash for plugins that need dependencies instantiated first
    let dependentPlugins = new Array()
    
    // do we have any stashing plugins enabled?
    // this is important for the still-loading screen
    let stashingEnabled = false
    
    // only now load the plugins (config.json could have changed the defaults)
    while (pluginsConfig.length > 0) {
        
        // get the first plugin config from the array
        let pluginConfig = pluginsConfig.shift()
        self.log('service-worker', `handling plugin type: ${pluginConfig.name}`)
        
        // load the relevant plugin script (if not yet loaded)
        if (!LibResilientPluginConstructors.has(pluginConfig.name)) {
            self.log('service-worker', `${pluginConfig.name}: loading plugin's source`)
            self.importScripts(`./plugins/${pluginConfig.name}/index.js`)
        }
        
        // do we have any dependencies we should handle first?
        if (typeof pluginConfig.uses !== "undefined") {
            self.log('service-worker', `${pluginConfig.name}: ${pluginConfig.uses.length} dependencies found`)
            
            // move the dependency plugin configs to LibResilientConfig to be worked on next
            for (let i=(pluginConfig.uses.length); i--; i>=0) {
                self.log('service-worker', `${pluginConfig.name}: dependency found: ${pluginConfig.uses[i].name}`)
                // put the plugin config in front of the plugin configs array
                pluginsConfig.unshift(pluginConfig.uses[i])
                // set each dependency plugin config to false so that we can keep track
                // as we fill those gaps later with instantiated dependency plugins
                pluginConfig.uses[i] = false
            }
            
            // stash the plugin config until we have all the dependencies handled
            self.log('service-worker', `${pluginConfig.name}: not instantiating until dependencies are ready`)
            dependentPlugins.push(pluginConfig)
            
            // move on to the next plugin config, which at this point will be
            // the first of dependencies for the plugin whose config got stashed
            continue;
        }
        
        do {
            
            // if the plugin is not enabled, no instantiation for it nor for its dependencies
            // if the pluginConfig does not have an "enabled" field, it should be assumed to be "true"
            if ( ( "enabled" in pluginConfig ) && ( pluginConfig.enabled != true ) ) {
                self.log('service-worker', `skipping ${pluginConfig.name} instantiation: plugin not enabled (dependencies will also not be instantiated)`)
                pluginConfig = dependentPlugins.pop()
                if (pluginConfig !== undefined) {
                    let didx = pluginConfig.uses.indexOf(false)
                    pluginConfig.uses.splice(didx, 1)
                }
                continue;
            }
            
            // instantiate the plugin
            let plugin = LibResilientPluginConstructors.get(pluginConfig.name)(self, pluginConfig)
            self.log('service-worker', `${pluginConfig.name}: instantiated`)
            
            // is this a stashing plugin?
            // we need at least one stashing plugin to be able to use the still-loading screen
            stashingEnabled = stashingEnabled || ( ( "stash" in plugin ) && ( typeof plugin.stash === "function" ) )
            
            // do we have a stashed plugin that requires dependencies?
            if (dependentPlugins.length === 0) {
                // no we don't; so, this plugin goes directly to the plugin list
                self.LibResilientPlugins.push(plugin)
                // we're done here
                self.log('service-worker', `${pluginConfig.name}: no dependent plugins left, pushing directly to LibResilientPlugins`)
                break;
            }
            
            // at this point clearly there is at least one element in dependentPlugins
            // so we can safely assume that the freshly instantiated plugin is a dependency
            // 
            // in that case let's find the first empty spot for a dependency
            let didx = dependentPlugins[dependentPlugins.length - 1].uses.indexOf(false)
            // assign the freshly instantiated plugin as that dependency
            dependentPlugins[dependentPlugins.length - 1].uses[didx] = plugin
            self.log('service-worker', `${pluginConfig.name}: assigning as dependency (#${didx}) to ${dependentPlugins[dependentPlugins.length - 1].name}`)
            
            // was this the last one?
            if (didx >= dependentPlugins[dependentPlugins.length - 1].uses.length - 1) {
                // yup, last one!
                self.log('service-worker', `${pluginConfig.name}: this was the last dependency of ${dependentPlugins[dependentPlugins.length - 1].name}`)
                // we can now proceed to instantiate the last element of dependentPlugins
                pluginConfig = dependentPlugins.pop()
                continue
            }
            
            // it is not the last one, so there should be more dependency plugins to instantiate first
            // before we can instantiate the last of element of dependentPlugins
            // but that requires the full treatment, including checing the `uses` field for their configs
            self.log('service-worker', `${pluginConfig.name}: not yet the last dependency of ${dependentPlugins[dependentPlugins.length - 1].name}`)
            pluginConfig = false
        
        // if pluginConfig is not false, rinse-repeat the plugin instantiation steps
        // since we are dealing with the last element of dependentPlugins
        } while ( (pluginConfig !== false) && (pluginConfig !== undefined) )
        
    }
    
    // do we want to use MIME type guessing based on content?
    // dealing with this at the very end so that we know we can safely set detectMimeFromBuffer
    // and not need to re-set it back in case anything fails
    if (config.useMimeSniffingLibrary === true) {
        // we do not want to hit a NetworkError and end up using the default config
        // much better to end up not using the fancy MIME type detection in such a case
        try {
            // we do! load the external lib
            self.importScripts(`./lib/file-type.js`)
        } catch (e) {
            self.log('service-worker', `error when fetching external MIME sniffing library: ${e.message}`)
        }
        if (typeof fileType !== 'undefined' && "fileTypeFromBuffer" in fileType) {
            detectMimeFromBuffer = fileType.fileTypeFromBuffer
            self.log('service-worker', 'loaded external MIME sniffing library')
        } else {
            self.log('service-worker', 'failed to load external MIME sniffing library!')
        }
    }
    
    // finally -- if we do not have *any* stashing plugins enabled,
    // we need to disable the still-loading screen
    if ( ! stashingEnabled ) {
        config.stillLoadingTimeout = 0
        self.log('service-worker', 'still-loading screen disabled, as there are no stashing plugins enabled')
    }
    
    // we're good!
    return true;
    
}


// flag signifying if the SW has been initialized already
var initDone = false

// load the plugins
let initServiceWorker = async () => {
    // if init has already been done, skip!
    if (initDone) {
        self.log('service-worker', 'skipping service-worker init, already done')
        return false;
    }
    // everything in a try-catch block
    // so that we get an informative message if there's an error
    try {

        // we'll need this later
        let cresponse = null
        let config = null
        
        // self.registration.scope contains the scope this service worker is registered for
        // so it makes sense to pull config from `config.json` file directly under that location
        // TODO: this should probably be configurable somehow
        let configURL = self.registration.scope + "config.json"
        
        // clean version of LibResilientPlugins
        // NOTICE: this assumes LibResilientPlugins is not ever used *before* this runs
        // NOTICE: this assumption seems to hold currently, but noting for clarity
        self.LibResilientPlugins = new Array()
        
        // create the LibResilientPluginConstructors map
        // the global... hack is here so that we can run tests; not the most elegant
        // TODO: find a better way
        self.LibResilientPluginConstructors = self.LibResilientPluginConstructors || new Map()
        
        // point backup of LibResilientPluginConstructors, in case we need to roll back
        // this is used during cleanup in executeConfig()
        // TODO: handle in a more elegant way
        let lrpcBackup = new Map(self.LibResilientPluginConstructors)
        
        // config sources to try
        let config_sources = ['v1', 'v1:verified', 'fetch']
        
        // keep track
        let config_executed = false
        let use_source = false
        
        do {
            
            // init config data var
            let cdata = false
            
            // where are we getting the config.json from this time?
            // we eitehr get a string (name of a cache, or "fetch" for simple fetch()),
            // or undefined (signifying need to use the defaults)
            use_source = config_sources.shift()
            
            try {
                
                // are we using any kind of source, or fall back to defaults?
                if ( typeof use_source === 'string' ) {
                    
                    // some kind of source! cache?
                    if ( ( use_source === 'v1' ) || ( use_source === 'v1:verified' ) ) {
                        self.log('service-worker', `retrieving config.json from cache: ${use_source}.`)
                        cresponse = await caches.match(configURL, {cacheName: use_source})
                        
                        // bail early if we got nothing
                        if (cresponse === undefined) {
                            self.log('service-worker', `config.json not found in cache: ${use_source}.`)
                            continue
                        }
                        
                    // regular fetch?
                    // (we don't have any plugin transports at this point, obviously...)
                    } else if ( use_source === "fetch" ) {
                        self.log('service-worker', `retrieving config.json using fetch().`)
                        cresponse = await fetch(configURL)
                     
                    // that should not happen!
                    } else {
                        throw new Error(`unknown config.json source: ${use_source}; this should never happen!`)
                    }
                    
                    // extract the retrieved JSON and verify it
                    cdata = await getConfigJSON(cresponse)
                    
                    // do we have anything to work with?
                    if (cdata === false) {
                        
                        // cached config.json was invalid; no biggie, try another cache, or fetch()
                        if ( ( use_source === 'v1' ) || ( use_source === 'v1:verified' ) ) {
                            self.log('service-worker', `cached config.json is not valid; cache: ${use_source}`)
                            
                        // if that was a fetch() config, we need to fall-back to defaults!
                        } else {
                            self.log('service-worker', `fetched config.json is not valid; using defaults`)
                        }
                        
                        // no valid config means we need to go around again
                        continue
                        
                    // we good!
                    } else {
                        self.log('service-worker', `valid-looking config.json retrieved.`)
                    }
                    
                // anything else just means "use defaults"
                } else {
                    self.log('service-worker', `retrieving config.json failed completely, using built-in defaults.`)
                    // defaults means an empty object here,
                    // we're merging with actual defaults later on
                    cdata = {}
                }
                
            // exception? no bueno!
            } catch(e) {
                self.log('service-worker', `exception when trying to retrieve config.json: ${e.message}`)
                continue
            }

            // merge configs — either with the retrieved JSON,
            // or with an empty object if using defaults
            config = {...self.LibResilientConfig, ...cdata}
        
            // try executing the config
            // we want to catch any and all possible errors here
            try {
                config_executed = executeConfig(config)
                
            // exception? no bueno
            } catch (e) {
                // inform
                self.log('service-worker', `error while executing config: ${e.message}`)
                // cleanup after a failed config execution
                self.LibResilientPluginConstructors = new Map(lrpcBackup)
                self.LibResilientPlugins = new Array()
                // we are not good
                config_executed = false;
            }
            
            // if we're using the defaults, and yet loading of the config failed
            // something is massively wrong
            if ( ( use_source === undefined ) && ( config_executed === false ) ) {
                // this really should never happen
                throw new Error('Failed to load the default config; this should never happen!')
            }
        
        // NOTICE: endless loop alert?
        // NOTICE: this is not an endless loop because cresponse can only become false if we're using the default config
        // NOTICE: and that single case is handled directly above
        } while ( ! config_executed )
        
        // we're good
        self.LibResilientConfig = config
        self.log('service-worker', 'config loaded.')
        
        // we're good, let's cache the config as verified if we need to
        // that is, if it comes from the "v1" cache...
        if (use_source === "v1") {
            self.log('service-worker', `successfully loaded config.json; caching in cache: v1:verified`)
            await cacheConfigJSON(configURL, cresponse, 'v1:verified')
            
        // we used the v1:verified cache; we should cache config.json into the v1 cache
        // as that will speed things up a bit next time we need to load the service worker
        } else if (use_source === "v1:verified") {
            self.log('service-worker', `successfully loaded config.json; caching in cache: v1`)
            await cacheConfigJSON(configURL, cresponse, 'v1')
        
        // or, was fetch()-ed and valid (no caching if we're going with defaults, obviously)
        } else if (use_source === "fetch") {
            self.log('service-worker', `successfully loaded config.json; caching in caches: v1, v1:verified`)
            // we want to cache to both, so that:
            // 1. we get the extra bit of performance from using the v1 cache that is checked first
            // 2. but we get the verified config already in the v1:verified cache for later
            await cacheConfigJSON(configURL, await cresponse.clone(), 'v1')
            await cacheConfigJSON(configURL, cresponse, 'v1:verified')
        }
        
        // inform
        self.log('service-worker', `service worker initialized.\nstrategy in use: ${self.LibResilientPlugins.map(p=>p.name).join(', ')}`)
        initDone = true;
        
        // regardless how we got the config file, if it's older than 24h...
        if ( ( cresponse !== false ) && (new Date()) - Date.parse(cresponse.headers.get('date')) > 86400000) {
            
            // try to get it asynchronously through the plugins, and cache it
            self.log('service-worker', `config.json stale, fetching through plugins`)
            
            getResourceThroughLibResilient(configURL, {}, 'libresilient-internal', false, false)
                .then(async cresponse=>{
                    
                    // extract JSON and verify it
                    var cdata = await getConfigJSON(cresponse)
                
                    // did that work?
                    if (cdata === false) {
                        // we got a false in cdata, that means it probably is invalid (or the fetch failed)
                        self.log('service-worker', 'config.json loaded through transport other than fetch seems invalid, ignoring')
                        return false
                    
                    // otherwise, we good for more in-depth testing!
                    } else {
                        
                        // if we got the new config.json via a method *other* than plain old fetch(),
                        // we will not be able to use importScripts() to load any pugins that have not been loaded already
                        // 
                        // NOTICE: this *only* checks if we have all the necessary plugin constructors already available
                        //         which signifies that relevant code has been successfully loaded; but there are other failure modes!
                        if (cresponse.headers.get('x-libresilient-method') != 'fetch') {
                            
                            // go through the plugins in the new config and check if we already have their constructors
                            // i.e. if the plugin scripts have already been loaded
                            let currentPlugin = cdata.plugins.shift()
                            do {
                                // plugin constructor not available, meaning: we'd have to importScripts() it
                                // but we can't since this was not retrieved via fetch(), so we cannot assume
                                // that the main domain of the website is up and available
                                // 
                                // if we cache this newly retrieved config.json, next time the service worker gets restarted
                                // we will end up with an error while trying to run importScripts() for this plugin
                                // which in turn would lead to the service worker being unregistered
                                // 
                                // if the main domain is not available, this would mean the website stops working
                                // even though we *were* able to retrieve the new config.json via plugins!
                                // so, ignoring this new config.json.
                                if (!LibResilientPluginConstructors.has(currentPlugin.name)) {
                                    self.log(
                                        'service-worker',
                                        `warning: config.json loaded through transport other than fetch, but specifies not previously loaded plugin: "${currentPlugin.name}"\nignoring the whole config.json.`)
                                    return false;
                                }
                                // push any dependencies into the array, at the very front
                                // thus gradually flattening the config
                                if ("uses" in currentPlugin) {
                                    cdata.plugins.unshift(...currentPlugin.uses)
                                }
                                // get the next plugin to check
                                currentPlugin = cdata.plugins.shift()
                            } while ( (currentPlugin !== false) && (currentPlugin !== undefined) )
                        }
                        
                        self.log('service-worker', `valid config.json successfully retrieved through plugins; caching.`)
                        // cache it, asynchronously, in the temporary cache
                        // as the config has not been "execute-tested" yet
                        cacheConfigJSON(configURL, cresponse, "v1")
                    }
                })
                .catch((e)=>{
                    self.log('service-worker', `stale config.json fetch failed.`)
                })
        }

    } catch(e) {
        // we only get a cryptic "Error while registering a service worker"
        // unless we explicitly print the errors out in the console
        console.error(e)
        // we got an error while initializing the service worker!
        // better play it safe!
        self.registration.unregister()
        return false
    }
    return true;
}

/**
 * fetch counter per clientId
 * 
 * we need to keep track of active fetches per clientId
 * so that we can inform a given clientId when we're completely done
 */
self.activeFetches = new Map();

/**
 * decrement fetches counter
 * and inform the correct clientId if all is finished done
 */
let decrementActiveFetches = (clientId) => {
    // decrement the fetch counter for the client
    self.activeFetches.set(clientId, self.activeFetches.get(clientId)-1)
    self.log('service-worker', '+-- activeFetches[' + clientId + ']:', self.activeFetches.get(clientId))
    if (self.activeFetches.get(clientId) === 0) {
        self.log('service-worker', 'All fetches done!')
        // inform the client
        // client has to be smart enough to know if that is just temporary
        // (and new fetches will fire in a moment, because a CSS file just
        //  got fetched) or not
        postMessage(clientId, {
            allFetched: true
        }).then(()=>{
            self.log('service-worker', 'all-fetched message queued.')
        })
    }
}

/*
 * returns a Promise that either resolves or rejects after a set timeout
 * optionally with a specific error message
 * 
 * time             - the timeout (in ms)
 * timeout_resolves - whether the Promise should resolve() or reject() when hitting the timeout (default: false (reject))
 * error_message    - optional error message to use when rejecting (default: false (no error message))
 * 
 * returns an array containing:
 * - timeout-related Promise as element 0
 * - timeoutID as element 1
 */
let promiseTimeout = (time, timeout_resolves=false, error_message=false) => {
    let timeout_id = null
    let timeout_promise = new Promise((resolve, reject)=>{
        timeout_id = setTimeout(()=>{
                            if (timeout_resolves) {
                                resolve(time);
                            } else {
                                if (error_message) {
                                    reject(new Error(error_message))
                                } else {
                                    reject(time)
                                }
                            }
                        }, time);
    });
    // we need both the promise and the timeout ID
    // so that we can clearTimeout() if/when needed
    return [timeout_promise, timeout_id]
};


/* ========================================================================= *\
|* === LibResilientClient                                                === *|
\* ========================================================================= */


/**
 * Libresilient client class
 * 
 * handles communication with a client
 * 
 * TODO: track active fetches as part of this class?
 * TODO: https://gitlab.com/rysiekpl/libresilient/-/issues/83
 */
let LibResilientClient = class {
    
    async postMessage(message) {
        
        // log
        self.log('service-worker', 'postMessage():', JSON.stringify(message))
        
        // add our message to the message queue
        this.messageQueue.push(message)
        
        // try to get the client from Client API based on clientId
        if (! this.client) {
            this.client = await self
                                    .clients
                                    .get(this.clientId)
        }
        
        // now, we might still not have a valid client here
        if (! this.client) {
            // store it for later, when we do get a valid client
            self.log('service-worker', `postMessage(): no valid client for id: ${this.clientId}, added message to the queue`)
            
        // we have a valid client, it seems!
        } else {
            
            // we want all messages to be delivered, and in order they were added
            // our message is at the end and will get handled in due course
            let msg = false
            while (msg = this.messageQueue.shift()) {
                try {
                    this.client.postMessage(msg);
                } catch (err) {
                    // if we fail for whatever reason, bail from the loop
                    self.log('service-worker', `postMessage(): client seems valid, but postMessage failed; message left in the queue\n- Error message: ${err}`)
                    this.messageQueue.unshift(msg)
                    break
                }
            }
        }
    }
    
    constructor(clientId) {
        
        self.log('service-worker', `new client: ${clientId}`)
        
        // we often get the clientId long before
        // we are able to get a valid client out of it
        // 
        // so we need to keep both
        this.clientId = clientId
        this.client = null;
        
        // queued messages for when we have a client available
        this.messageQueue = []
    }
}

// map of all known clients
let LibResilientClients = new Map()

/**
 * getting a client based on clientId and sending a message
 * (or queueing it for later if we cannot get a valid client)
 */
let postMessage = async (clientId, message) => {
    
    // do we already have a LibResilientClient instance for that client id?
    let client = LibResilientClients.get(clientId)
    
    // if not, create it
    if (client === undefined) {
        client = new LibResilientClient(clientId)
        LibResilientClients.set(clientId, client)
    }
    
    // send (or queue) the message
    await client.postMessage(message)
}

/* ========================================================================= *\
|* === LibResilientResourceInfo                                          === *|
\* ========================================================================= */


/**
 * LibResilient resource info class
 * 
 * keeps the values as long as the service worker is running,
 * and communicates all changes to relevant clients
 * 
 * clients are responsible for saving and keeping the values across
 * service worker restarts, if that's required
 */
let LibResilientResourceInfo = class {
    
    /**
     * constructor
     * needed to set the URL and clientId
     */
    constructor(url, clientId) {
        
        // actual values of the fields
        // only used internally, and stored into the Indexed DB
        this.values = {
            url: '',                        // read only after initialization
            clientId: null,                 // the client on whose behalf that request is being processed    
            method: null,                   // name of the current plugin (in case of state:running) or last plugin (for state:failed or state:success)
            state: null,                    // can be "failed", "success", "running"
            serviceWorker: 'COMMIT_UNKNOWN' // this will be replaced by commit sha in CI/CD; read-only
        }
        
        // errors from the plugins, contains tuples: [plugin-name, exception-or-response-object]
        this.errors = []
        
        // queued messages for when we have a client available
        this.messageQueue = []
        
        // set it
        this.values.url = url
        this.values.clientId = clientId
        // we might not have a non-empty clientId if it's a cross-origin fetch
        
        if (clientId) {
            postMessage(
                clientId,
                {...this.values}
            )
        }
    }
    
    /**
     * update this.values and immediately postMessage() to the relevant client
     * 
     * data - an object with items to set in this.values
     */
    update(data) {
        // debug
        var msg = 'Updated LibResilientResourceInfo for: ' + this.values.url
        // was there a change? if not, no need to postMessage
        var changed = false
        // update simple read-write properties
        Object
            .keys(data)
            .filter((k)=>{
                return ['method', 'state'].includes(k)
            })
            .forEach((k)=>{
                msg += '\n+-- ' + k + ': ' + data[k]
                if (this.values[k] !== data[k]) {
                    msg += ' (changed!)'
                    changed = true
                }
                this.values[k] = data[k]
            })
        // start preparing the data to postMessage() over to the client
        let msgdata = {...this.values}
        // handle any error related info
        if ('error' in data) {
            // push the error info, along with method that generated it, onto the error stack
            this.errors.push([this.values.method, data.error])
            // response?
            if ( (typeof data.error === 'object') && ("statusText" in data.error) ) {
                msgdata.error = `HTTP status: ${data.error.status} ${data.error.statusText}`
            // nope, exception
            } else {
                msgdata.error = data.error.toString()
            }
            changed = true
        }
        self.log('service-worker', msg)
        // send the message to the client
        if (changed) {
            postMessage(
                this.values.clientId,
                msgdata
            );
        }
    }

    /**
     * method property
     */
    get method() {
        return this.values.method
    }
    
    /**
     * state property
     */
    get state() {
        return this.values.state
    }
    
    /**
     * serviceWorker property (read-only)
     */
    get serviceWorker() {
        return this.values.serviceWorker
    }

    /**
     * url property (read-only)
     */
    get url() {
        return this.values.url
    }
    
    /**
     * clientId property (read-only)
     */
    get clientId() {
        return this.values.clientId
    }
}

/* ========================================================================= *\
|* === Main Brain of LibResilient                                            === *|
\* ========================================================================= */

/**
 * generate Request()-compatible init object from an existing Request
 * 
 * req       - the request to work off of
 */
let initFromRequest = (req) => {
    return {
        method: req.method,
        // TODO: ref. https://gitlab.com/rysiekpl/libresilient/-/issues/23
        //headers: req.headers,  TODO: commented out: https://stackoverflow.com/questions/32500073/request-header-field-access-control-allow-headers-is-not-allowed-by-itself-in-pr
        //mode: req.mode,        TODO: commented out because mode: navigate is haram in service worker, it seems
        //credentials: req.credentials, TODO: commented out because credentials: "include" is haram if the Access-Control-Allow-Origin header is '*'
        cache: req.cache,
        redirect: req.redirect,
        referrer: req.referrer,
        integrity: req.integrity
    }
}


/**
 * run a plugin's fetch() method
 * while handling all the auxiliary stuff like saving info in reqInfo
 * 
 * plugin    - the plugin to use
 * url       - string containing the URL to fetch
 * init      - Request() initialization parameters
 * reqInfo   - instance of LibResilientResourceInfo
 */
let libresilientFetch = (plugin, url, init, reqInfo) => {
    
    // we really need to catch any exceptions here
    // otherwise other plugins will not run!
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch#gotchas_when_throwing_errors
    try {
        
        // do we actually have a plugin to work with?
        if ( (! plugin) || (typeof plugin !== "object") || ! ("name" in  plugin) || ! ("fetch" in plugin) ) {
            return Promise.reject(
                new Error("Plugin is not valid.")
            )
        }
        
        // status of the plugin
        reqInfo.update({
            method: (plugin && "name" in plugin) ? plugin.name : "unknown",
            state: "running"
        })
        
        // log stuff
        self.log('service-worker', "LibResilient Service Worker handling URL:", url,
                    '\n+-- init:', Object.getOwnPropertyNames(init).map(p=>`\n    - ${p}: ${init[p]}`).join(''),
                    '\n+-- using method(s):', plugin.name
                )
        
        // starting the fetch...
        // if it errors out immediately, at least we don't have to deal
        // with a dangling promise timeout, set up below
        let fetch_promise = plugin
                                .fetch(url, init)
                                .then((response)=>{
                                    // 5xx? that's a paddlin'
                                    // we do want to pass 3xx and 4xx on back to the client though!
                                    if (response.status >= 500) {
                                        // throw an Error to fall back to LibResilient:
                                        throw new Error('HTTP Error: ' + response.status + ' ' + response.statusText);
                                    }
                                    // ok, we're good
                                    return response
                                })
        
        let timeout_promise, timeout_id
        [timeout_promise, timeout_id] = promiseTimeout(
                                            self.LibResilientConfig.defaultPluginTimeout,
                                            false,
                                            `LibResilient request using ${plugin.name} timed out after ${self.LibResilientConfig.defaultPluginTimeout}ms.`
                                        )
        
        // making sure there are no dangling promises etc
        // 
        // this has to happen asynchronously
        fetch_promise
            // make sure the timeout is cancelled as soon as the promise resolves
            // we do not want any dangling promises/timeouts after all!
            .finally(()=>{
                clearTimeout(timeout_id)
            })
            // no-op to make sure we don't end up with dangling rejected premises
            .catch((e)=>{})
                            
        // race the plugin(s) vs. the timeout
        return Promise
                .race([
                    fetch_promise,
                    timeout_promise
                ]);
    } catch(e) {
        return Promise.reject(e)
    }
}


/**
 * calling a libresilient plugin function on the first plugin that implements it
 * 
 * call - method name to call
 * args - arguments that will be passed to it
 */
let callOnLibResilientPlugin = (call, args) => {
    // find the first plugin implementing the method
    for (let i=0; i<self.LibResilientPlugins.length; i++) {
        if (typeof self.LibResilientPlugins[i][call] === 'function') {
            self.log('service-worker', 'Calling plugin ' + self.LibResilientPlugins[i].name + '.' + call + '()')
            // call it
            // TODO: check if args is an Array?
            return self.LibResilientPlugins[i][call].apply(null, args)
        } 
    }
}

/**
 * Cycles through all the plugins, in the order they got registered,
 * and returns a Promise resolving to a Response in case any of the plugins
 * was able to get the resource
 * 
 * url        - the url we want to fetch
 * init       - the init data for responses
 * clientId   - string containing the clientId of the requesting client
 * useStashed - use stashed resources; if false, only pull resources from live sources
 * doStash    - stash resources once fetched successfully; if false, do not stash pulled resources automagically
 * stashedResponse - TBD
 */
let getResourceThroughLibResilient = (url, init, clientId, useStashed=true, doStash=true, stashedResponse=null) => {
    
    // set-up reqInfo for the fetch event
    var reqInfo = new LibResilientResourceInfo(url, clientId)
    
    // fetch counter
    self.activeFetches.set(clientId, self.activeFetches.get(clientId)+1)
    
    // filter out stash plugins if need be
    var LibResilientPluginsRun = self.LibResilientPlugins.filter((plugin)=>{
        return ( useStashed || typeof plugin.stash !== 'function')
    })
    
    /**
     * this uses Array.reduce() to chain the LibResilientPlugins[]-generated Promises
     * using the Promise the first registered plugin as the default value
     * 
     * see: https://css-tricks.com/why-using-reduce-to-sequentially-resolve-promises-works/
     * 
     * this also means that LibResilientPlugins[0].fetch() below will run first
     * (counter-intutively!)
     * 
     * we are slice()-ing it so that the first plugin is only run once; it is
     * run in the initialValue parameter below already
     * 
     * ref:
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
     */
    return LibResilientPluginsRun
        .slice(1)
        .reduce(
            (prevPromise, currentPlugin)=>{
                return prevPromise.catch((error)=>{
                    self.log('service-worker', "LibResilient plugin error for:", url,
                                '\n+-- method : ' + reqInfo.method,
                                '\n+-- error  : ' + error.toString())
                    // save info in reqInfo -- status of the previous method
                    reqInfo.update({
                        error: error
                    })
                    return libresilientFetch(currentPlugin, url, init, reqInfo)
                })
            },
            // this libresilientFetch() will run first
            // all other promises generated by LibResilientPlugins[] will be chained on it
            // using the catch() in reduce() above
            // skipping this very first plugin by way of slice(1)
            libresilientFetch(LibResilientPluginsRun[0], url, init, reqInfo)
        )
        .then((response)=>{
            // we got a successful response
            decrementActiveFetches(clientId)
            
            // record the success
            reqInfo.update({
                state:"success"
            })
            
            // get the plugin that was used to fetch content
            let plugin = self.LibResilientPlugins.find(p=>p.name===reqInfo.method)
            
            // if it's a stashing plugin...
            if (typeof plugin.stash === 'function') {
                // we obviously do not want to stash
                self.log('service-worker', 'not stashing, since resource is already retrieved by a stashing plugin:', url);
                // since we got the data from a stashing plugin,
                // let's run the rest of plugins in the background to check if we can get a fresher resource
                // and stash it in cache for later use
                self.log('service-worker', 'starting background no-stashed fetch for:', url);
                // event.waitUntil?
                // https://stackoverflow.com/questions/37902441/what-does-event-waituntil-do-in-service-worker-and-why-is-it-needed/37906330#37906330
                try {
                    getResourceThroughLibResilient(url, init, clientId, false, true, response.clone())
                        .catch((e)=>{
                            self.log('service-worker', 'background no-stashed fetch failed for:', url, `\n+-- error: ${e}`);
                        })
                } catch(e) {
                    self.log('service-worker', 'background no-stashed fetch failed for:', url, `\n+-- error: ${e}`);
                }
                // return the response so that stuff can keep happening
                return response

            // otherwise, let's see if we want to stash
            // and if we already had a stashed version that differs
            } else {
                
                // do we have a stashed version that differs?
                if (stashedResponse && stashedResponse.headers) {
                    // this is where we check if the response from whatever plugin we got it from
                    // is newer than what we've stashed
                    self.log('service-worker', 'checking freshness of stashed version of:', url,
                                '\n+-- stashed from   :', stashedResponse.headers.get('X-LibResilient-Method'),
                                '\n+-- fetched using  :', response.headers.get('X-LibResilient-Method'),
                                '\n+-- stashed X-LibResilient-ETag   :', stashedResponse.headers.get('X-LibResilient-ETag'),
                                '\n+-- fetched X-LibResilient-ETag   :', response.headers.get('X-LibResilient-ETag'))
                    // if the method does not match, or if it matches but the ETag doesn't
                    // we have a different response
                    // which means *probably* fresher content
                    if ( ( stashedResponse.headers.get('X-LibResilient-Method') !== response.headers.get('X-LibResilient-Method') )
                    || ( stashedResponse.headers.get('X-LibResilient-ETag') !== response.headers.get('X-LibResilient-ETag') ) ) {
                        // inform!
                        self.log('service-worker', 'fetched version method or ETag differs from stashed for:', url)
                        postMessage(reqInfo.clientId, {
                            url: url,
                            fetchedDiffers: true
                        })
                        // TODO: this should probably modify doStash?
                    }
                }
                
                // do we want to stash?
                if (doStash) {
                    // find the first stashing plugin
                    for (let i=0; i<self.LibResilientPlugins.length; i++) {
                        if (typeof self.LibResilientPlugins[i].stash === 'function') {
                            
                            // ok, now we're in business
                            var hdrs = '\n+-- headers:'
                            response.headers.forEach((v, k)=>{
                                hdrs += `\n    +-- ${k} : ${v}`
                            })
                            self.log(
                                    'service-worker',
                                    `stashing a successful fetch of: ${url}`,
                                    `\n+-- fetched using  : ${response.headers.get('X-LibResilient-Method')}`,
                                    `\n+-- stashing using : ${self.LibResilientPlugins[i].name}`,
                                    hdrs
                                )
                            
                            // working on clone()'ed response so that the original one is not touched
                            // TODO: should a failed stashing break the flow here? probably not!
                            return self.LibResilientPlugins[i].stash(response.clone(), url)
                                .then((res)=>{
                                    // original response will be needed further down
                                    return response
                                })
                        }
                    }
                }
            }
            // if we're here it means we went through the whole list of plugins 
            // and found not a single stashing plugin
            // or we don't want to stash the resources in the first place
            // that's fine, but let's make sure the response goes forth
            return response
        })
        // a final catch... in case all plugins fail
        .catch((err)=>{
            self.log('service-worker', `all plugins failed for:\n+-- url    : ${url}`)

            // cleanup
            reqInfo.update({
                state: "failed",
                error: err
            })
            
            decrementActiveFetches(clientId)
            
            // print out all the errors from plugins in console for debugging purposes
            self.log('service-worker', `request errored out:\n+-- url: ${reqInfo.url}\n+-- plugin errors:\n${
                reqInfo
                    .errors
                    .reduce((acc, cur)=>{
                        if ( (typeof cur[0] !== "string") || (cur[0].length === 0) ) {
                            cur[0] = '<unknown>'
                        }
                        return acc + '    ' + cur.join(': ') + '\n'
                    }, '')}`)
            
            // return the error wrapped in a rejected promise
            return Promise.reject(err)
        })
}

/* ========================================================================= *\
|* === Setting up the event handlers                                     === *|
\* ========================================================================= */
self.addEventListener('install', async (event) => {
    let init_promise = initServiceWorker()
    await event.waitUntil(init_promise)
    if (await init_promise === true) {
        self.skipWaiting()
        // "COMMIT_UNKNOWN" will be replaced with commit ID
        self.log('service-worker', "installed LibResilient Service Worker (commit: COMMIT_UNKNOWN).");
    }
});

self.addEventListener('activate', async event => {
    await event.waitUntil(self.clients.claim())
    self.log('service-worker', "activated LibResilient Service Worker (commit: COMMIT_UNKNOWN).");
});

/*
 * messages to be used on the still-loading screen and on the error page
 * 
 * TODO: make this configurable via config.json
 * TODO: https://gitlab.com/rysiekpl/libresilient/-/issues/82
 */
let still_loading_messages = {
    title: "Still loading",
    body: "The resource is still being loaded, thank you for your patience.<br/><br/>This page will auto-reload in a few seconds. If it does not, please <a href='./'>click here</a>."
}
let success_messages = {
    title: "Loaded, redirecting!",
    body: "The resource has loaded, you are being redirected."
}
let failure_messages = {
    title: "Loading failed.",
    body: "We're sorry, we were unable to load this resource."
}

/**
 * this function returns the still-loading screen and error page HTML
 * 
 * @param init_msgs    text to initialize the HTML with
 * @param success_msgs text to use upon request success; false disables them (false by default)
 * @param failure_msgs text to use upon failure; false disables them (false by default)
 */
let getUserFacingHTML = (init_msgs, success_msgs=false, failure_msgs=false) => {
    
    // header and main part of the HTML page
    let html =
    `<!DOCTYPE html><html><head><title>${init_msgs.title}</title></head><body>
        <style>
            body {
                margin: auto;
                width: 30em;
                margin: 2em auto;
                background: #dddddd;
                color: black;
                font-family: sans-serif;
            }
            h1 {
                height: 1em;
                margin-bottom:
                0.2em
            }
            h1 > span {
                animation: throbber 2s infinite 0s linear;
                font-size: 70%;
                position: relative;
                top: 0.2em;
            }
            #throbber1 {
                animation-delay: 0s;
            }
            #throbber2 {
                animation-delay: 0.5s;
            }
            #throbber3 {
                animation-delay: 1s;
            }
            @keyframes throbber {
                0% {opacity: 1.0;}
                50% {opacity: 0.1;}
                100% {opacity: 1.0;}
            }
            #working {
                color: gray;
                font-family: monospace;
                font-weight: bold;
                display: flex;
                flex-wrap: nowrap;
                justify-content: left;
                margin-top: 0em;
            }
            a {
                color: #2d5589
            }
            #errors {
                font-weight: bold;
                font-size: smaller;
                marin-top: 1em;
                color: maroon;
                opacity: 0.5;
                font-family: monospace;
            }
        </style>
        <h1 id="header">${init_msgs.title}`
        
        if (success_msgs !== false) {
            html += `<span id="throbber1">&#x2022;</span><span id="throbber2">&#x2022;</span><span id="throbber3">&#x2022;</span>`
        }
        
        html += `</h1>
        <p id="working">attempts:&nbsp;<span id="status">1</span></p>
        <p id="text">${init_msgs.body}</p>
        <p id="errors"></p>
        
        <script>
        
        let attempts = 0;
        let header = document.getElementById('header')
        let text = document.getElementById('text')
        let status = document.getElementById('status')
        let errors = document.getElementById('errors')
        
        
        navigator.serviceWorker.addEventListener('message', event => {
            if ( event.data.url === window.location.href ) {`

    // do we have any success messages?
    // if not, ignore the whole success handling bit (including automatic reload!)
    // 
    // try-catch because we really don't want an exception here
    try {
        if (success_msgs !== false) {
            html += `
                if ( event.data.state === 'success' ) {
                    header.innerHTML = "${ success_msgs.title }"
                    document.title = "${ success_msgs.title }"
                    text.innerHTML = "${ success_msgs.body }"
                    
                    window.location.reload()
                }`
        }
    } catch(e) {
        self.log('service-worker', `templating the user-facing HTML threw an error: ${e}`)
    }
    
    // do we have any failure messages?
    // if not, ignore the whole failure handling bit
    // 
    // try-catch because we really don't want an exception here
    try {
        if (failure_msgs !== false) {
            html += `
                    if ( event.data.state === 'failed' ) {
                        header.innerHTML = "${ failure_msgs.title }"
                        document.title = "${ failure_msgs.title }"
                        text.innerHTML = "${ failure_msgs.body }"
                    }`
        }
    } catch(e) {
        self.log('service-worker', `templating the user-facing HTML threw an error: ${e}`)
    }
                       
    // footer
    html +=`
            if ( 'error' in event.data ) {
                attempts += 1;
                status.innerHTML = attempts;
                errors.innerHTML += '(' + event.data.method + ') ' + event.data.error + '<br/>'
            }
        }
    })
    
    </script></body></html>`
    
    // return what we got out of that
    return html
}

self.addEventListener('fetch', async event => {
    return void event.respondWith(async function () {
        
        // initialize the SW; this is necessary as SW can be stopped at any time
        // and restarted when an event gets triggered -- `fetch` is just such an event.
        // 
        // `install` and `activate` events only handle the initial installation of the SW
        // this means that we might end up here without initServiceWorker() ever being run
        // and so in a situation where plugins have never been actually set-up!
        // 
        // the good news is that the config.json should have been cached already
        await initServiceWorker()
        
        // if event.resultingClientId is available, we need to use this
        // otherwise event.clientId is what we want
        // ref. https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/resultingClientId
        var clientId = (event.clientId !== null) ? event.clientId : 'unknown-client'
        if (event.resultingClientId) {
            clientId = event.resultingClientId
            // yeah, we seem to have to send the client their clientId
            // because there is no way to get that client-side
            // and we need that for sane messaging later
            // 
            // so let's also send the plugin list, why not
            // 
            // *sigh* JS is great *sigh*
            postMessage(clientId, {
                clientId: clientId,
                plugins: self.LibResilientPlugins.map((p)=>{return p.name}),
                serviceWorker: 'COMMIT_UNKNOWN'
            })
        }
        
        // counter!
        if (typeof self.activeFetches.get(clientId) !== "number") {
            self.activeFetches.set(clientId, 0)
        }
        
        // info
        self.log('service-worker', "Fetching!",
                    "\n+-- url              :", event.request.url,
                    "\n+-- mode             :", event.request.mode,
                    "\n+-- clientId         :", event.clientId,
                    "\n+-- resultingClientId:", event.resultingClientId,
                    "\n    +-- activeFetches[" + clientId + "]:", self.activeFetches.get(clientId)
                )

        // External requests go through a regular fetch()
        if (!event.request.url.startsWith(self.location.origin)) {
            self.log('service-worker', 'External request, using standard fetch(); current origin: ' + self.location.origin)
            return fetch(event.request);
        }

        // Non-GET requests go through a regular fetch()
        if (event.request.method !== 'GET') {
            self.log('service-worker', 'Non-GET request, using standard fetch()')
            return fetch(event.request);
        }
        
        // clean the URL, removing any fragment identifier
        var url = event.request.url.replace(/#.+$/, '');
        
        // normalize query params, if we want that
        if (self.LibResilientConfig.normalizeQueryParams) {
            self.log('service-worker', 'normalizing query params')
            url = url.split('?')
            if (url.length > 1) {
                url[1] = url[1].split('&').sort().join('&')
            }
            url = url.join('?')
        }
        
        // get the init object from Request
        var init = initFromRequest(event.request)

        // GET requests to our own domain that are *not* #libresilient-info requests
        // get handled by plugins in case of an error
        let lrPromise = getResourceThroughLibResilient(url, init, clientId)
        
        // are we navigating, or just fetching some resource?
        if ( event.request.mode === 'navigate' ) {
            
            // this is the promise we will want to return in the end
            let finalPromise = null
            
            // navigating! is the still-loading screen enabled?
            if ( self.LibResilientConfig.stillLoadingTimeout > 0 ) {
            
                // it is enabled!
                self.log('service-worker', `handling a navigate request; still-loading timeout: ${self.LibResilientConfig.stillLoadingTimeout}.`)
                
                let slPromise, slTimeoutId
                [slPromise, slTimeoutId] = promiseTimeout(self.LibResilientConfig.stillLoadingTimeout, true)
                
                // make sure to clear the timeout related to slPromise
                // in case we manage to get the content through the plugins
                lrPromise
                    .then(()=>{
                        self.log('service-worker', `content retrieved; still-loading timeout cleared.`)
                        clearTimeout(slTimeoutId)
                    })
                
                // prepare a Promise that races the "still loading" screen promise against the LibResilient plugins
                finalPromise =  Promise.race([
                                    // regular fetch-through-plugins
                                    lrPromise,
                                    
                                    // the "still loading screen"
                                    // 
                                    // this will delay a specified time, and ten return a Response
                                    // with very basic HTML informing the user that the page is still loading,
                                    // a Refresh header set, and a link for the user to reload the screen manually
                                    slPromise
                                        .then(()=>{
                                            
                                            // inform
                                            self.log('service-worker', 'handling a navigate request is taking too long, showing the still-loading screen')
                                            
                                            // we need to create a new Response object
                                            // with all the headers added explicitly,
                                            // since response.headers is immutable
                                            var responseInit = {
                                                status:     202,
                                                statusText: "Accepted",
                                                headers: {},
                                                url: url
                                            };
                                            responseInit.headers['Content-Type'] = "text/html"
                                            responseInit.headers['X-LibResilient-Method'] = "still-loading"
                                            
                                            // get the still-loading page contents
                                            let stillLoadingHTML = getUserFacingHTML(
                                                still_loading_messages,
                                                success_messages,
                                                failure_messages
                                            )
                                            
                                            let blob = new Blob(
                                                [stillLoadingHTML],
                                                {type: "text/html"}
                                            )
                                            
                                            return new Response(
                                                blob,
                                                responseInit
                                            )
                                        })
                                ])
                
            // okay, no still-loading screen, but this is still a navigate request, so we want to display something to the user
            } else {
                self.log('service-worker', `handling a navigate request, but still-loading screen is disabled.`)
                finalPromise = lrPromise
            }
            
            // return finalPromise, with a catch!
            return finalPromise.catch((e)=>{
                // inform
                self.log('service-worker', 'handling a failed navigate request, showing the user-facing error screen')
                
                // we need to create a new Response object
                // with all the headers added explicitly,
                // since response.headers is immutable
                var responseInit = {
                    status:     404,
                    statusText: "Not Found",
                    headers: {},
                    url: url
                };
                responseInit.headers['Content-Type'] = "text/html"
                responseInit.headers['X-LibResilient-Method'] = "failed"
                
                // get the still-loading page contents
                // it only needs to display the failure messages
                let stillLoadingHTML = getUserFacingHTML(
                    failure_messages
                )
                
                let blob = new Blob(
                    [stillLoadingHTML],
                    {type: "text/html"}
                )
                
                return new Response(
                    blob,
                    responseInit
                )
            })
            
        // nope, just fetching a resource
        } else {
            // no need for a still-loading screen, no need for an user-facing error screen if the request fails
            self.log('service-worker', 'handling a regular request; still-loading screen will not be used.')
            return lrPromise
        }
    }())
});


/**
 * assumptions to be considered:
 * every message contains clientId (so that we know where to respond if/when we need to)
 */
self.addEventListener('message', async (event) => {
    
    // initialize the SW; this is necessary as SW can be stopped at any time
    // and restarted when an event gets triggered -- `message` is just such an event.
    // 
    // `install` and `activate` events only handle the initial installation of the SW
    // this means that we might end up here without initServiceWorker() ever being run
    // and so in a situation where plugins have never been actually set-up!
    // 
    // the good news is that the config.json should have been cached already
    await initServiceWorker()
    
    // inform
    var msg = 'Message received!'
    Object.keys(event.data).forEach((k)=>{
        msg += '\n+-- key: ' + k + " :: val: " + event.data[k]
    })
    self.log('service-worker', msg);
    
    /*
     * supporting stash(), unstash(), and publish() only
     */
    if (event.data.stash || event.data.unstash || event.data.publish) { 
        if (event.data.stash) {
            callOnLibResilientPlugin('stash', event.data.stash)
        }
        if (event.data.unstash) {
            callOnLibResilientPlugin('unstash', event.data.unstash)
        }
        if (event.data.publish) {
            callOnLibResilientPlugin('publish', event.data.publish)
        }
    }
});
