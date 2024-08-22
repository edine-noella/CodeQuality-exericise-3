
function removeDuplicates(arr) {
    if (!Array.isArray(arr)) throw new Error("Invalid input")
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3]));