// Zip Arrays into Map
// Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.
//   Associative arrays are sometimes called maps because a key (string) maps to a value 

function ZipArr(keys, values) {
    const hashMap = {};

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const val = values[i];

        hashMap[key] = val;
    }
    return hashMap;
}

const keys1 = [1, 2, 3];
const values1 = ["one", "two", "three"];

console.log(ZipArr(keys1, values1));