const { assert } = require('chai');

const { isOddOrEven } = require('./02. Even Or Odd.js');

describe('isOddOrEven function tests', () => {
    // invali input
    it('should return undefined if the parameter is number', () => {
        assert.equal(isOddOrEven(10),undefined);
    });
    
    it('should return undefined if the parameter is object', () => {
        assert.equal(isOddOrEven({}),undefined);
    });

    it('should return undefined if the parameter is array', () => {
        assert.equal(isOddOrEven([]),undefined);
    });

    it('should return undefined if the parameter is undefined', () => {
        assert.equal(isOddOrEven(undefined), undefined)
    });

    it('should return undefined if the parameter is null', () => {
        assert.equal(isOddOrEven(null), undefined)
    });

    // valid input

    it('should return even as result', () => {
        assert.equal(isOddOrEven("Hi"), "even")
    });

    it('should return odd as result', () => {
        assert.equal(isOddOrEven("Hello"), "odd")
    });


});