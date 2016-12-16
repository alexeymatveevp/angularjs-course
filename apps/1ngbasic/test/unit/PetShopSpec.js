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

});