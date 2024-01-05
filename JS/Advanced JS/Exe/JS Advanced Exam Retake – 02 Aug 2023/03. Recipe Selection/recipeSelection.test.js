const { assert } = require('chai')
let { expect, should } = require('chai');
let { recipeSelection } = require("./recipeSelection");

describe("Testing recipeSelection.js", function() {
    describe("isTypeSuitable", function() {

        // validating input
        it('should return error for invalid input', () => {
            expect(() => recipeSelection.isTypeSuitable('string1', 5)).to.throw('Invalid input');
            expect(() => recipeSelection.isTypeSuitable(5, 'string')).to.throw('Invalid input');
        });

        it('should return message for Vegetarian and meat', () => {
            expect(recipeSelection.isTypeSuitable('Meat', 'Vegetarian')).to.equal("This recipe is not suitable for vegetarians");
        });

        it('should return message for vegan and meat  or dairy', () => {
            expect(recipeSelection.isTypeSuitable('Meat', 'Vegan')).to.equal("This recipe is not suitable for vegans");
            expect(recipeSelection.isTypeSuitable('Dairy', 'Vegan')).to.equal("This recipe is not suitable for vegans");
        });

        it('should return message for vegan and meat  or dairy', () => {
            expect(recipeSelection.isTypeSuitable('lepilo', 'Vegan')).to.equal("This recipe is suitable for your dietary restriction");
            expect(recipeSelection.isTypeSuitable('pishka', 'Vegan')).to.equal("This recipe is suitable for your dietary restriction");
        });
     });

     describe("isItAffordable", function() {

        it('validating input', () => {
            it('should return error for invalid input', () => {
                expect(() => recipeSelection.isItAffordable('string1', 5)).to.throw('Invalid input');
                expect(() => recipeSelection.isItAffordable(5, 'string')).to.throw('Invalid input');
            });
        });

        it('cheking for enough money', () => {
            expect(recipeSelection.isItAffordable(5, 4)).to.equal("You don't have enough budget to afford this recipe")
            expect(recipeSelection.isItAffordable(5, 0)).to.equal("You don't have enough budget to afford this recipe")
        });

        it('we have money to buy', () => {
            expect(recipeSelection.isItAffordable(5, 5)).to.equal("Recipe ingredients bought. You have 0$ left");
            expect(recipeSelection.isItAffordable(5, 10)).to.equal("Recipe ingredients bought. You have 5$ left");
        });

     });

     describe('getRecipesByCategory', () => {
        it('should return an array of recipe titles for the given category', () => {
          const recipes = [
            { title: "Pasta Carbonara", category: "Italian" },
            { title: "Spicy Tofu Stir-Fry", category: "Asian" },
            { title: "Classic Caesar Salad", category: "Salads" },
            { title: "Chocolate Chip Cookies", category: "Desserts" }
          ];
    
          expect(recipeSelection.getRecipesByCategory(recipes, "Italian")).to.deep.equal(["Pasta Carbonara"]);
          expect(recipeSelection.getRecipesByCategory(recipes, "Asian")).to.deep.equal(["Spicy Tofu Stir-Fry"]);
          expect(recipeSelection.getRecipesByCategory(recipes, "Salads")).to.deep.equal(["Classic Caesar Salad"]);
        });
    
        it('should throw an error for invalid input', () => {
          const recipes = [
            { title: "Pasta Carbonara", category: "Italian" },
            { title: "Spicy Tofu Stir-Fry", category: "Asian" }
          ];
    
          expect(() => { recipeSelection.getRecipesByCategory(recipes, 123) }).to.throw('Invalid input');
          expect(() => { recipeSelection.getRecipesByCategory("recipes", "Italian") }).to.throw('Invalid input');
        });
      });


});
