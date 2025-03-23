Delta Chat Website
================================================================================

This repository contains the default website of Delta Chat -
feel free to edit any file you like and send a pull request.

Formatting of blog posts and web pages
--------------------------------------

In the various source text files that are used 
for generating the static https://delta.chat website 
we use [Semantic linefeeds](http://rhodesmill.org/brandon/2012/one-sentence-per-line/)
to keep "diffs" for small changes. The gist of it is
that you put each "phrase" part of a sentence into a single line.


How to create a new blog post
--------------------------------------------------------------------------------

- In the directory `_posts` create new file in the form `YYYY-MM-DD-title.md` 
  e.g by copying an existing file.

- Write your blog post to the file and do not forget 
  to add or modify the `title:` and `author:` line on the top.

- **images up to a width of ~400px**
  can be added with `<img style="float: left" ...>` or `<img style="float: left" ...>` -
  on small mobile screens, where floating is barely possible, these images will get their own paragraph
  in case you add an **empty line** after the images (also see existing blog posts as a pattern)

- for **larger images** or if you do not want floating,
  omit the floating rule and just use `<img ...>` followed by an **empty line**;
  these images always get their own paragraph then

- That's all, the result goes to https://delta.chat/en/blog , and the
  [RSS-Feed](https://delta.chat/feed.xml).


Testing changes
--------------------------------------------------------------------------------

- You can create your fork on GitHub and GitHub pages; 
  the forked website will then be available at 
  `https://<your-username>.github.io/deltachat-pages/`

- If you have Nix installed,
  you can build a website preview in `result/` with `nix build`
  or run `nix develop` and start `jekyll serve` in development shell
  to have a live preview at http://127.0.0.1:4000/en/
  If you don't have Nix installed,
  you can install it with [The Determinate Nix Installer](https://github.com/DeterminateSystems/nix-installer).

- Alternatively, [install Jekyll](https://jekyllrb.com/docs/installation/) 
  on your local machive, run `bundle install` in this directory,
  and execute `bundle exec jekyll serve`.
  Then open http://127.0.0.1:4000/en/ in a browser
  to preview the English version of the website.

- If you get Ruby dependency problems, you can also build the page in a docker
  container:  
  ```sudo docker run -i -p 4000:4000 -v $PWD:/srv/jekyll -v $PWD/_site:/srv/jekyll/_site jekyll/builder:4 /bin/bash -c "chmod 777 /srv/jekyll && jekyll serve"```  
  You can open the page in a browser at http://localhost:4000/en/.

Directory structure
--------------------------------------------------------------------------------

- `/en` - Contains the source language files in Markdown. Can be edited directly.

- `/de`, `/es`, `fr` … - Contains the translated files, use Transifex to edit them;
  you **MUST NOT** edit any files in these directories,
  as they will be overwritten with the next pull from Transifex.

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

- run the following commands (answer `n` to the question `Do you want to delete it and reinit the project? [Y/n]:`)
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

- add the language to `/_includes/footer-languages.html` and `redirect.js`

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

Updating typos in the English sources
**that shall not result in retranslations**
is a bit tricky:

The English source is used as the ID for the translations, so fixing a typo will change the ID and result in translations needing to be redone.

Currently, this can be handled only manually:
- fix the typo or grammar
- run `./tools/t-dance push--do-this-only-from-master`
  and then `./tools/t-dance.sh pull`
- use `git diff` to check if translations are missing,
  if so, go to the string on Transifex,
  the old translation is typically shown as a **suggestion**

Of course, that can also be done by the translators,
but it is good to keep that in mind,
and avoid unnecessary changes to the English sources.

If a **retranslation is wanted**, of course,
all these manual steps are not needed.
Same for a blog post that is not translated.


Further Hints
--------------------------------------------------------------------------------

- wherever possible, use **Markdown** instead of HTML, 
  esp. in files for translation.

- **no JavaScript** wherever possible, 
  no **weird CSS** or other complicated things.

- the layout should be **as simple as possible** 
  and should always work on **small mobile screens** as well as on **desktops**.

- while laying out a page, don't force a special structure. Header, Content, Footer - done.

- no complex navigation - Simply link subpages from the main pages.

- **no one-page-layout** - we also have sites with long text, 
  and we do not want to have separate layouts.

- we do not want a complex navigation, some toplinks, a footer, done.

- Remember: **Form follows function, KISS.** The site should be dead-simple.

- Finally: Have fun :)


License
--------------------------------------------------------------------------------

Licensed GPLv3+, see the LICENSE file for details.
