# Debug images

* Lists images without `width` and/or `height` attributes
* Lists images with empty `alt` attributes
* Lists images with _suspicious_  `alt` attributes

## Dimensions

To prevent layout shifts, images should have `width` and `height` attributes.

[Setting Height And Width On Images Is Important Again](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/)

## Empty alt

Empty `alt` attributes are fine, if they're used on decorative images. If not, users of assistive technology might be missing important information.

## _suspicious_ content

[Accessible Images For When They Matter Most](https://www.smashingmagazine.com/2020/05/accessible-images/#decorative)

Sometimes images contain useless information to pass validation or automatic tests. This tests checks if the value of the `alt` attribute contains any of the following keywords.

* alt
* image
* img
* logo
