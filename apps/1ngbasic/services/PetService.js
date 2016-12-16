module.exports = function PetService($http, $q) {
    return {
        addPet: function(name, type) {
            var deferred = $q.defer();
            $http.post('http://localhost:8080/pet?name=' + name + '&type=' + type.toUpperCase()).then(function(resp) {
                deferred.resolve(resp);
            });
            return deferred.promise;
        },
        savePet: function(pet) {
            return $http.put('http://localhost:8080/pet/' + pet.id + '?name=' + pet.name + '&type=' + pet.type)
        }
    };
}