function main() {
    var os = userAgentToOS();
    if (os!=='') {
        document.getElementById("recommendation-section").hidden = false;
        document.getElementById("noscript-headline").hidden = true;

        var recommend = document.getElementById("recommend");
        recommend.appendChild(document.getElementById(os));
    }
}

function userAgentToOS() {
    // return the OS, if in doubt, an empty string is returned
    var uA = navigator.userAgent;
    if (uA.includes('Ubuntu; Mobile') || uA.includes('Ubuntu; Tablet') || (uA.includes('Linux; Ubuntu') && uA.includes('like Android'))) {
        // first two are from https://daker.me/2013/11/ubuntu-touch-user-agent.html, third one if from testing with current ubuntu touch device
        return 'ubuntutouch';
    } else if (uA.includes('iPad') && uA.includes('Mobile'))
        return 'ios';
    else if (uA.includes('iPhone') && uA.includes('Mobile'))
        return 'ios';
    else if (uA.includes('Android'))
        return 'android';
    else if (uA.includes('Linux'))
        return 'linux';
    else if (uA.includes('Windows'))
        return 'windows';
    else if (uA.includes('Macintosh') || uA.includes('Mac OS X')) {
        // ipadOS uses the same user agent as macOS intentionally.
        // as there is no official touch screen for macOS, checking maxTouchPoints seems to be quite safe
        if (navigator.maxTouchPoints && navigator.maxTouchPoints > 2) {
            return 'ios';
        } else {
            return 'macos';
        }
    } else
        return '';
}

main();
