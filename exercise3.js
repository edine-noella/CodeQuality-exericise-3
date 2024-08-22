//Implement a JavaScript function to find the sum of all elements in an array recursively

function sumOfArray(arr) {
    if (!Array.isArray(arr)) throw new Error("Invalid input")
    if (arr.length === 0) return 0;
    return arr.reduce((a , b) => a + b , 0);
}

console.log(sumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 