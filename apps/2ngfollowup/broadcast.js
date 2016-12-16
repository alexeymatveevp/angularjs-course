var App = angular.module('app', []);
App.controller('ctrl', ['$scope', 'PetService', '$injector', function(a, b, c) {
    var PetService = c.get('PetService');
    console.log(PetService);
}]);
App.service('PetService', function() {
    this.pet = 'cat';
})