// Document Outline

{
  console.clear()

  console.log(`Document outline:`);

  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6, [role="heading"]');
  for(let i = 0; i < headings.length; i++) {
    const heading = headings[i];
    var level;
    if (heading.getAttribute('role')=='heading') {
      level = heading.hasAttribute('aria-level') ? parseInt(heading.getAttribute('aria-level')) : 2;
    } else {
      level = parseInt(heading.nodeName.replace('H', ''));
    }

    console.log(`%c<${heading.nodeName}> ${heading.textContent.replace(/\s\s+/g, ' ').trim()} ${(heading.getAttribute('role')=='heading') ? '(aria-level = ' + level + ')' : '' }`, `padding-left: ${(level * 30)}px; font-size: ${27 - (level * 3)}px`)
  }

  console.log('---------')

  var done = 'Finished running “Doc Info”'
  done;
}
