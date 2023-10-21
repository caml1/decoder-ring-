// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // Convert input to lowercase
    input = input.toLowerCase();
    
    // Check if shift is within the valid range (-25 to 25 or equal to 0)
    if (shift < -25 || shift > 25 || shift === 0) {
      return false;
    }
    
    // Determine the shift direction based on the encode parameter
    const shiftDirection = encode ? 1 : -1;
    
    // Perform encoding or decoding based on the "encode" parameter
    let result = "";
    for (let i = 0; i < input.length; i++) {
      let charCode = input.charCodeAt(i);
  
      // Apply shift to letters only
      if (charCode >= 97 && charCode <= 122) {
        charCode = ((charCode - 97 + shift * shiftDirection + 26) % 26) + 97;
      }
      
      result += String.fromCharCode(charCode);
    }
    
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
