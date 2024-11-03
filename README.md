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

- **images up to a width of ~400px**
  can be added with `<img style="float: left" ...>` or `<img style="float: left" ...>` -
  on small mobile screens, where floating is barely possible, these images will get their own paragraph
  in case you add an **empty line** after the images (also see existing blog posts as a pattern)

- for **larger images** or if you do not want floating,
  omit the floating rule and just use `<img ...>` followed by an **empty line**;
  these images always get their own paragraph then

- That's all, the result goes to https://delta.chat/en/blog , and the
  [RSS-Feed](https://delta.chat/feed.xml).

- If you have images of text with transparency (for example a mermaid diagram/flowchart), then consider proving an alternative image for darkmode like this `<img src="diagram-light.svg" data-dark-src="diagram-dark.svg" />`
  - or if your image is simple and black/white you can also try out `class="invert-in-darkmode"` which uses css to invert the colors.

Testing changes
--------------------------------------------------------------------------------

- You can create your fork on GitHub and GitHub pages; 
  the forked website will then be available at 
  `https://<your-username>.github.io/deltachat-pages/`

- If you have Nix installed,
  you can build website preview in `result/` with `nix build`
  or run `nix develop` and start `jekyll serve` in development shell
  to have live preview at http://127.0.0.1:4000/en/
  If you don't have Nix installed,
  you can install it with [The Determinate Nix Installer](https://github.com/DeterminateSystems/nix-installer).

- Alternatively, [install Jekyll](https://jekyllrb.com/docs/installation/) 
  on your local machive, run `bundle install` in this directory,
  and execute `bundle exec jekyll serve`.
  Then open http://127.0.0.1:4000/en/ in a browser
  to preview the English version of the website.

- If you get Ruby dependency problems, you can also build the page in a docker
  container:  
  ```sudo docker run -i -p 4000:4000 -v $PWD:/srv/jekyll -v $PWD/_site:/srv/jekyll/_site jekyll/builder:3 /bin/bash -c "chmod 777 /srv/jekyll && jekyll serve"```  
  You can open the page in the browser at http://localhost:4000.

Directory structure
--------------------------------------------------------------------------------

- `/en` - Contains the source language files in Markdown. Can be edited directly.

- `/de`, `/es`, `fr` … - Contain the translated files, use Transifex to edit them;
  you **MUST NOT** edit any file in these directories,
  they will be overwritten with the next pull from Transifex.

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


### Initial setup

- make sure `translate-toolkit` and `transifex-client` are installed

- run following commands (answer n to the question `Do you want to delete it and reinit the project? [Y/n]:`)
```
cd ./tools
tx init --user=api --pass=<your api token>
tx set --auto-remote https://www.transifex.com/projects/p/delta-chat-pages/
# fix historical typo in word verifiy
sed -i s#translations/delta-chat-pages.verifiy-downloadspo#translations/delta-chat-pages.verify-downloadspo# .tx/config
```
for more info see the comments in `./tools/t-dance.sh`.


### Add a new language

- create the directory `/<lang>`

- add the language to `tlangs` in `tools/t-dance.sh`
  and run `./tools/t-dance.sh pull`.
  copy files not handled by Transifex (./en/gdpr*) and adapt the header.

- check the language selection in `/_includes/footer-languages.html`.

- the following step is outside the scope of this repo:
  add a server-redirect, template is at
  <https://github.com/deltachat/sysadmin/blob/master/page/delta.chat/delta.chat>


### Update translations

- run `./tools/t-dance.sh pull`


### Add a new page

- create the source as `en/<name>.md`

- modify `tools/.tx/config` - add a section for the new page

- modify `tools/t-dance.sh` - add your page to `sfiles` variable

- after merging, from master, run `./tools/t-dance push--do-this-only-from-master`

- after that, you may want to give the file a meaningful name on Transifex
  ("Dashboard / Delta Chat Website / Resources / en.po",
  then in the upper right menu "Settings / Name" - leave "Slug" unchanged)


### Update _typos_ in sources

Updating typos in the english sources
**that shall not result in retranslations**
is a bit tricky:

The english source is used as the ID for the translations -
fixing a typo will change the ID an
will result in translations needed to be redone.

Currently, this can be handled only manually:
- fix the typo, grammar minor change
- run `./tools/t-dance push--do-this-only-from-master`
  and then `./tools/t-dance.sh pull`
- use `git diff` to check if translations are missing,
  if so, go to the string on Transifex,
  the old translation is typically shown as a **suggestion**

Of course, that can also be done by the translators,
but it is good to have that in mind,
and avoid unnecessary changes on the english sources.

If a **retranslation is wanted**, of course,
all these manual steps are not needed.
Same for the blog that is not translated.


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
