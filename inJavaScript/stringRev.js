
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

// 