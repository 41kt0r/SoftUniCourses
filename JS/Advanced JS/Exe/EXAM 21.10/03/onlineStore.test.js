const { assert } = require('chai')
let { expect, should } = require('chai');
let { onlineStore } = require("./onlineStore");

describe("Tests onlineStore", function () {
    describe("isProductAvailable", function () {

        // input validation
        it('should return error for invalid input', () => {
            expect(() => onlineStore.isProductAvailable(5, 'PILE')).to.throw("Invalid input.");
            expect(() => onlineStore.isProductAvailable('pile', '5')).to.throw("Invalid input.");
            expect(() => onlineStore.isProductAvailable(5, 5)).to.throw("Invalid input.");
        });

        //out of stock
        it('Message for out of stock', () => {
            expect(onlineStore.isProductAvailable('product', 0)).to.equal(`Sorry, product is currently out of stock.`);
            expect(onlineStore.isProductAvailable('product', -1)).to.equal(`Sorry, product is currently out of stock.`);
        });

        //in stock
        it('Message for available stock', () => {
            expect(onlineStore.isProductAvailable('product', 1)).to.equal(`Great! product is available for purchase.`);
            expect(onlineStore.isProductAvailable('product', 5)).to.equal(`Great! product is available for purchase.`);
        });


    });

    describe("canAffordProduct", function () {

        // input validation
        it('should throw error for invalid input', () => {
            expect(() => onlineStore.canAffordProduct("pile", "mile")).to.throw("Invalid input.");
            expect(() => onlineStore.canAffordProduct("mile", 5)).to.throw("Invalid input.");
            expect(() => onlineStore.canAffordProduct(5, "mile")).to.throw("Invalid input.");
        });

        it('should check for enough money', () => {
            expect(onlineStore.canAffordProduct(5, 4)).to.equal("You don't have sufficient funds to buy this product.");
            expect(onlineStore.canAffordProduct(5, 0)).to.equal("You don't have sufficient funds to buy this product.");
        });

        it('we have money', () => {
            expect(onlineStore.canAffordProduct(5, 5)).to.equal(`Product purchased. Your remaining balance is $0.`);
            expect(onlineStore.canAffordProduct(5, 10)).to.equal(`Product purchased. Your remaining balance is $5.`);
        });

    });

    describe("getRecommendedProducts", function () {
        it('', () => {
            const productList = [
                { name: "Camera", category: "Photography" },
                { name: "Air Max", category: "shoes" },
                { name: "Iphone 13", category: "smatphones" },
            ]
            expect(onlineStore.getRecommendedProducts(productList, "Photography")).to.deep.equal(["Camera"]);
            expect(onlineStore.getRecommendedProducts(productList, "shoes")).to.deep.equal(["Air Max"]);
            expect(onlineStore.getRecommendedProducts(productList, "smatphones")).to.deep.equal(["Iphone 13"]);
        });

        //input validation
        it('should throw error for invalid inputs', () => {
            expect(() => onlineStore.getRecommendedProducts("pile", ["mile"])).to.throw("Invalid input.");
            expect(() => onlineStore.getRecommendedProducts(["mile", "pile"], 5)).to.throw("Invalid input.");
            expect(() => onlineStore.getRecommendedProducts(5, "mile")).to.throw("Invalid input.");
        });



    });
});
