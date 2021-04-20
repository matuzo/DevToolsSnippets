# DevToolsSnippets

A collection of front-end debugging script snippets to be used in the [Sources panel](https://developer.chrome.com/docs/devtools/javascript/sources/) in Chrome DevTools.

![The “Snippets” section highlighted in the sources panel in Chrome DevTools](assets/sourcespanel.png)

You can copy these scripts and add them to your collection of snippets.

This not a replacement for automatic testing tools like the [HTML validator](https://validator.w3.org/), [Lighthouse](https://web.dev/measure/?gclid=Cj0KCQjw9_mDBhCGARIsAN3PaFP31wNLbJyN8-iNzbOLDsGQOnIszfGveSQlruMFM5ebkT4IL1Uh574aAmIuEALw_wcB), [axe](https://www.deque.com/axe/), or [Wave](https://wave.webaim.org/). This collection of scripts is meant to be used in addition to automatic testing tools.

## Scripts
### Document Info

* Logs the page `<title>`
* Logs the page description
* Logs the defined natural language
* Logs the charset 
* Logs the number of DOM nodes in `<head>`
* Logs the number of DOM nodes in `<body>`
* Lists headings and document outline

![Demo output of the basic document information, including the heading outline that shows empty and skipped headings](assets/docinfo.png)

[Details about documentinfo.js](documentinfo/)
### Debug images

* Lists images without `width` and/or `height` attributes
* Lists images with empty `alt` attributes
* Lists images with _suspicious_  `alt` attributes

![Demo output of the image debugging script that lists images with suspicious and empty alts and images with missing width or height attributes](assets/imagedebug.png)

[Details about debugimages.js](debugimages/)

### Remove CSS

For testing HTML output without CSS.

* Removes all `<link>`s to CSS files
* Removes all `style` elements
* Removes all `style` attributes

[Details about removecss.js](removecss/)

### Is x present?

* Checks if elements that _usually_ should be present, are actually there.
* Checks if elements that _probabaly_ shouldn’t be present, aren’t there.


![Demo output of the “Is x present?” script that lists a bunch of warning related to malformed HTML](assets/isxpresent.png)

[Details about isxpresent.js](isxpresent/)

