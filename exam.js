// Given an array of elements, return the length of the longest subarray where all its elements are distinct.

// // For example, given the array [5, 1, 3, 5, 2, 3, 4, 1], return 5 as the longest subarray of distinct elements is [5, 2, 3, 4, 1].

function runTests() {
    const tests = [
        { input: [5, 1, 3, 5, 2, 3, 4, 1], expected: 5 },
        { input: [1, 2, 3, 4, 5], expected: 5 },
        { input: [1, 1, 1, 1], expected: 1 },
        { input: [1, 2, 3, 2, 1], expected: 3 },
        { input: [], expected: 0 },
        { input: [5, 5, 5, 5, 5], expected: 1 },
        { input: [2, 1, 2, 1, 2, 1], expected: 2 },
        { input: [2, 3, 4, 5, 2, 3, 4, 5], expected: 4 },
        { input: [1, 2, 3, 1, 2, 3, 4, 5, 6, 7], expected: 7},
        { input: [7, 3, 3, 1, 2, 4, 5, 6, 7, 8], expected: 8 },
        // Additional test cases
        { input: [2, 7, 9, 2, 1, 7, 8, 3, 2], expected: 6 },
        { input: [8, 6, 7, 8, 6, 7, 8], expected: 3 },
        { input: [1, 2, 1, 3, 2, 3, 4, 5], expected: 5 },
        { input: [10, 20, 10, 30, 40, 50, 60], expected: 6 },
        { input: [4, 4, 4, 4, 4, 4, 4, 4, 4], expected: 1 },
        { input: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5], expected: 5 },
        { input: [10, 20, 30, 40, 50, 60, 70, 80]
, expected: 8 },
        { input: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], expected: 10 },
        { input: [1, 2, 3, 4, 1, 2, 3, 4, 5], expected: 5 },
        { input: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4], expected: 4 }
    ];

    tests.forEach((test, index) => {
        const result = lengthOfLongestSubarray(test.input);
        console.log(`Test ${index + 1}:`, result === test.expected ? 'PASSED' : `FAILED (Expected ${test.expected}, got ${result})`);
    });
}
function lengthOfLongestSubarray(arr){
let newArr = []
let finalArr = arr.filter( (x) => {
        if(!newArr.length){
            newArr.push(x)
            return x
        }
        if(!newArr.includes(x)){
            newArr.push(x)
            return x
        }
})
return finalArr.length
}

runTests()