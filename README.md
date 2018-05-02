Delta Chat Website
================================================================================

This repository contains the default website of Delta Chat -
feel free to edit any file as you like and send a pull request.

How to create a new blog post
--------------------------------------------------------------------------------

- In the directory `_posts` create new file in the form `YYYY-MM-DD-title.md` eg. by copying an existing file
- Write your blog post to the file and do not forget to add or modify the `title:` and `author:` line atop
- That's all, the result goes to https://delta.chat/en/blog , the [RSS-Feed](https://delta.chat/feed.xml), [Twitter @delta_chat](https://twitter.com/delta_chat), [Friendica](https://ennibook.de/profile/delta_chat) and maybe even more.

Testing changes
--------------------------------------------------------------------------------

- You can create your fork on Github and Github pages; the forked website will then be available at `https://<your-username>.github.io/deltachat-pages/`
- Alternatively, [install Jekyll](https://jekyllrb.com/docs/installation/) on your local machive and execute `jekyll serve --destination <path-to-build-dir>` in the source directory.

Directory structure
--------------------------------------------------------------------------------

- `/en` - Contains the source language files in Markdown. Can be edited directly.
- `/de`, `/es`, `fr` ... - Contain the translated files; translation is done through .po files that are translated using Transifex, see above. You must not edit translated files directly here but you can add additional files that are unique to the language.
- `/_layouts` - This directory contains a default layout template for each language (the layout is referenced in Markdown using _layout: name_)
- `/assets` - Page specific images and files; in general, we use one subdirectory per page or section here.
- `/assets/css` - CSS and layout specific images and files here.

Translate the website
--------------------------------------------------------------------------------

You can edit and improve the existing translations with [Transifex](https://www.transifex.com/delta-chat/delta-chat-pages/); if you want to add a new language, please add it there or [contact us](https://delta.chat/en/contribute#channels).

To update the translations from the Transifex server, see the scripts and the documentation in the `tools` folder.

If you **add a new language** do not forget to check the automatic language selection in `index.html` in the root directory.

Further Hints
--------------------------------------------------------------------------------

- whereever possible, use **Markdown** instead of HTML, esp. in the files that should be translated
- **no JavaScript** whereever possible, no **weird CSS** nor other complicated things
- the layout should be **as simple as possible** and should always work on **small mobile screens** as well as on **desktops**
- when layouting, do not force a special structure.  Header, Content, Footer - done.
- no complex navigation - Simply link subpages from the main pages
- **no one-page-layout** - we also have sites with long text, and we do not want to have separate layouts
- we do not want a complex navigation, some toplinks, a footer, done.
- Remember: **Form follows function, KISS.** The site should be dead-simple.
- Finally: Have fun :-)

License
--------------------------------------------------------------------------------

Licensed under the GPLv3, see LICENSE file for details.

Copyright © 2017, 2018 Delta Chat contributors
