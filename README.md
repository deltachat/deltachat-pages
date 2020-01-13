Delta Chat Website
================================================================================

This repository contains the default website of Delta Chat -
feel free to edit any file as you like and send a pull request.

Formatting of blog posts and web pages
--------------------------------------

In the various source text files that are used 
for generating the static https://delta.chat website 
we use [Semantic linefeeds](http://rhodesmill.org/brandon/2012/one-sentence-per-line/)
to keep "diffs" for changes small. The gist of it is
that you put each "phrase" part of a sentence into a single line.


How to create a new blog post
--------------------------------------------------------------------------------

- In the directory `_posts` create new file in the form `YYYY-MM-DD-title.md` 
  e.g by copying an existing file.

- Write your blog post to the file and do not forget 
  to add or modify the `title:` and `author:` line atop it.

- That's all, the result goes to https://delta.chat/en/blog , and the
  [RSS-Feed](https://delta.chat/feed.xml). Ping r10s or compl4xx on
  irc.freenode.net/#deltachat so they post it to
  [Mastodon](https://chaos.social/@delta),
  [Twitter](https://twitter.com/delta_chat),
  [Friendica](https://ennibook.de/profile/delta_chat) and other services.


Testing changes
--------------------------------------------------------------------------------

- You can create your fork on GitHub and GitHub pages; 
  the forked website will then be available at 
  `https://<your-username>.github.io/deltachat-pages/`

- Alternatively, [install Jekyll](https://jekyllrb.com/docs/installation/) 
  on your local machive 
  and execute `jekyll serve --destination <path-to-build-dir>` 
  in the source directory.


Directory structure
--------------------------------------------------------------------------------

- `/en` - Contains the source language files in Markdown. Can be edited directly.

- `/de`, `/es`, `fr` … - Contain the translated files; 
  translation is done through .po files that are translated using Transifex, see above. 
  You must not edit translated files directly here, 
  but you can add additional files that are unique to the language.

- `/_layouts` - This directory contains a default layout template 
  for each language (the layout is referenced in Markdown using _layout: name_)

- `/assets` - Page specific images and files; 
  in general, we use one subdirectory per page or section.

- `/assets/css` - CSS and layout specific images and files.


Translate the website
--------------------------------------------------------------------------------

You can edit and improve the existing translations 
with [Transifex](https://www.transifex.com/delta-chat/delta-chat-pages/). 
To **update existing translations from** the Transifex server, 
see the scripts in the `tools` folder.

### Before you run anything follow these initial setup steps:

- make sure `translate-toolkit` and `transifex-client` are installed

- run following commands
```
tx init --user=api --pass=<your api token>
tx set --auto-remote https://www.transifex.com/projects/p/delta-chat-pages/
```
for more info see the comments in `./tools/t-dance.sh`.

### To **add a new language**, the followinging steps are required once:

- create the directory `/<lang>`

- add the language to `tlangs` in `/tools/t-dance.sh` 
  and run `./t-dance.sh pull` from the `tools`-directory.

- check the language selection in `/index.html` 
  and in `/_includes/footer-languages.html`.

### To **add a new page**:

- create the source as `en/<name>.md`

- modify `tools/.tx/config` - add a section for the new page
  modify `tools/t-dance.sh` - add your page to `sfiles` variable

- run `cd tools; ./t-dance push`


Further Hints
--------------------------------------------------------------------------------

- wherever possible, use **Markdown** instead of HTML, 
  esp. in files for translation.

- **no JavaScript** wherever possible, 
  no **weird CSS** nor other complicated things.

- the layout should be **as simple as possible** 
  and should always work on **small mobile screens** as well as on **desktops**.

- when layouting, do not force a special structure. Header, Content, Footer - done.

- no complex navigation - Simply link subpages from the main pages.

- **no one-page-layout** - we also have sites with long text, 
  and we do not want to have separate layouts.

- we do not want a complex navigation, some toplinks, a footer, done.

- Remember: **Form follows function, KISS.** The site should be dead-simple.

- Finally: Have fun :)


License
--------------------------------------------------------------------------------

Licensed GPLv3+, see the LICENSE file for details.

Copyright © 2017–2020 Delta Chat contributors
