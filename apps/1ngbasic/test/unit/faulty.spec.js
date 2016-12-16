// Be descriptive with titles here. The describe and it titles combined read like a sentence.
describe('Its always faulty spec', function() {
    it('has a dummy spec to test 1 + 4', function() {
        // An intentionally failing test. No code within expect() will never equal 4.
        expect(1+4).toEqual(5);
    });
});