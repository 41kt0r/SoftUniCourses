const { assert } = require('chai')
let { expect, should } = require('chai');
let { chooseYourCar } = require("./chooseYourCar");

describe("chooseYourCar.js testing", function () {
    describe("choosingType testing", function () {

        it("should check for correct year", () => {
            expect(() => chooseYourCar.choosingType('Sedan', 'red', 1899)).to.throw("Invalid Year!");
            expect(() => chooseYourCar.choosingType('Sedan', 'red', 2023)).to.throw("Invalid Year!");
        });

        it('should check for the type of the car', () => {
            expect(() => chooseYourCar.choosingType('difeferent than sedan', 'red', 2013)).to.throw("This type of car is not what you are looking for.");
        });

        it('should check for the requierments(valid)', () => {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2010)).to.equal(`This red Sedan meets the requirements, that you have.`);
        });

        it('should check for the requierments(invalid)', () => {
            expect(chooseYourCar.choosingType('Sedan', 'red', 1999)).to.equal(`This Sedan is too old for you, especially with that red color.`);
        });
    });

    describe("brandName testing", function () {
        it('should return error for invalid index', () => {
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 3)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], "3")).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 3.1)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName("BMW", 1)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(["BMW"], -1)).to.throw('Invalid Information!');
            expect(chooseYourCar.brandName(['Mazda', 'BMW', 'Mercedes'], 1)).to.equal('Mazda, Mercedes');
        });

    });

    describe("CarFuelConsumption testing", function () {
        it('should return error if the entire input is wrong', () => {
            expect(() => chooseYourCar.carFuelConsumption("5", "5")).to.throw('Invalid Information!');
        });

        it('should return error if the first one is wrong', () => {
            expect(() => chooseYourCar.carFuelConsumption('5', 5)).to.throw('Invalid Information!');
        });

        it('should return error if the second one is wrong', () => {
            expect(() => chooseYourCar.carFuelConsumption(5, '5')).to.throw('Invalid Information!');
        });

        it('should return error if the first one is equal to 0', () => {
            expect(() => chooseYourCar.carFuelConsumption(0, 5)).to.throw('Invalid Information!');
        });

        it('should return error if the first one is less than 0', () => {
            expect(() => chooseYourCar.carFuelConsumption(-1, 5)).to.throw('Invalid Information!');
        });

        it('should return error if the second one is less than 0', () => {
            expect(() => chooseYourCar.carFuelConsumption(5, -1)).to.throw('Invalid Information!');
        });


        it('should return message for high consumption', () => {
            expect(chooseYourCar.carFuelConsumption(50, 5)).to.equal("The car burns too much fuel - 10.00 liters!");

        });

        it('should return message for low consumption', () => {
            expect(chooseYourCar.carFuelConsumption(50, 3)).to.equal("The car is efficient enough, it burns 6.00 liters/100 km.");

            expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.');
        });

    });

})