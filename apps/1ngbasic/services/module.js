var angular = require('angular');
module.exports = angular.module('services', [])
    .factory('PetService', require('./PetService.js'));