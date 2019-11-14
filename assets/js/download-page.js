function main() {
    var soon = document.getElementsByClassName("soon");
    for (var i = 0; i < soon.length; i++) {
        var element = soon[i];
        element.setAttribute('title', "Comming Soon!");
    }

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
        return 'osx'
}

main()