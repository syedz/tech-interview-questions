// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Solution 1
function chunk(array, size) {
    let chunkedArr = [];

    for (let index = 0; index < array.length; ) {
        let chunk = array.slice(index, index + size);
        chunkedArr.push(chunk);

        index += size;
    }

    // Write down loops manually before doing them
    // let chunk = array.slice(0, 0 + 2);
    // console.log(chunk);
    // chunkedArr.push(chunk);

    // let chunk2 = array.slice(2, 2 + 2);
    // console.log(chunk2);
    // chunkedArr.push(chunk2);

    return chunkedArr;
}

// Solution 2
// function chunk(array, size) {
//     const chunked = [];

//     for (let element of array) {
//         const last = chunked[chunked.length - 1];

//         if (!last || last.length === size) {
//             chunked.push([element]);
//         } else {
//             last.push(element);
//         }
//     }

//     return chunked;
// }

module.exports = chunk;
