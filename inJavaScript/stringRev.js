
// Method one; loop through string
function reverseString(string) {
    const newArray = [];
    const length = string.length - 1;

    // Looping from the end
    for (let i = length; i >= 0; i--) {
        newArray.push(string[i]);
    }

    return newArray.join('');

}

const test1 = reverseString("hello");
console.log(test1);

// Method 2 
// Use split() inbuilt function in JavaScript to split string into array of characters.
// Use reverse() function in JavaScript to reversal the array of characters
// Use join() function in JavaScript to join the elements of an array into a string.
function newRevString(str) {
    return str.split('').reverse().join('');
}

const test2 = newRevString("random words");
console.log(test2);