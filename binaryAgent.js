// Translated binary string to English

function binaryAgent(binaryString) {
    var newStr = binaryString.split(" ");
    console.log(newStr);
    var engText = [];

    for (i = 0; i < newStr.length; i++) {
        engText.push(String.fromCharCode(parseInt(newStr[i], 2)));
        // pareseInt parses newStr[i] and returns integer of specified "radix" (2)
        // fromCharCode converts Unicode values into characters
    }
    return engText.join("");
}
console.log(binaryAgent("01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100"));