describe('PetShop application test suite', function() {
    var scope, ctrl;

    beforeEach(module('app'));

    beforeEach(inject(function($rootScope, $controller) {
        //scope = $rootScope.$new();
        scope = {};
        ctrl = $controller('ctrl', {
            '$scope': scope
        })
    }));

    it("should have dog by default", function() {
        expect(scope.animal).toBe('dog');
    });

    it("should buy a pet with some price", function() {
        var pet = {
            id: 13,
            name: "Bobby",
            type: "dog"
        };
        scope.buyPet(pet);
        expect(scope.boughtPet).not.toBe(undefined);
        expect(scope.boughtPet.name).toBe("Bobby");
        expect(scope.boughtPet.price).not.toBe(undefined);
    });

});