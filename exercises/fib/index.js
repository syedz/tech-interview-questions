// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Solution 1
/**
 * Runtime complexity: for every increase in n, we have to
 * calculate 1 additional number. So this is linear runtime.
 */
// function fib(n) {
//     // First 2 numbers will always exist
//     const result = [0, 1];

//     for (let i = 2; i <= n; i++) {
//         const a = result[i - 1];
//         const b = result[i - 2];

//         result.push(a + b);
//     }

//     return result[n];
// }

// Solution 2 - Slow Fib
/**
 * Use this one, but make sure you can explain.
 * This might actually showcase the kinds of questions
 * you've been asked in the past.
 *
 * Exponential Time, for every increase in n, we will
 * get a dramatic increase in the number of function
 * calls.
 *
 * How do you make this function more efficient? Use
 * memoization. Store the arguments of each function
 * call along with the result. If the function is
 * called again with the same arguments, return the
 * precomputed result, rather than running the
 * function again.
 */
// function fib(n) {
//     if (n < 2) return n;

//     return fib(n - 1) + fib(n - 2);
// }

// Solution 3 - Memoized
function memoize(fn) {
    const cache = {};
    return function(...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    };
}

function slowFib(n) {
    if (n < 2) return n;

    // fib() here is going to be calling fib() when it's redeclared on line 75, this is basically a pseudo call
    return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

module.exports = fib;
