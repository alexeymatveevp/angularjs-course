# Simple apps without javascript
[logo]: https://github.com/angular/angular.js/blob/master/images/logo/AngularJS-Shield.exports/AngularJS-Shield-small.png
Simple angular js apps can be written without even javascript.
This is possible because the power of **directives** like

* ng-app
* ng-model
* ng-click
* ng-init

Using only directives can give a hint to angular what is happening in the background.
There are a lot of build-in directives so for simple applications it's enough to use only them.

The `ng-app` directive can be used with or without app name
If used without app name no `$scope` except `$rootScope` is created
```html
<html ng-app>
```
If used with app name, a new `$scope` for `ng-app` is created with some `$id` and it becomes the child of a `$rootScope`
```html
<html ng-app="app">
```