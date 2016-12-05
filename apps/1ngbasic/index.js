var App = angular.module('app', []);
App.controller('ctrl', function($scope, $http) {

    var pets = [];
    var fluffy = {
        name: 'Fluffy',
        type: 'cat'
    };
    pets.push(fluffy);
    pets.push({
        name: 'asdf',
        type: 'dog'
    });
    pets.push({
        name: 'zxcv',
        type: 'walrus'
    });
    $scope.pets = pets;

    $scope.addPet = function(name, type) {
        $http.post('http://localhost:8080/pet?name=' + name + '&type=' + type.toUpperCase()).then(function(resp) {
            var response = resp.data;
            var newPetId = response.data;
            if (newPetId) {
                $scope.pets.push({
                    id: newPetId,
                    name: name,
                    type: type
                });
            }
        });

    };

    $scope.trackingFn = function(pet) {
        return Math.random()*500;
    };

    $scope.sortBy = function(propName) {
        if (!$scope.sortProp && $scope.sortProp != propName) {
            $scope.sortProp = propName;
            $scope.reverse = false;
        } else {
            $scope.sortProp = propName;
            $scope.reverse = !$scope.reverse;
        }
    };

    $http.get('http://localhost:8080/pets').then(function(resp) {
        var response = resp.data;
        $scope.pets = response.data;
    });

    $scope.deletePet = function(pet) {
        $http.delete('http://localhost:8080/pet/' + pet.id).then(function(resp) {
            var response = resp.data;
            if (response.success) {
                $scope.pets.splice($scope.pets.indexOf(pet), 1);
            }
        })
    }

    $scope.updatePet = function(pet) {
        $http.put('http://localhost:8080/pet/' + pet.id + "?name=" + pet.name + '&type=' + pet.type.toUpperCase()).then(function(resp) {
            alert('ok');
        })
    }

});