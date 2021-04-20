// Debug images

{
  console.clear();
  
  const images = document.querySelectorAll('img');
  const missingAlt = []
  const emptyAlt = []
  const suspiciousAlt = []
  const missingDimensions = []
  const suspicious = ['alt', 'image', 'img', 'logo']

  if (images.length) {
    for (let i = 0; i < images.length; i++) {
      const image = images[i];

      if (image.getAttribute('alt')) {
        const attr = image.getAttribute('alt').trim();
  
        if (attr === '') {
          emptyAlt.push(image)
        }

        if (suspicious.indexOf(attr) > -1) {
          suspiciousAlt.push(image)
        }
      } else {
        missingAlt.push(image)
      }


      if (!image.attributes.width || !image.attributes.height) {
        missingDimensions.push(image)
      }
    }


    if (suspiciousAlt.length) {
      console.warn('%cImages with suspicious alt, please check!', 'font-size: 13px');

      for(image of suspiciousAlt) {
        console.log(image)
      }
    }


    if (missingDimensions.length) {
      console.warn('%cImages without width and/or height attribute, please check!', 'font-size: 13px');

      for(image of missingDimensions) {
        console.log(image)
      }
    }

    
    if (emptyAlt.length) {
      console.info('%cImages with empty alt', 'font-size: 13px;');

      for(image of emptyAlt) {
        console.log(image)
      }
    }
    
    if (missingAlt.length) {
      console.error('%cImages with missing alt', 'font-size: 13px;');

      for(image of missingAlt) {
        console.log(image)
      }
    }
  }

    if (![...suspiciousAlt, ...missingDimensions, ...emptyAlt, ...missingAlt].length) {
      console.info('All images look OK!')
    }

    var done = 'Finished running “Debug images”'
    done;
}
