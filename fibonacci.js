// Return the fibonacci number at the nth position, recursively.

function fibonacci(n) {
    if (n < 0) {
        return null;
    }
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

const num = 8;  //returns 21
const num2 = 4;  //returns 3
const num3 = 1;  //returns 1
const num4 = 6;  //returns 8
const num5 = 7;  //returns 13

console.log(fibonacci(num));

