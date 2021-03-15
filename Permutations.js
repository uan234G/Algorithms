function Permutator(inputArr) {
    let result = [];

    function Permute(arr, m = []) {
        if (arr.length === 0) {
            result.push(m)
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                Permute(curr.slice(), m.concat(next));
            }
        }
    }

    Permute(inputArr);

    return result;
};
console.log(Permutator([1, 2, 3]));
/*returns
[
    [ 1, 2, 3 ],
    [ 1, 3, 2 ],
    [ 2, 1, 3 ],
    [ 2, 3, 1 ],
    [ 3, 1, 2 ],
    [ 3, 2, 1 ]
]
*/


