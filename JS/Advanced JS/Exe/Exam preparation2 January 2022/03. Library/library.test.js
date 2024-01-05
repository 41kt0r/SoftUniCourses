const { assert } = require('chai')
let { expect, should } = require('chai');
let { library } = require("./library");

describe("library tests", function () {
    describe(" calc price of book tests", function () {

        it("invalid input - book name", function () {
            expect(() => library.calcPriceOfBook(1, 1)).to.throw("Invalid input");
        });

        it('invalid input - year', () => {
            expect(() => library.calcPriceOfBook('1', '1')).to.throw("Invalid input");
        });

        it('valid date and year is before 1980', () => {
            expect(library.calcPriceOfBook("The little prince", 1943)).to.equal(`Price of The little prince is 10.00`);
        });

        it('valid date and year is equal 1980', () => {
            expect(library.calcPriceOfBook("The little prince", 1980)).to.equal(`Price of The little prince is 10.00`);
        });

        it('valid date and year is after 1980', () => {
            expect(library.calcPriceOfBook("The little prince", 1981)).to.equal(`Price of The little prince is 20.00`);
        });

    });

    describe("find book tests", function () {

        it("invalid input - empty array", function () {
            expect(() => library.findBook([], "The little prince")).to.throw("No books currently available");
        });
        
        it("valid input - available book in the array", function () {
            expect( library.findBook(["Troy", "Life Style", "Torronto"], "Troy")).to.equal("We found the book you want.");
        });

        it("valid input - not available book in the array", function () {
            expect( library.findBook(["Troy", "Life Style", "Torronto"], "The little prince")).to.equal("The book you are looking for is not here!");
        });

    });

    describe(" arrange the books tests", function () {

        it("invalid input - string", function () {
            expect(() => library.arrangeTheBooks("test")).to.throw("Invalid input");
        });

        it("invalid input - negative number", function () {
            expect(() => library.arrangeTheBooks(-100)).to.throw("Invalid input");
        });

        it("valid input - less than the available space", function () {
            expect(library.arrangeTheBooks(39)).to.equal("Great job, the books are arranged.");
        });

        it("valid input - equal to the available space", function () {
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
        });

        it("valid input - more than the available space", function () {
            expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.");
        });
    });
    
});