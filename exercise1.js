

function checkArrayNesting(arr) {

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            count++;
            count += checkArrayNesting(arr[i]);
        }
    }
    return count;
}

function flattenArray(arr) {
    if (!Array.isArray(arr)) throw new Error("Invalid input")
    return arr.flat(checkArrayNesting(arr));
}


console.log(flattenArray([ [1, 2, [3, 4]], 5, [6, 7] ])); 