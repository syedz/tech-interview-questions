// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Solution 1
// function reverseInt(n) {
//     let numSign = Math.sign(n);
//     let strInt = numSign < 0 ? (n * -1).toString() : n.toString();

//     let revStr = strInt.split('').reduce((revStr, char) => {
//         return char + revStr;
//     }, '');

//     revStr = numSign < 0 ? revStr * -1 : revStr;

//     return parseInt(revStr);
// }

// Solution 2
function reverseInt(n) {
    const reversed = n
        .toString()
        .split('')
        .reverse()
        .join('');

    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
