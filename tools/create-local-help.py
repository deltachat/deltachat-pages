#!/usr/bin/env python3

# This script generates the local help files for mobile apps & desktop client

# required arguments:
#   srcdir           source dir
#   destdir          destination dir
#
# options:
#   --add_top_links :  add links back to top of file
#   --add_pagefind  :  add javascript files for page search


# the structure of the help files is:
# - ANY_DIR/help/LANG/help.html  (files generated by deltachat-pages)
# - ANY_DIR/help/help.css  (file is should be provided by deltachat-UI, not generated by deltachat-pages)


import argparse
import functools
import os
import pathlib
import re
from shutil import copyfile

import requests
from requests.exceptions import ConnectTimeout

www = requests.Session()
www.request = functools.partial(www.request, timeout=15)

# list all files that should go to the local help here.
# the path should be the path used eg. in the <img> tag.
linked_files = [
    "assets/help/edit-icon.png",
    "assets/help/email-icon.png",
    "assets/help/go-to-original.png",
    "assets/help/green-checkmark.png",
    "assets/help/green-dot.png",
    "assets/help/lock-icon.png",
    "assets/help/qr-icon.png",
    "assets/help/saved-icon.png",
    "assets/home/delta-what-optim.png"
]

# list all anchors (fragments) that are used from outside to access the help
# eg. `multiclient` if the help is opened with `help#multiclient`.
# (using a bit more cryptic/basic anchors
# protects against renaming in UI and translation of the anchors :)
anchors_from_external = [
    "e2ee",
    "e2eeguarantee",
    "ephemeralmsgs",
    "howtoe2ee",
    "multiclient"
]

def read_file(filename):
    f = open(filename, 'r')
    content = f.read()
    f.close()
    return content


def write_file(filename, content):
    f = open(filename, 'w')
    f.write(content)
    f.close()


reachable_cache = {}
def url_is_reachable(url):
    if not url in reachable_cache:
        print(f"  checking {url}")
        try:
            response = www.get(url)
        except ConnectTimeout:
            print(f"  connection timed out for {url}")
            reachable_cache[url] = False
            return False

        if response.status_code == 200:
            reachable_cache[url] = True
        elif response.status_code == 403 and (url.startswith("https://opentechfund.org") or url.startswith("https://www.opentech.fund")):
            reachable_cache[url] = True # maybe a temporary hickup
        elif response.status_code == 502 and url == "https://saltpack.org/":
            reachable_cache[url] = True # maybe a temporary hickup
        elif response.status_code == 404 and url == "https://crates.io/crates/pgp":
            reachable_cache[url] = True # maybe a temporary hickup
        else:
            print(f"  status code for {url}: {response.status_code}")
            reachable_cache[url] = False

    return reachable_cache[url]


def generate_file(srcdir, destdir, lang, file, add_top_links, add_pagefind):
    print("generate local help in " + destdir + "/" + lang + "/" + file)

    content = read_file(srcdir + "/" + lang + "/" + file)

    # remove boilerplate
    content = re.sub(r"^.*<div id=\"content\">.*<h1>.*?</h1>.*?<ul.*?>",
                       "<!DOCTYPE html>\n"
                     + "<html lang=\"" + lang + "\">"
                     +   "<head>"
                     +     "<meta charset=\"UTF-8\" />"
                     +     "<meta name=\"viewport\" content=\"initial-scale=1.0\" />"
                     +     "<link rel=\"stylesheet\" href=\"../help.css\" />"
                     +   "</head>"
                     +   "<body>"
                     +     "<ul id=\"top\">",
                     content,
                     flags=re.MULTILINE|re.DOTALL)

    content = re.sub(r"</div>.*?</body>.*</html>.*$",
                         "</body>"
                     + "</html>",
                     content,
                     flags=re.MULTILINE|re.DOTALL)

    content = re.sub(r"<p><a href=\"donate\".*?>.*?</a></p>",
                      "",
                     content,
                     flags=re.MULTILINE|re.DOTALL)

    # convert relative to absolute links
    content = re.sub(r"<a href=\"../(.*?)\"",
                      "<a href=\"https://delta.chat/\\1\"",
                      content,
                      flags=re.MULTILINE|re.DOTALL)

    content = re.sub(r"<a href=\"([a-z0-9\-]+)\"",
                      "<a href=\"https://delta.chat/" + lang + "/\\1\"",
                      content,
                      flags=re.MULTILINE|re.DOTALL)

    for linked_file in linked_files:
        srcfile  = "../" + linked_file
        destfile = "../" + linked_file.split("/")[-1]
        content = re.sub(srcfile, destfile, content)

    if add_top_links:
        top_link = "<p class=\"back\"><a href=\"#top\">^</a></p>"
        content = re.sub(r"<h([234].*?)>",
                          top_link + "<h\\1>",
                         content,
                         flags=re.MULTILINE|re.DOTALL) + top_link
    if add_pagefind:
        content = re.sub(r"</head>",
                            "<script src=\"../pagefind/pagefind-ui.js\"></script>"
                          + "<script src=\"../start-pagefind.js\"></script>"
                          + "</head>",
                         content,
                         flags=re.MULTILINE|re.DOTALL)

    # check that all links are absolute or known relative
    urls = re.findall(r"(href|src).*?=.*?\"?([^\">]*)", content)
    for url in urls:
        url = url[1]
        if url.startswith("#"):
            anchor = url[1:]
            if content.find('"' + anchor) == -1:
                print(f"\033[91m  ERROR: unresolved anchor in {lang}/{file}: \033[0m {url}")
        elif url.startswith("https://"):
            if not url_is_reachable(url):
                print(f"\033[91m  ERROR: link in {lang}/{file} is not reachable: \033[0m {url}")
        else:
            local_file = destdir + "/" + lang + "/" + url
            if not pathlib.Path(local_file).exists() and not url.startswith("./pagefind"):
                print(f"\033[91m  ERROR: unresolved link in {lang}/{file}: \033[0m {url}")

    for anchor in anchors_from_external:
        if content.find('id="' + anchor + '"') == -1:
            print(f"\033[91m  ERROR: missing anchor in {lang}/{file}: \033[0m {anchor}")

    write_file(destdir + "/" + lang + "/" + file, content)


def generate_lang(srcdir, destdir, lang, add_top_links, add_pagefind):
    os.makedirs(destdir + "/" + lang, exist_ok=True)
    generate_file(srcdir, destdir, lang, "help.html", add_top_links, add_pagefind)


def generate_help(srcdir, destdir, add_top_links, add_pagefind):
    for linked_file in linked_files:
        srcfile  = srcdir  + "/" + linked_file
        destfile = destdir + "/" + linked_file.split("/")[-1]
        print("copy " + srcfile + " to " + destfile)
        copyfile(srcfile, destfile)

    languages = ["cs", "de", "en", "es", "fr", "id", "it", "pl", "pt", "nl", "ru", "sk", "sq", "uk", "zh_CN"]
    for lang in languages:
        generate_lang(srcdir, destdir, lang, add_top_links, add_pagefind)


if __name__ == "__main__":

    parser = argparse.ArgumentParser(description='Parse arguments')

    parser.add_argument('srcdir', type=str, help='source dir')
    parser.add_argument('destdir', type=str, help='destination dir')

    parser.add_argument('--add_top_links', action='store_true', help='add links back to top of file')
    parser.add_argument('--add_pagefind', action='store_true', help='add javascript files for page search')

    args = parser.parse_args()

    print("using source directory:        " + args.srcdir)
    print("using destination directory:   " + args.destdir)
    print("add links back to top of file: " + str(args.add_top_links))
    print("add pagefind: " + str(args.add_pagefind))

    if not os.path.isdir(args.srcdir):
        raise SystemExit("Error: " + args.srcdir + " is no existent directory.")

    if not os.path.isdir(args.destdir):
        raise SystemExit("Error: " + args.destdir + " is no existent directory.")

    generate_help(args.srcdir, args.destdir, args.add_top_links, args.add_pagefind)
