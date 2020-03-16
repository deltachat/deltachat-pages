function main() {
    document.getElementById("recommendation-section").hidden = false;
    document.getElementById("noscript-headline").hidden = true;

    var recommend = document.getElementById("recommend");
    recommend.appendChild(document.getElementById(userAgentToOS()));

}

function userAgentToOS() {
    var uA = navigator.userAgent;
    if (uA.includes('iPad') && uA.includes('Mobile'))
        return 'ios'
    else if (uA.includes('iPhone') && uA.includes('Mobile'))
        return 'ios'
    else if (uA.includes('Android'))
        return 'android'
    else if (uA.includes('Linux'))
        return 'linux'
    else if (uA.includes('Windows'))
        return 'windows'
    else if (uA.includes('Macintosh') || uA.includes('Mac OS X'))
        return 'macos'
}

main()