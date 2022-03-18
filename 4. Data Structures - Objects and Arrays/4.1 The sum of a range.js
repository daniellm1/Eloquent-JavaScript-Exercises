const range = (start, end, step) => {
    const arr = [];
    if (step === undefined) {
        for (let i = start; i <= end; i++) {
            arr.push(i);
        }
    } else if (step > 0) {
        for (let i = start; i <= end; i += step) {
            arr.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            arr.push(i);
        }
    }
    return arr;
}

const sum = (arr) => {
    let totalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i];
    }
    return totalSum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55