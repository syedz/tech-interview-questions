// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Solution 1
function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (const char of str) {
        charMap[char] = charMap[char] + 1 || 1;
        // if (!charMap[char]) {
        //     charMap[char] = 1;
        // } else {
        //     charMap[char]++;
        // }
    }

    for (const char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

maxChar('Hello there!');

module.exports = maxChar;
