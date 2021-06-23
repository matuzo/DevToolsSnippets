// List labels

{
  console.clear()

  const labels = document.querySelectorAll('label');
  
  if (labels.length) {
      console.log(`%c<label>`, `font-size: 13px`);
 
      for (var i = 0; i < labels.length; i++) {
         const label = labels[i];
          console.log(`${i + 1}. ${label.textContent}`)
          console.log(label)

          if (label.getAttribute('for')) {
              if (!document.getElementById(label.getAttribute('for'))) {
                  console.error('Missing element for label')
              }
          } else {
              console.warn('label has no for attribute, please check!')
          }
      }
  }

  const ariaLabel = document.querySelectorAll('[aria-label]');
  
  if (ariaLabel.length) {
      console.log(' ')
      console.log(`%c[aria-label]`, `font-size: 13px`);
          
      for (var i = 0; i < ariaLabel.length; i++) {
          console.log(`${i + 1}. ${ariaLabel[i].getAttribute('aria-label')}`)
          console.log(ariaLabel[i])
      }
  }

  const ariaLabelledBy = document.querySelectorAll('[aria-labelledby]');
  
  if (ariaLabelledBy.length) {
      console.log(' ')
      console.log(`%c[aria-labelledby]`, `font-size: 13px`);
          
      for (var i = 0; i < ariaLabelledBy.length; i++) {
          var id = ariaLabelledBy[i].getAttribute('aria-labelledby');


          if (!document.getElementById(id)) {
              console.error(`${i + 1}. Missing element for aria-labelledby`);
              console.log(ariaLabelledBy[i]);
          } else {
              console.log(`${i + 1}. ${document.getElementById(id).textContent}`);
              console.log(ariaLabelledBy[i]);
          }
      }
  }

  var done = 'Finished running “labels”'
  done;
}
