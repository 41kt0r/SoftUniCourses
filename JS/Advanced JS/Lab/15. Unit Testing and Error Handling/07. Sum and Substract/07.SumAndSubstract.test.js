const expect = require("chai").expect;
const assert = require("chai").assert;

const { createCalculator } = require("./07. Add  Subtract");

describe('createCalculator', () => {
    let calc;

    beforeEach(function () {
        calc = createCalculator();
    });

    it("01. Getting test ", () => {
        let value = calc.get();
        expect(value).to.be.equal(0);
    });

    it("02. Adding test", () => {
        calc.add(2);
        calc.add(3);
        let value = calc.get();
        expect(value).to.be.equal(5);
    });

    it("03. Subtracting test ", () => {
        calc.add(10);
        calc.subtract(9);
        let value = calc.get();
        expect(value).to.be.equal(1);
    });

    it("04. Subtracting and adding floating numbers test ", () => {
        calc.add(10.2);
        calc.subtract(9.2);
        calc.add(4)
        let value = calc.get();
        expect(value).to.be.equal(5);
    });

    it("05. Adding String", () => {
        calc.add("Pesho");
        expect(calc.get()).to.be.NaN;
    });

    it("06. Subtracting String", () => {
        calc.subtract("Pesho");
        expect(calc.get()).to.be.NaN;
    });

})