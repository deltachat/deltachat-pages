/* ========================================================================= *\
|* === Delay plugin                                                      === *|
\* ========================================================================= */

/**
 * this plugin does not implement any push method
 */

// no polluting of the global namespace please
(function(LRPC){
    // this never changes
    const pluginName = "delay"
    LRPC.set(pluginName, (LR, init={})=>{
    
        /*
         * plugin config settings
         */
        
        // sane defaults
        let defaultConfig = {
            // array of two-element arrays
            // ["/regex_match/", <slowdown in ms>]
            // first match wins
            delay: [],
            
            // default delay, in ms
            defaultDelay: 1000,
            
            // plugin to wrap, regular fetch by default
            uses: [{
                name: "fetch"
            }]
        }
        
        // merge the defaults with settings from init
        let config = {...defaultConfig, ...init}
        
        // reality check: if no wrapped plugin configured, or more than one, complain
        if (config.uses.length != 1) {
            throw new Error(`Expected exactly one plugin to wrap, but ${config.uses.length} configured.`)
        }
        
        /**
        * getting content using regular HTTP(S) fetch()
        */
        let fetchContent = (url, init={}) => {
            LR.log(pluginName, `delayed retrieval: ${url}`)
            // we really want to make fetch happen, Regina!
            // TODO: this change should *probably* be handled on the Service Worker level
            init.cache = 'reload'
            
            // establish the default delay
            let impose_delay = config.defaultDelay
            LR.log(pluginName, `default delay: ${impose_delay}`)
            
            // see if we have any specific delay rule that matches
            // first match wins
            for (sp of config.delay) {
                LR.log(pluginName, `checking delay rule: ${sp}`)
                let re = new RegExp(sp[0])
                if (url.search(re) > -1) {
                    LR.log(pluginName, `delay rule matched: ${sp[0]}, delay set to: ${sp[1]}`)
                    impose_delay = sp[1]
                    break;
                }
            }
            
            // wait a bit and run the first wrapped plugin's fetch()
            return promiseTimeout(impose_delay, true)[0]
                .then(() => {
                    return config.uses[0].fetch(url, init)
                })
        }

        // return the plugin
        return {
            name: pluginName,
            description: 'Configurable delay!',
            version: 'COMMIT_UNKNOWN',
            fetch: fetchContent,
            uses: config.uses
        }

    })
// done with not polluting the global namespace
})(LibResilientPluginConstructors)
