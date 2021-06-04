// Document Info

{
  console.clear()

  const getAttr = (elem, attr) => {
    if (document.querySelector(elem) && document.querySelector(elem).getAttribute(attr)) return document.querySelector(elem).getAttribute(attr);

    return "🛑 No information available" 
  }

  console.log('---------')
  console.log(`%cTitle: ${document.title}`, `font-size: 14px`);
  console.log(`Description: ${getAttr('meta[name="description"]', 'content')}`)

  console.log(`Language: ${getAttr('html', 'lang')}`)
  console.log(`Charset: ${getAttr('meta[charset]', 'charset')}`)
  console.log(`DOM nodes in <head>: ${document.head.querySelectorAll('*').length}`)
  console.log(`DOM nodes in <body>: ${document.body.querySelectorAll('*').length}`)

  console.log('---------')

  var done = 'Finished running “Doc Info”'
  done;
}
