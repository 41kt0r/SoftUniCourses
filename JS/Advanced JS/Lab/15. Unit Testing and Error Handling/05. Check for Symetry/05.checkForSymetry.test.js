const expect = require("chai").expect;
const assert = require("chai").assert;
const { it } = require("mocha");
const { isSymmetric } = require("./05. Check for Symmetry.js");

describe('isSymmetric', () => {
    it("should return true for symetric array", () => {
        expect(isSymmetric([1,2,2,1])).to.be.true;
    });

    it("should return false for non-symetric array", () => {
        expect(isSymmetric(['z', 12 ,8,1])).to.be.false;

    });

    it("should return false for non-arrays", () => {
        expect(isSymmetric(12)).to.be.false;
        expect(isSymmetric("Toni")).to.be.false;
        expect(isSymmetric({ name: "Toni"})).to.be.false;

    });

    it("should return true for symetric array of strings", () => {
        expect(isSymmetric(['a','b','b','a'])).to.be.true;
    });

    it("should return false for symetric array of strings", () => {
        expect(isSymmetric(['a','b','b','c'])).to.be.false;

    });
})

