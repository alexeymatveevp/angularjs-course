describe('PetShop home page', function() {
    it('should add a pet', function() {
        browser.get('http://127.0.0.1:8081/apps/1ngbasic/flow.html');
        // browser.waitForAngular()

        // open animal selector
        element(by.id('sas')).click();
        // dog by default
        expect(element(by.model('animal')).getAttribute('value')).toEqual('dog');
        // show animal
        element(by.buttonText('Show animal')).click();
        // input animal
        element(by.model('animalName')).sendKeys('Bobby');
        // save animal
        element(by.buttonText('Add')).click();
        // all animals
        var bobbyPet = element.all(by.repeater('pet in pets')).filter(function(pet) {
            return pet.element(by.binding('pet.name')).getText().then(function(name) {
                return name === 'Bobby';
            });
        });
        // at least 1 bobby
        expect(bobbyPet.count()).toBeGreaterThan(0);
        // bobby has bobby name and is a dog
        expect(bobbyPet.first().element(by.binding('pet.name')).getText()).toBe('Bobby');
        expect(bobbyPet.first().element(by.model('pet.type')).getAttribute('value')).toBe('dog');

        // remember bobby id
        // bobbyPet.first().
        // delete pet bobby
        // bobbyPet.first().element(by.buttonText("X")).click();

        // find bobby again
        // var bobbyPet = element.all(by.repeater('pet in pets')).filter(function(pet) {
        //     return pet.element(by.binding('pet.name')).getText().then(function(name) {
        //         return name === 'Bobby';
        //     });
        // });
        // expect(bobbyPet.first().element(by.binding('pet.name')).getText()).toBe('Bobby');

        // browser.driver.sleep(3000);
    });
});