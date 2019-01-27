// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1
function reverse(str) {
    let revStr = '';

    // Avoid writing for loops in classical syntax, lots of places to make a mistake
    for (let index = 0; index < str.length; index++) {
        const char = str[index];
        revStr = char + revStr;
    }

    return revStr;
}

// Solution 2
// function reverse(str) {
//     return str
//         .split('')
//         .reverse()
//         .join('');
// }

// Solution 3
// function reverse(str) {
//     let reversed = '';

//     for (let character of str) {
//         reversed = character + reversed;
//     }

//     return reversed;
// }

// Solution 4
// function reverse(str) {
//     // Second arg in reduce() is the starting argument,
//     // it will be passed into the arrow function as the
//     // starting arg, and then whatever gets returned will
//     // be used as the starting argument for every successive
//     // run of the function. Second argument in inner function
//     // is current element in the array.
//     return str.split('').reduce((rev, char) => char + rev, '');
// }

module.exports = reverse;
