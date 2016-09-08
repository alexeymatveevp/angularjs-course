var UsmCtrl = function($scope, $http) {
  $http.get('/users').then(function() {}, function() {
    $scope.users = [
      {
        id: 1,
        name: 'alexey',
        email: 'All@t-sys.ru'
      },
      {
        id: 1,
        name: 'dmitry',
        email: 'Dm@t-sys.ru'
      }
    ]
  });

  $scope.addUser = function() {
    $scope.users.push({
      name: $scope.newUser.name,
      email: $scope.newUser.email
    });
  }

  $scope.deleteUser = function(idx) {
    $http.delete('/user?id=' + idx).then(function() {}, function() {
      $scope.users.splice(idx, 1);
    });
  }
};
