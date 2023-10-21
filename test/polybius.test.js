// Write your tests here!
const { polybius } = require("../src/polybius");
const expect = require("chai").expect;


describe("polybiusFunction", () => {
    //When encoding, it translates the letters i and j to 42.
    it("when encoding should translate letters i and j to 42", () => {
      const expected = '4242';
            const actual = polybius("ij");
            expect(actual).to.deep.equal(expected);
    });
    //When decoding, it translates 42 to (i/j).
    it("when decoding should translate letters i and j to 42", () => {
        const expected = "(i/j)";
        const actual = polybius("42", false);
        expect(actual).to.deep.equal(expected);
      });
      //It ignores capital letters. (For example, the results of A Message and a message should be the same.)
      it("should ignore capital letters", () => {
        const expected = "23513434112251 23513434112251";
        const actual = polybius("Message message");
        expect(actual).to.deep.equal(expected);
      });
      //It maintains spaces in the message, before and after encoding or decoding.
      it("should maintain spaces in the message when encoding and decoding", () => {
        const expected = ["   ", "   "];
        const actual = [
          polybius("   "),
          polybius("   ", false),
        ];
        expect(actual).to.deep.equal(expected);
      }); 
  });