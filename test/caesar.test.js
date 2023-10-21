// Write your tests here!
const { caesar } = require("../src/caesar");
const expect = require("chai").expect;

//It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.
describe("caesarFunction", () => {
    it("should return false if the shift is equal to 0, less than -25, greater than 25, or not present.", () => {
      const expected = [false, false, false];
      const actual = [
        caesar("Zebra Magazine", 0),
        caesar("Zebra Magazine", -53),
        caesar("Zebra Magazine", 27)
      ];
      expect(actual).to.deep.equal(expected);
    });
    //It ignores capital letters. (For example, the results of A Message and a message should be the same.)
    it("should ignore capital letters", () => {
      const expected = true;
            const actual = (caesar("Zebra Magazine", 0))===(caesar("zebra magazine", 0));
            expect(actual).to.deep.equal(expected);
    });
    //When encoding, it handles shifts that go past the end of the alphabet. 
    it("should handle shifts that go past the end of the alphabet", () => {
      const expected = "abc";
            const actual = caesar("xyz", 3);
            expect(actual).to.deep.equal(expected);
    });
    //It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.
    it("should mantain spaces and other nonalphabetic symbols in the message", () => {
      const expected = " @4&";
            const actual = caesar(" @4&", 3);
            expect(actual).to.deep.equal(expected);
    });
  });