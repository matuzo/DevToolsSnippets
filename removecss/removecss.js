// Remove CSS

{
    document.querySelectorAll('style').forEach(item => { item.remove() });
    document.querySelectorAll('link').forEach(item => { item.remove() });
    document.querySelectorAll('[style]').forEach(item => { item.setAttribute('style', '') });

    var done = 'Finished running “Remove CSS”'
    done;
}
