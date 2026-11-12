function main() {
    var os = userAgentToOS();
    if (os!=='') {
        document.getElementById("boxes").removeAttribute("open");
        document.getElementById("boxes-summary").hidden = false;
        document.getElementById("recommendation").appendChild(document.getElementById(os));
    }
}

function userAgentToOS() {
    // return the OS, if in doubt, an empty string is returned
    var uA = navigator.userAgent;
    if (uA.includes('Ubuntu; Mobile') || uA.includes('Ubuntu; Tablet') || (uA.includes('Linux; Ubuntu') && uA.includes('like Android'))) {
        // first two are from https://daker.me/2013/11/ubuntu-touch-user-agent.html, third one is from testing with recent ubuntu touch device
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

var COPY_ICON = '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
var CHECK_ICON = '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';

function addCopyButtons() {
    if (!navigator.clipboard) return;
    var root = document.querySelector('.download-content');
    var label = root.dataset.copyLabel || 'Copy';
    var copied = root.dataset.copiedLabel || 'Copied';
    document.querySelectorAll('.install-option pre').forEach(function (pre) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'copy-btn';
        // icon instead of text: fits every language without covering the command
        btn.innerHTML = COPY_ICON;
        btn.title = label;
        btn.setAttribute('aria-label', label);
        btn.addEventListener('click', function () {
            navigator.clipboard.writeText(pre.querySelector('code').textContent).then(function () {
                btn.innerHTML = CHECK_ICON;
                btn.title = copied;
                btn.setAttribute('aria-label', copied);
                setTimeout(function () {
                    btn.innerHTML = COPY_ICON;
                    btn.title = label;
                    btn.setAttribute('aria-label', label);
                }, 1500);
            });
        });
        pre.appendChild(btn);
    });
}

main();
addCopyButtons();
