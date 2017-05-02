Delta Chat Website
================================================================================

This repository contains the default website of Delta Chat.

Feel free to edit any file as you like and send uns a Pull Request.

Some Hints
--------------------------------------------------------------------------------

- whereever possible, use Markdown instead of HTML
- we do not want JavaScript on the site
- the layout should be as simple as possible and should always work on small mobile screens
- we do not want a complex navigation, some toplinks, a footer, done. Simply link subpages from the main pages

Directory structure
--------------------------------------------------------------------------------

- `/en` `/de` .. directories containing all language files. Subdirectories in these directories are _not allowed_ (relative links will fail then)
- `_layouts` - this directory contains a default layout template for each language (the layout is references in Markdown using _layout: name_)
- `public/layout` - CSS and layout specific images and files here.
- `public/images/` - apge specific images and files; in general, we use one subdirectory per page here

---

Copyright (C) 2017 Delta Chat contributors
