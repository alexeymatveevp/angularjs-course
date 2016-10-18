# js common API

https://developer.mozilla.org/en-US/docs/Web/API

## Document interface
Document represents web page and it's content - DOM tree

Most important methods are
* `document.getElementById()`, `document.getElementsByTagName()`, `document.getElementsByClassName()`, and methods of `ParentNode` inf like `document.children()`, or from `Node` inf like `document.appendChild()`,
* `document.activeElement()` - gets current focused element
* `document.location` - object representing current location: host, path, origin; if this is set to like `document.location = http://google.com` then the page will refresh
* `document.styleSheets` - list of included CSS content
* `document.body`, `document.head`, `document.links` - just getting different parts of the document


Also usually some frameworks use the `load` even t of document
```javascript
document.addEventListener("load", function(event) {
    console.log("All resources finished loading!");
  });
```

[docs](https://developer.mozilla.org/en-US/docs/Web/API/Document)

## Other popular interfaces

### Element
`attributes`, `innerHTML` - to change contents, `id`, `className`

###

## Cookies
getting the cookie
```javascript
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
```
to expire - just set the date in the past

setting the cookie
```javascript
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
```
