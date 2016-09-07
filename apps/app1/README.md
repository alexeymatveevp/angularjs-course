# Ng apps without controllers (js)

Simple angular js apps can be written without even javascript.

This is possible because the power of so-called **directives** like

* ng-app
* ng-model
* ng-show
* ng-click
* ng-repeat

These chunks of code are augmentations to the HTML file (with *angular.js* script) which adds some behaviour to HTML already behind the scenes.

Directives give a hint to angular what is happening in the background.

There are a lot of build-in directives so for simple applications it's enough to use only them.

## ng-app
The `ng-app` directive can be used with or without app name
If used without app name no `$scope` except `$rootScope` is created
```html
<html ng-app>
```
If used with app name, a new `$scope` for `ng-app` is created with some `$id` and it becomes the child of a `$rootScope`
```html
<html ng-app="app">
```
All angular applications should have `ng-app` or other directives wont be recognized

## ng-model
`ng-model` is used on input fields - it binds the input to the background `$scope` js model value, so it can be used later on
```html
<input ng-model="name"> <!-- type smth here -->
<p>{{name}}</p> <!-- this will be updated instantly -->
```
`ng-model` instantly tracks all changes (`onchange` event) and updates the js model

The second thing in this example `{{name}}` is called an **expression**. Expressions are wrapped around with double curve brackets and are some calculated chunks of code to insert into the page. Current `$scope` variables can be used in expressions to present them on ui, like `name` in this example

## ng-click
`ng-click` is used to invoke some controller function on element `click` event, or to do some work right away like in the following example
```html
<button ng-click="showKitten = true">Show something wonderful</button>
<button ng-click="showKitten = false">Hide something wonderful</button>
<img src="../libs/kitten.jpg" ng-show="showKitten" />
```
in this example variable `showKitten` is toggled by `ng-click` directives in buttons and as a result the image below is shown or hidden with the help of `ng-show` directive. Each time `ng-click` is triggered and `showKitten` variable is changed, angular invokes so-called **digest loop cycle** which notifies all `$watcher`s about that `showKitten` was changed -> `ng-show` has a `$watcher` and is updated as well so the image is shown or hidden

## ng-repeat
What a js framework - and moreover template framework - without iteration possibility!

`ng-repeat` is used to iterate over model list and show the list on ui
```html
<ul>
  <li ng-repeat="t in todos">{{t}}</li>
</ul>
```
if `todos` list is `["Make a little step forward", "See what changed", "Commit or reject"]` then the result will be
```html
<ul>
  <li ng-repeat="t in todos" class="ng-binding ng-scope">Make a little step forward</li>
  <li ng-repeat="t in todos" class="ng-binding ng-scope">See what changed</li>
  <li ng-repeat="t in todos" class="ng-binding ng-scope">Commit or reject</li>
</ul>
```
cautious reader can see the `class="ng-binding ng-scope"` was added here - `ng-scope` class is a hint for angular that a new `scope` is created here (each iterated element has a new scope) and `ng-binding` is also for angular internal use - it's a hint that some value is bound to this HTML element
