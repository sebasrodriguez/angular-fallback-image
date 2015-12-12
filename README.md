[![Bower version](https://badge.fury.io/bo/angular-fallback-image.svg)](http://badge.fury.io/bo/angular-fallback-image)
[![npm version](https://badge.fury.io/js/angular-fallback-image.svg)](http://badge.fury.io/js/angular-fallback-image)

# angular-fallback-image
Angular directive that shows a fallback image when an image returns 404

## How to use it

You must include the angular-fallback-image dependency on your angular module:
```javascript
var app = angular.module("exampleApp", ["angular-fallback-image"]);
```

Then on your html you simply use it like this:
```html
<img ng-src="nonExistentImage.png" sr-fallback="fallback.png" /> 
```

Angular expressions can also be added to the sr-fallback attribute.

If you do not want to set your custom fallback image, you can use default, angular-fallback-image will get a image from [placeholder.it](https://placehold.it/):
```html
<img ng-src="{{example.Image}}" sr-fallback width=350 height=150 />
```

If you do not set width or height of `img`, angular-fallback-image will get the element width and height.