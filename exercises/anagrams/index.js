// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution 1
// function makeCharMap(str) {
//     let charMap = {};
//     let newString = str.replace(/[^\w]/g, '').toLowerCase();

//     for (const char of newString) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }

//     return charMap;
// }

// function anagrams(stringA, stringB) {
//     let charAMap = makeCharMap(stringA);
//     let charBMap = makeCharMap(stringB);

//     if (Object.keys(charAMap).length != Object.keys(charBMap).length) {
//         return false;
//     }

//     for (const char in charAMap) {
//         if (!charBMap[char] || !charAMap[char] === charBMap[char]) {
//             return false;
//         }
//     }

//     return true;
// }

// Solution 2
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join();
}

module.exports = anagrams;
