const { assert } = require('chai')
let { expect, should } = require('chai');
let { weddingDay } = require("./weddingDay");

describe('weddingDay.js test', () => {
    describe('PickVenue test', () => {
        //invalid inputs
        it('should return error for invalid input', () => {
            expect(() => weddingDay.pickVenue("5", 5, 'string')).to.throw('Invalid Information!')
        });
        it('should return error for invalid input', () => {
            expect(() => weddingDay.pickVenue(5, "5", 'string')).to.throw('Invalid Information!')
        });
        it('should return error for invalid input', () => {
            expect(() => weddingDay.pickVenue(5, 5, '')).to.throw('Invalid Information!')
        });
        it('should return error for invalid input', () => {
            expect(() => weddingDay.pickVenue(5, [], '')).to.throw('Invalid Information!')
        });
        it('should return error for invalid input', () => {
            expect(() => weddingDay.pickVenue([], [], '')).to.throw('Invalid Information!')
        });

        //value of location
        it('should check the location is it Varna', () => {
            expect(() => weddingDay.pickVenue(5, 5, 'Burgas')).to.throw('The location of this venue is not in the correct area!')
        });

        //capacity
        //valid
        it('test for capacity with greater than 150 and pricePerGuest less than 120', () => {
            expect(weddingDay.pickVenue(151, 119, 'Varna')).to.equal('This venue meets the requirements, with capacity of 151 guests and 119$ cover.')
        });

        it('test for capacity with equal to 150 and pricePerGuest less than 120', () => {
            expect(weddingDay.pickVenue(150, 119, 'Varna')).to.equal('This venue meets the requirements, with capacity of 150 guests and 119$ cover.')
        });

        it('test for capacity with greater than 150 and pricePerGuest equal to 120', () => {
            expect(weddingDay.pickVenue(151, 120, 'Varna')).to.equal('This venue meets the requirements, with capacity of 151 guests and 120$ cover.')
        });

        it('test for capacity with equal to 150 and pricePerGuest equal to 120', () => {
            expect(weddingDay.pickVenue(150, 120, 'Varna')).to.equal('This venue meets the requirements, with capacity of 150 guests and 120$ cover.')
        });

        //capacity
        //invalid

        it('test for capacity with equal to 149 and pricePerGuest equal to 120', () => {
            expect(weddingDay.pickVenue(149, 120, 'Varna')).to.equal("This venue does not meet your requirements!")
        });

        it('test for capacity with equal to 149 and pricePerGuest equal to 120', () => {
            expect(weddingDay.pickVenue(149, 121, 'Varna')).to.equal("This venue does not meet your requirements!")
        });

        it('test for capacity with equal to 149 and pricePerGuest equal to 120', () => {
            expect(weddingDay.pickVenue(150, 121, 'Varna')).to.equal("This venue does not meet your requirements!")
        });
    });

    describe('otherSpendings test', () => {
        it('should validate the input', () => {
            expect(() => weddingDay.otherSpendings([], [], 'blabla')).to.throw("Invalid Information!");
            expect(() => weddingDay.otherSpendings([], {}, true)).to.throw("Invalid Information!");
            expect(() => weddingDay.otherSpendings({}, [], true)).to.throw("Invalid Information!");
        });

        it('should check for true boolean', () => {
            expect(weddingDay.otherSpendings(['flowers', 'curtains'], ['picures', 'video'], true)).to.equal('You spend 1530$ for wedding decoration and photography with 15% discount!');
            expect(weddingDay.otherSpendings(['flowers', 'curtains'], [], true)).to.equal('You spend 425$ for wedding decoration and photography with 15% discount!');
            expect(weddingDay.otherSpendings([], ['picures', 'video'], true)).to.equal('You spend 1105$ for wedding decoration and photography with 15% discount!');

            expect(weddingDay.otherSpendings([], [], false)).to.equal('You spend 0$ for wedding decoration and photography!');
            expect(weddingDay.otherSpendings([], ['picures', 'video'], false)).to.equal('You spend 1300$ for wedding decoration and photography!');
            expect(weddingDay.otherSpendings(['flowers', 'curtains'], [], false)).to.equal('You spend 500$ for wedding decoration and photography!');
        });

    });

    describe('tableDistribution test', () => {
        it('validation of input', () => {
            expect(() => weddingDay.tableDistribution('', 5)).to.throw('Invalid Information!');
            expect(() => weddingDay.tableDistribution('', 5)).to.throw('Invalid Information!');
            expect(() => weddingDay.tableDistribution(-5, 5)).to.throw('Invalid Information!');
            expect(() => weddingDay.tableDistribution(5, -5)).to.throw('Invalid Information!');
        });

        it('should check for gestsOnTable', () => {
            expect(weddingDay.tableDistribution(30, 6)).to.equal("There is only 5 people on every table, you can join some tables.");
            expect(weddingDay.tableDistribution(30, 10)).to.equal("There is only 3 people on every table, you can join some tables.");

            expect(weddingDay.tableDistribution(30, 5)).to.equal("You have 5 tables with 6 guests on table.");
            expect(weddingDay.tableDistribution(30, 2)).to.equal("You have 2 tables with 15 guests on table.");


        });
    });
});