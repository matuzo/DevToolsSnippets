# Document Info


[This script](documentinfo.js) gives basic information about the document.

* Logs the page `<title>`
* Logs the page description
* Logs the defined natural language
* Logs the charset 
* Logs the number of DOM nodes in `<head>`
* Logs the number of DOM nodes in `<body>`
* Lists headings and document outline

![Demo output of the basic document information, including the heading outline that shows empty and skipped headings](../assets/docinfo.png)

## Language

The natural language must be defined correctly.

* [On Use of the Lang Attribute](https://adrianroselli.com/2015/01/on-use-of-lang-attribute.html)
* [The lang attribute: browsers telling lies, telling sweet little lies](https://www.matuzo.at/blog/lang-attribute/)

## DOM nodes

These numbers give you an idea how big the document is.

* [Avoid an excessive DOM size](https://web.dev/dom-size/)

## Headings

The document outline is listed to let you check the following:

* Does the page contain headings?
* Is there only one `<h1>`?
* Are there empty headings?
* Have heading levels been skipped?


* [Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
