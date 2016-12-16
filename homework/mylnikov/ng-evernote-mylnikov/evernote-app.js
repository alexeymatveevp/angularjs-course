/**
 * Created by amylniko on 14.12.2016.
 */
angular.module('app', [])
    .controller("main", ["$scope", function ($scope) {

        $scope.unassignedNotes = [];

        $scope.notebooks = [];

        $scope.addNewNote = function() {
            console.log("Add new note");
        }

        $scope.addNewNotebook = function() {
            $scope.notebooks.push($scope.inputValue)
            console.log("Add new notebook");
        }

    }]);