const reverseArray = (arr) => {
    let result = [];
    for (let i in arr) {
        result.unshift(arr[i]);
    }
    return result;
}

const reverseArrayInPlace = (arr) => {
    const midArrLength = Math.floor(arr.length / 2);
    const lastIndex = arr.length - 1;
    for (let i = 0; i < midArrLength; i++) {
        let arrBinding = arr[i];
        arr[i] = arr[lastIndex - i];
        arr[lastIndex - i] = arrBinding;
    }
    return arr;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]