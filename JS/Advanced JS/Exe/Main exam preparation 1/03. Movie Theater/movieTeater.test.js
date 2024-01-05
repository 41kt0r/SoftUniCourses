const { assert } = require('chai')
let { expect, should } = require('chai');
let { movieTheater } = require("./03. Movie Theater");

describe('movieTheater', () => {
    describe('ageRestrictions', () => {
        it('should return appropriete for G movie rating', () => {
            expect(movieTheater.ageRestrictions('G')).to.equal(`All ages admitted to watch the movie`);
        });

        it('should return appropriete for PG movie rating', () => {
            expect(movieTheater.ageRestrictions('PG')).to.equal(`Parental guidance suggested! Some material may not be suitable for pre-teenagers`);
        });

        it('should return appropriete for R movie rating', () => {
            expect(movieTheater.ageRestrictions('R')).to.equal(`Restricted! Under 17 requires accompanying parent or adult guardian`);
        });

        it('should return appropriete for NC-17 movie rating', () => {
            expect(movieTheater.ageRestrictions('NC-17')).to.equal(`No one under 17 admitted to watch the movie`);
        });

        it('should return appropriete message for random string', () => {
            expect(movieTheater.ageRestrictions('pile')).to.equal(`There are no age restrictions for this movie`);
        });
    });

    describe('moneySpent', () => {
        //valid cases
        it('should calculate total cost with discount and return message', () => {
            expect(movieTheater.moneySpent(5, ['Nachos'], ['Soda', 'Water']))
                .to.equal(`The total cost for the purchase with applied discount is 68.00`)
        });

        it('should calculate total cost without discount and return message', () => {
            expect(movieTheater.moneySpent(1, ['Nachos'], ['Soda', 'Water']))
                .to.equal(`The total cost for the purchase is 25.00`);
        });

        //invalid cases
        it('should throw an error for invalid input data', () => {
            expect(() => movieTheater.moneySpent('alabala', ['Nachos'], ['Soda', 'Water']))
                .to.throw(`Invalid input`);
        });

        it('should throw an error for invalid input data', () => {
            expect(() => movieTheater.moneySpent(1, 23, ['Soda', 'Water']))
                .to.throw(`Invalid input`);
        });

        it('should throw an error for invalid input data', () => {
            expect(() => movieTheater.moneySpent(1, ['Nachos'], 23))
                .to.throw(`Invalid input`);
        });
    });

    describe('reservation', () => {
        it('should return the row number with seats for reservation', () => {
            expect(movieTheater.reservation([
                { rowNumber: 1, freeSeats: 7 },
                { rowNumber: 2, freeSeats: 5 }
            ], 6)
            ).to.equal(1);
        });

        it('should throw an error if input is invalid', () => {
            expect(() => movieTheater.reservation('alabala', 6)).to.throw('Invalid input')
        });

        it('should throw an error if input is invalid', () => {
            expect(() => movieTheater.reservation([], 'pile')).to.throw('Invalid input')
        });
    });
});