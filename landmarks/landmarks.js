// Landmarks

{
  console.clear()

  console.log(`%cLandmarks`, `font-size: 13px`);

  function LandMarkData(name, role, label, elem) {
    this.name = name;
    this.role = role;
    this.label = label;
  }

  const results = [];

  const roles = {
    'banner': {
      role: 'banner',
      selectors: 'header:not([role="banner"])',
      notWithin: 'article, aside, [role="complementary"], main, [role="main"], section, [role="region"], nav, [role="navigation"]'
    },
    'banner_explicit': {
      role: 'banner',
      selectors: '[role="banner"]',
    },
    'main': {
      role: 'main',
      selectors: '[role="main"]:not(main), main'
    },
    'navigation': {
      role: 'navigation',
      selectors: '[role="navigation"]:not(nav), nav'
    },
    'complementary': {
      role: 'complementary',
      selectors: '[role="complementary"]:not(aside), aside'
    },
    'form': {
      role: 'form',
      selectors: 'form[title], form[aria-label],  form[aria-labelledby]'
    },
    'search': {
      role: 'search',
      selectors: '[role="search"]'
    },
    'region': {
      role: 'region',
      selectors: 'section[aria-label]:not([role="region"]),  section[aria-labelledby]:not([role="region"])'
    },
    'region_explicit': {
      role: 'region',
      selectors: '[role="region"]'
    },
    'contentinfo': {
      role: 'contentinfo',
      selectors: 'footer:not([role="contentinfo"])',
      notWithin: 'article, aside, [role="complementary"], main, [role="main"], section, [role="region"], nav, [role="navigation"]'
    },
    'contentinfo_explicit': {
      role: 'contentinfo',
      selectors: '[role="contentinfo"]'
    },
   }

  const checkLandmark = role => {
    const landmark = roles[role];
    const elements = document.querySelectorAll(landmark.selectors);

      for(let i = 0; i < elements.length; i++) {
          const element = elements[i]
          let label = ''

          if (element.closest(landmark.notWithin)) {
              continue;
          }


          if (element.hasAttribute('role') && element.getAttribute('role') !== landmark.role) {
              continue;
          }

          if (element.hasAttribute('aria-label')) {
              label = element.getAttribute('aria-label')
          }


          if (element.hasAttribute('aria-labelledby')) {
              label = document.getElementById(element.getAttribute('aria-labelledby')).textContent
          }

         element.style.outline = '2px solid red';
         element.style.outlineOffset = '-2px'
         results.push(new LandMarkData(element, landmark.role, label))
      }

      return true;
   }

   for (role in roles) {
      checkLandmark(role);
   }

   const checkCount = (role, count = 1) => {
     const countLandmarks = results.filter(landmark => landmark.role === role).length;

     if (countLandmarks > count) {
       console.warn(`There's more than ${count} ${role} landmark, please check!`)
     }
   }

  const checkLabel = (role, element, count = 1) => {
     const countLandmarks = results.filter(landmark => landmark.role === role).length;
     const countUnlabelled = results.filter(landmark => landmark.role === role && landmark.label === '').length;
     if (countLandmarks > count && countUnlabelled > 0) {
       console.warn(`There are one or more unlabelled navigation landmarks, please check!`)
     }
   }

  checkCount('banner')
  checkCount('main')
  checkCount('contentinfo')
  checkLabel('navigation')

  console.log()
  console.table(results)

  console.log('---------')

  var done = 'Finished running Landmarks”'
  done;
}
