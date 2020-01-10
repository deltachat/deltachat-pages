#!/usr/bin/env python3


from pathlib import Path
import os
import re


def generate_file(destdir, lang, file):
    print("generate local help in " + destdir + lang + "/" + file)


def generate_lang(destdir, lang):
    generate_file(destdir, lang, "help")


def generate_help(destdir):
    generate_lang(destdir, "en")


if __name__ == "__main__":

    # if we're not inside the tools directory, go in
    if Path('tools').exists():
        os.chdir('tools')

    generate_help("../../deltachat-android/assets/help/")