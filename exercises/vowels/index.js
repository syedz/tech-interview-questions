// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution 1 - Not a very good solution, iterating through each char when a single regex would have done the job.
// function vowels(str) {
//     let strArr = str.split('');
//     let totalVowels = 0;
//     var regex1 = RegExp('[aeiouAEIOU]');

//     for (const char of strArr) {
//         if (regex1.test(char)) {
//             totalVowels++;
//         }
//     }

//     return totalVowels;
// }

// Solution 2
// function vowels(str) {
//     let totalVowels = 0;
//     // Can also add additional multi char strings if wanted to check for those
//     const checker = ['a', 'e', 'i', 'o', 'u'];

//     for (const char of str.toLowerCase()) {
//         if (checker.includes(char)) {
//             totalVowels++;
//         }
//     }

//     return totalVowels;
// }

// Solution 3
function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

module.exports = vowels;
