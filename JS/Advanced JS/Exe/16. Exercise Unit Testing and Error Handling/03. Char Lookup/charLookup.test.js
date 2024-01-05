const { lookupChar } = require('./charLookup')
const { assert, expect } = require('chai')

describe('lookupChar function tests', () => {
    
    // whith expect
    it('should return char at index', () => {
        expect(lookupChar('Love', 0)).to.be.equal('L')
    });
    // whith assert

    it('Should return char at index', () => {
        assert(lookupChar('L', 0) === "L");
    });

    it('Should return char at index', () => {
        assert(lookupChar('Love', 1) === "o");
    });

    it('Index over the string length', () => {
        assert(lookupChar('Love', 10) === "Incorrect index");
    });

    it('Negative string index', () => {
        assert(lookupChar('Love', -10) === "Incorrect index");
    });

    it('Return undefined if the first parameter is not string', () => {
        assert(lookupChar(100, 10)  === undefined)
    });

    it('Return undefined with string first parameter and decimal second', () => {
        assert(lookupChar('Love', 10.5)  === undefined)
    });

    it('Return undefined with wrong parameters type', () => {
        assert(lookupChar(10, "ewimf")  === undefined)
    });
});