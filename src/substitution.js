// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function hasDuplicates(string) {
      const charSet = new Set();
      for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (charSet.has(char)) {
          return true;
        }
        charSet.add(char);
      }
      return false;
    }
  const originalAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26 || hasDuplicates(alphabet)) {
      return false; // Return false if the alphabet is missing, not exactly 26 characters, or has duplicates
    }

    input = input.toLowerCase(); // Convert input to lowercase for consistency
    
    // Create an empty string to store the result
    let result = [];
    
    for (let i = 0; i < input.length; i++) {
        const char = input[i];

        if (char === ' ') {
            // Keep spaces unchanged
            result.push(' ');
        } else {
            const index = encode
                ? originalAlphabet.indexOf(char)
                : alphabet.indexOf(char);

            if (index !== -1) {
                const newChar = encode
                    ? alphabet[index]
                    : originalAlphabet[index];
                result.push(newChar);
            } else {
                // If the character is not found in the alphabet, keep it unchanged
                result.push(char);
            }
        }
    }

    return result.join('');
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
