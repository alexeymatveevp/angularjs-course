var app = angular.module('app', []);
app.controller('ctrl', function($scope, $http) {
  $http.get('/plugins').then(function() {}, function() {
    $scope.plugins = [
      {
        name: 'usermanager',
        template: '<b>hi, iam usermanager {{1+2}}</b>'
      },
      {
        name: 'ta-config',
        template: '<b>hi, iam userefmanager</b>'
      },
      {
        name: 'pop-editor',
        template: '<b>hi, iam usermanageefefr</b>'
      }
    ];

    $scope.selectPlugin = function(plugin) {
      $scope.selectedPlugin = plugin;
    }
  });
});
