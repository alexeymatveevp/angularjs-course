// setup
var app = angular.module('app', []);
app.config(function($controllerProvider) {
  app.controllerProvider = $controllerProvider;
});

app.controller('ctrl', function($scope, $http, $compile, $templateRequest) {
  $http.get('/plugins').then(function() {}, function() {
    $scope.plugins = [
      {
        name: 'usermanager',
        initialUrl: 'usermanager/usermanager.html',
        controllerName: 'UsmCtrl'
      },
      {
        name: 'ta-config',
        initialUrl: 'taconfig/template.html'
      }
    ];

    $scope.selectPlugin = function(plugin) {
      $scope.selectedPlugin = plugin;
      loadPlugin(plugin);
    }

    loadPlugin = function(plugin) {
      $templateRequest(plugin.initialUrl).then(function(tmpl) {
        var pluginDiv = document.getElementById('plugin_content');
        pluginDiv.innerHTML = tmpl;
        app.controllerProvider.register(plugin.controllerName, window[plugin.controllerName]);
        $compile(angular.element(pluginDiv))($scope);
      }, function() {
        alert('cannot load the plugin content: ' + plugin.template);
      });
    }

  });
});
