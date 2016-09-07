angular.module('app').directive('pluginPanel', function($compile) {
  return {
    scope: {
      initTemplate: '='
    },
    // template: '<b ng-init="a=3">awef{{initTemplate}}</b>',
    controller: function($scope) {

    },
    link: function(scope, element, attrs) {
      scope.$watch('initTemplate', function(tmpl) {
        if (tmpl) {
          // element.html(tmpl).show();
          element.html(tmpl);
          $compile(element.contents())(scope);
        }
      })
    }
  }
});
