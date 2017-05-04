Delta Chat Website
================================================================================

This repository contains the default website of Delta Chat.

Feel free to edit any file as you like and send uns a pull request.


Some Hints
--------------------------------------------------------------------------------

- whereever possible, use **Markdown** instead of HTML
- **no JavaScript** whereever possible, no **weird CSS** nor other complicated things
- the layout should be **as simple as possible** and should always work on **small mobile screens** as well as on **desktops**
- when layouting, do not force a special structure.  Header, Content, Footer - done.
- no complex navigation - Simply link subpages from the main pages
- **no one-page-layout** - we also have sites with long text, and we do not want to have separate layouts
- we do not want a complex navigation, some toplinks, a footer, done.
- Remember: **Form follows function, KISS.** The site should be dead-simple.
- Finally: Have fun :-)

Directory structure
--------------------------------------------------------------------------------

- `/en` `/de` .. directories containing all language files. Subdirectories in these directories are _not allowed_ (relative links will fail then)
- `_layouts` - this directory contains a default layout template for each language (the layout is references in Markdown using _layout: name_)
- `public/layout` - CSS and layout specific images and files here.
- `public/images/` - apge specific images and files; in general, we use one subdirectory per page here

Useful links
--------------------------------------------------------------------------------

- Live page: https://delta.chat (thanks to Netlify for supporting Open Source)
- Testing forks will be available at `https://<your-username>.github.io/deltachat-pages/` if you enable Github pages

---

Copyright (C) 2017 Delta Chat contributors
