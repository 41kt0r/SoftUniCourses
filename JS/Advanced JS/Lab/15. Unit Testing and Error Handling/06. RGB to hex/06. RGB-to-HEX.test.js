const expect = require("chai").expect;
const assert = require("chai").assert;

const { rgbToHexColor } = require("./06. RGB to Hex");

describe('rgbToHexColor', () => {

    it("should return white color", () =>{
        expect (rgbToHexColor(255, 255, 255)).to.but.equal('#FFFFFF')
    })

    it("should return black color", () =>{
        expect (rgbToHexColor(0, 0, 0)).to.but.equal('#000000')
    })

    it("should return purple color", () =>{
        expect (rgbToHexColor(64, 58, 137)).to.but.equal('#403A89')
    })

    it("should return undefined when we don't pass all the arguments", () =>{
        expect (rgbToHexColor(64)).to.but.undefined;
    })

    it("should return undefined for values out of range", () =>{
        expect (rgbToHexColor(0, 0, -1)).to.but.undefined;
        expect (rgbToHexColor(0, -1, 0)).to.but.undefined;
        expect (rgbToHexColor(-1, 0, 0)).to.but.undefined;

        expect (rgbToHexColor(0, 0, 1111)).to.but.undefined;
        expect (rgbToHexColor(0, 1111, 0)).to.but.undefined;
        expect (rgbToHexColor(1111, 0, 0)).to.but.undefined;

    })

    it("should return undefined for values different than intager", () =>{
        expect (rgbToHexColor("Toni")).to.but.undefined;
        expect (rgbToHexColor([0, -1, 0])).to.but.undefined;
        expect (rgbToHexColor({name: "Toni"})).to.but.undefined;
        expect (rgbToHexColor("2", "3")).to.but.undefined;

    })

})