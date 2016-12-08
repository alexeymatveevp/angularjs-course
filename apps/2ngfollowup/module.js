// 1. the ng library is downloaded and the module is bootstrapped
var App = angular.module('app', ['moment', 'nvd3', 'appComponents']); // 2. all module dependencies are resolved and put into current scope
// 3. HTML compilation:
// 3.1. DOM traversing and looking for directives to process
// 3.2. Linking DOM elements and expressions with some javascript code in ng build-in or custom directives
// 4. Runtime
// 4.1. angular.config() is invoked; configure the app here, put some values
// 4.2. directives setup and compiled, services are created <= $injector gets all those
// 4.3. then angular.run() is invoked, it's like the main() method
// 4.4. controllers body is invoked
App.controller('ctrl', function(UnicornService) {
    angular.extend(this, UnicornService);
});