# Is x present?

 Checks if elements that _usually_ should be present, are actually there and if elements that _probabaly_ shouldn’t be present, aren’t there.

 [Copy the script](https://github.com/matuzo/DevToolsSnippets/blob/main/isxpresent/isxpresent.js).

 ![Demo output of the “Is x present?” script that lists a bunch of warning related to malformed HTML](../assets/isxpresent.png)

## Stuff that probably should be present

* `<header>`
* `<nav>`
* `<footer>`
* `<main>`

## Stuff that probably shouldn’t be present

* `a:not([href])`  
  Placeholder link (fine) or fake link/button (bad)
* `a[href="#"]`  
  Link with empty hash
* `a[tabindex]`  
  Is fake link?
* `[role="menuitem"]`  
  `menu` and `menuitem` must not be used for typical navigations on websites
* `[role="button"]`  
  Is fake button?
* `[role="link"]`  
  Is fake link?
* `div[onclick]`  
  Is fake link/button?
* `img[onclick]`  
  Is fake link/button?
* `label[aria-label]`  
  Redundant label
* `label a`  
* `button a`  
* `a button`  
  Nesting interactive elements should be avoided
* `section > section`  
* `article > section`  
  Excessive use of sectioning content
* `[style]`  
  It’s a best practice to avoid inline styles
* `table[role="grid"]`  
  Are you sure about using `role="grid"`?

## Resources

* [The accessibility of placeholder links](https://www.scottohara.me/note/2019/07/17/placeholder-link.html)
* [Don’t Use ARIA Menu Roles for Site Nav](https://adrianroselli.com/2017/10/dont-use-aria-menu-roles-for-site-nav.html)
* [#HTMHell 22 the good ol’ div link](https://www.htmhell.dev/22-the-good-ol-div-link/)
* [#HTMHell 13 link or label](https://www.htmhell.dev/13-link-or-label/)
* [#HTMHell 10 `<section>` is no replacement for `<div>`](https://www.htmhell.dev/10-section-is-no-replacement-for-div/)
* [#HTMHell 8 anchor tag used as button](https://www.htmhell.dev/8-anchor-tag-used-as-button/)
* [#HTMHell 6 link with void operator as href value](https://www.htmhell.dev/6-link-with-void-operator-as-href-value/)
* [#HTMHell 5 button-like-link](https://www.htmhell.dev/5-button-like-link/)
* [#HTMHell 3 image-buttons](https://www.htmhell.dev/3-image-buttons/)
* [#HTMHell 2 div with button role](https://www.htmhell.dev/2-div-with-button-role/)
* [#HTMHell 1 button disguised as a link](https://www.htmhell.dev/1-button-disguised-as-a-link/)
* [ARIA Grid As an Anti-Pattern](https://adrianroselli.com/2020/07/aria-grid-as-an-anti-pattern.html)


