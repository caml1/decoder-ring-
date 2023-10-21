// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
  const polybiusSquare = {
    a: "11", b: "21", c: "31", d: "41", e: "51",
    f: "12", g: "22", h: "32", i: "42", j: "42", k: "52",
    l: "13", m: "23", n: "33", o: "43", p: "53",
    q: "14", r: "24", s: "34", t: "44", u: "54",
    v: "15", w: "25", x: "35", y: "45", z: "55"
  };
     // Check if the length of all numbers is odd

  if (encode) {
    // Encode the message
    let encodedMessage = "";
    for (let char of input.toLowerCase()) {
      if (char === " ") {
        encodedMessage += " ";
      } else {
        if (char === "j" || char === "i") {
          encodedMessage += polybiusSquare["i"];
        } else {
          encodedMessage += polybiusSquare[char];
        }
      }
    }
    return encodedMessage;
  } else {
    // Decode the message
    let decodedMessage = "";
    const inputWithoutSpaces = input.replace(/\s/g, ""); // Remove spaces
    if (inputWithoutSpaces.length% 2 === 1){
      return false;
    } else {
    let i = 0;
    while (i < input.length) {
      if (input[i] === " ") {
        decodedMessage += " ";
        i++;
      } else {
        let char = input.substr(i, 2);
        if (char === "42") {
          decodedMessage += "(i/j)";
        } else {
          for (let key in polybiusSquare) {
            if (polybiusSquare[key] === char) {
              decodedMessage += key;
              break;
            }
          }
        }
        i += 2;
      }
    }
    return decodedMessage;
  }
  }
}

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };