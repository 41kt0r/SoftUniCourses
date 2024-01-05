const { assert } = require('chai')
let { expect, should } = require('chai');
let { lottery } = require("./Lottery");

describe("lottery Tests", function () {

    describe("buyLotteryTicket", function () {

        //invalid inputs
        it('should return error for invalid first number', () => {
            expect(() => lottery.buyLotteryTicket("", 5, true)).to.throw("Invalid input!")
        });

        it('should return error for invalid second number', () => {
            expect(() => lottery.buyLotteryTicket(5, "5", true)).to.throw("Invalid input!")
        });

        it('should return error for invalid boolean', () => {
            expect(() => lottery.buyLotteryTicket(5, 5, "true")).to.throw("Invalid input!")
        });

        //boolean = false
        it('should return message for false boolean', () => {
            expect(() => lottery.buyLotteryTicket(5, 5, false)).to.throw("Unable to buy lottery ticket!");
        });

        //tickets and prices check
        it('should return message for bought tickets and their price', () => {
            expect(() => lottery.buyLotteryTicket(-1, 1, true)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(0, 1, true)).to.throw("Invalid input!");

            expect(() => lottery.buyLotteryTicket(1, 0, true)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(1, -1, true)).to.throw("Invalid input!");

            expect(lottery.buyLotteryTicket(1, 1, true)).to.equal("You bought 1 tickets for 1$.");
            expect(lottery.buyLotteryTicket(2, 3, true)).to.equal("You bought 3 tickets for 6$.");
        });

    });

    describe('checkTicket ', () => {

        //invalid inputs
        it('should return error for invalid inputs', () => {
            expect(() =>lottery.checkTicket(5,5)).to.throw("Invalid input!");
            expect(() =>lottery.checkTicket([],[])).to.throw("Invalid input!");
            expect(() =>lottery.checkTicket([1,2,3,4,5],[1,2,3,4,5])).to.throw("Invalid input!");
            expect(() =>lottery.checkTicket([1,2,3,4,5],[1,2,3,4,5,6])).to.throw("Invalid input!");
            expect(() =>lottery.checkTicket([1,2,3,4,5,6],[1,2,3,4,5])).to.throw("Invalid input!");
        });

        //valid inputs
        it('should return message for 3 to 5 winning numbers', () => {
            expect(lottery.checkTicket([1,2,3,4,5,6],[1,2,3,9,7,8])).to.equal("Congratulations you win, check your reward!");
            expect(lottery.checkTicket([1,2,3,4,5,6],[1,2,3,4,5,8])).to.equal("Congratulations you win, check your reward!");
        });

        it('should return message for 6 winning numbers', () => {
            expect(lottery.checkTicket([1,2,3,4,5,6],[1,2,3,4,5,6])).to.equal("You win the JACKPOT!!!");
        });

    });

    describe('secondChance ', () => {

        // invalid inputs
        it('should return error for invalid inputs', () => {
            expect(() =>lottery.secondChance('', '')).to.throw("Invalid input!");
            expect(() => lottery.secondChance(5, '')).to.throw("Invalid input!");
            expect(() => lottery.secondChance('', [1,2,3,4,5,6])).to.throw("Invalid input!");
        });

        // valid inputs
        it('should return message for winning second chance', () => {
            expect(lottery.secondChance(5, [1,2,3,4,5,6])).to.equal("You win our second chance prize!");
        });

        it("should return message for didn't winning second chance", () => {
            expect(lottery.secondChance(11, [1,2,3,4,5,6])).to.equal("Sorry, your ticket didn't win!");
        });
    });
});
