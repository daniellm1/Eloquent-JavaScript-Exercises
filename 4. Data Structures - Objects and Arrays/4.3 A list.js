const arrayToList = (arr) => {
    const reversedArray = [...arr].reverse();
    let list = null;
    for (let i in reversedArray) {
        list = {value: reversedArray[i], rest: list};
    }
    return list;
}

const listToArray = (list) => {
    let arr = [];
    for (let node = list; node; node = node.rest) {
        arr.push(node.value); 
    }
    return arr;
}

const prepend = (element, list) => {
    return {value: element, rest: list};
}

function nth(list, index) {
    if (!list) return undefined;
    else if (index == 0) return list.value;
    else return nth(list.rest, index - 1);
  }

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20