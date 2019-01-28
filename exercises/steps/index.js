// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Solution 1 - Had to draw this out to visually see rows and cols
// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let stair = '';

//         for (let col = 0; col < n; col++) {
//             if (col <= row) {
//                 stair += '#';
//             } else if (col > row) {
//                 stair += ' ';
//             }
//         }
//         console.log(stair);
//     }
// }

// Solution 2 - Go through this solution after it's implemented
function steps(n, row = 0, stair = '') {
    if (n === row) {
        return;
    }

    if (n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
    }

    const add = stair.length <= row ? '#' : ' ';

    steps(n, row, stair + add);
}

module.exports = steps;
