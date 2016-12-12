var App = angular.module('app', []);
App.controller('ctrl', function() {
    this.person = {
        fname: 'Alexey',
        lname: 'Matveev'
    }
});
App.component('person', {
    bindings: {
        person: '=data'
    },
    controller: function($scope) {
        this.logScope = function() {
            console.log($scope);
        }
    },
    template: '<p>FirstName: {{$ctrl.person.fname}}</p>' +
        '<p>LastName: {{$ctrl.person.lname}}</p>' +
        '<button ng-click="$ctrl.logScope()">Log</button>'
});