// Document Info

{
  console.clear()

  const getAttr = (elem, attr) => {
    if (document.querySelector(elem) && document.querySelector(elem).getAttribute(attr)) return document.querySelector(elem).getAttribute(attr);

    return "🛑 No information available" 
  }

  console.log('---------')
  console.log(`%cTitle: ${document.title}`, `font-size: 14px`);
  console.log(`OG Title: ${getAttr('meta[property="og:title"]', 'content')}`)
  console.log(`Description: ${getAttr('meta[name="description"]', 'content')}`)
  console.log(`OG Description: ${getAttr('meta[property="og:description"]', 'content')}`)
  console.log(`OG image: ${getAttr('meta[property="og:image"]', 'content')}`)

  console.log(`Language: ${getAttr('html', 'lang')}`)
  console.log(`Charset: ${getAttr('meta[charset]', 'charset')}`)
  console.log(`Viewport: ${getAttr('meta[name="viewport"]', 'content')}`)
  console.log(`Canonical URL: ${getAttr('link[rel="canonical"]', 'href')}`)
  console.log(`DOM nodes in <head>: ${document.head.querySelectorAll('*').length}`)
  console.log(`DOM nodes in <body>: ${document.body.querySelectorAll('*').length}`)

  const internalStylesheet = document.querySelectorAll('style');
  console.groupCollapsed(`Number of <style> elements: ${document.querySelectorAll('style').length}`)
  for (var i = 0; i < internalStylesheet.length; i++) {
    console.log(internalStylesheet[i])
  }
  console.groupEnd();

  const externalStylesheet = document.querySelectorAll('link[rel="stylesheet"]');
  console.groupCollapsed(`Number of external stylesheets: ${externalStylesheet.length}`)
  for (var i = 0; i < externalStylesheet.length; i++) {
    console.log(externalStylesheet[i].href)
  }
  console.groupEnd();
  
  const internalScript = document.querySelectorAll('script:not([src])');
  console.groupCollapsed(`Number of inline <script> elements: ${internalScript.length}`)
  for (var i = 0; i < internalScript.length; i++) {
    console.log(internalScript[i])
  }
  console.groupEnd();

  const externalScript = document.querySelectorAll('script[src]');
  console.groupCollapsed(`Number of external <script> elements: ${externalScript.length}`)
  for (var i = 0; i < externalScript.length; i++) {
    console.log(externalScript[i].src)
  }
  console.groupEnd();

  console.log('---------')

  var done = 'Finished running “Doc Info”'
  done;
}
