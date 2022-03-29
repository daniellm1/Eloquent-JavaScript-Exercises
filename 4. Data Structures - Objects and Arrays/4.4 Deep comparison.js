const deepEqual = (a, b) => {
    const aProperties = Object.keys(a);
    const bProperties = Object.keys(b);

    if (a === b) return true;

    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;

    if (aProperties.length != bProperties.length) return false;

    for (let i of aProperties) {
        if (!bProperties.includes(i) || !deepEqual(a[i], b[i])) return false;
    }

return true;
}

let obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true