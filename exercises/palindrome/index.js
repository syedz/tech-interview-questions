// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 1
// function palindrome(str) {
//     let revStr = '';

//     for (let char of str) {
//         revStr = char + revStr;
//     }

//     return !!(revStr === str);
// }

// Solution 2
function palindrome(str) {
    let reversedStr = str.split('').reduce((revStr, char) => char + revStr, '');

    return !!(reversedStr === str);
}

// Solution 3
// Not an ideal solution to use every(),
// because it's inconvenient and doing
// twice the work.
// function palindrome(str) {
//     return str.split('').every((char, i) => {
//         return char === str[str.length - i - 1];
//     });
// }

module.exports = palindrome;
