var angular = require('angular');
module.exports = angular.module('controllers', [])
    .controller('ctrl', require('./PetController.js'));