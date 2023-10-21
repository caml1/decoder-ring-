// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

//It returns false if the given alphabet isn't exactly 26 characters long.
describe("substitutionFunction", () => {
    it("should return false if the given alphabet isn't exactly 26 characters long", () => {
      const expected = false;
      const actual = substitution("message", "plmoknijbuhvygctxrdzeswaq");
      expect(actual).to.deep.equal(expected);
    });
    //It correctly translates the given phrase, based on the alphabet given to the function.
    it("should correctly translate the given phrase, based on the alphabet given to the function", () => {
        const expected = "ykrrpik";
        const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
        expect(actual).to.deep.equal(expected);
      });
      //It returns false if there are any duplicate characters in the given alphabet.
      it("should return false if there are any duplicate characters in the given alphabet", () => {
        const expected = false;
        const actual = substitution("message", "plmoknijbuhvygctfxrdzeswqq");
        expect(actual).to.deep.equal(expected);
      });
      //It maintains spaces in the message, before and after encoding or decoding.
      it("should maintain spaces in the message, before and after encoding or decoding", () => {
        const expected = ["   ", "   "];
        const actual = [
            substitution("   ", "plmoknijbuhvygctfxrdzeswaq"),
            substitution("   ", "plmoknijbuhvygctfxrdzeswaq", false),
        ];
        expect(actual).to.deep.equal(expected);
      });
      //It ignores capital letters. (For example, the results of A Message and a message should be the same.)
      it("should ignore capital letters", () => {
        const expected = "ykrrpik ykrrpik";
        const actual = substitution("Message message", "plmoknijbuhvygctfxrdzeswaq");
        expect(actual).to.deep.equal(expected);
      });
});