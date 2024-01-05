const { lookupChar, mathEnforcer } = require('./mathEnforcer')
const { assert, expect } = require('chai')

describe('mathEnforcer function test', () => {
    
    describe('add five function test', () => {
        // negative tests
        it('Should return undefined with string', () => {
            assert(mathEnforcer.addFive('test') === undefined)
        });

        it('Should return undefined with an objct', () => {
            assert(mathEnforcer.addFive({}) === undefined)
        });

        it('Should return undefined with an array', () => {
            assert(mathEnforcer.addFive([]) === undefined)
        });

        it('Should return undefined with an undefined', () => {
            assert(mathEnforcer.addFive(undefined) === undefined)
        });

        it('Should return undefined with an null', () => {
            assert(mathEnforcer.addFive(null) === undefined)
        });

        // positive tests

        it('Positive integer number +5', () => {
            assert(mathEnforcer.addFive(5) === 10)
        });

        it('Negative integer number +5', () => {
            assert(mathEnforcer.addFive(-5) === 0)
        });

        it('Decimal number +5', () => {
            assert(mathEnforcer.addFive(5.5) === 10.5)
        });
    });

    describe('subtract ten function test', () => {
        
        // negative tests
        it('Should return undefined with string', () => {
            assert(mathEnforcer.subtractTen('test') === undefined)
        });

        it('Should return undefined with an objct', () => {
            assert(mathEnforcer.subtractTen({}) === undefined)
        });

        it('Should return undefined with an array', () => {
            assert(mathEnforcer.subtractTen([]) === undefined)
        });

        it('Should return undefined with an undefined', () => {
            assert(mathEnforcer.subtractTen(undefined) === undefined)
        });

        it('Should return undefined with an null', () => {
            assert(mathEnforcer.subtractTen(null) === undefined)
        });

        // positive tests

        it('Positive integer number -10', () => {
            assert(mathEnforcer.subtractTen(5) === -5)
        });

        it('Negative integer number -10', () => {
            assert(mathEnforcer.subtractTen(-5) === -15)
        });

        it('Decimal number -10', () => {
            assert(mathEnforcer.subtractTen(15.5) === 5.5)
        });

    });

    describe('sum of two numbers function test', () => {
        // positive tests
        it('Two positive integer numbers', () => {
            assert(mathEnforcer.sum(10, 20) === 30)
        });

        it('Two negative integer numbers', () => {
            assert(mathEnforcer.sum(-10, -2.5) === -12.5)
        });

        it('Two positive decimal numbers', () => {
            assert(mathEnforcer.sum(10.5, 20.5) === 31)
        });

        // negative tests

        it('First parameter string, second number', () => {
            assert(mathEnforcer.sum('', 10) === undefined)
        });

        it('First parameter number, second string', () => {
            assert(mathEnforcer.sum(10, '') === undefined)
        });

    });
});