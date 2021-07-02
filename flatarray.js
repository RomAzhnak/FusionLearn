"use strict";
function newFlat1(numbers) {
    let tempArray;
    while (typeof numbers[numbers.length-1] != "number") {
        tempArray = numbers.pop();
        numbers = numbers.concat(tempArray);  // numbers.push(...tempArray);
    }
    return numbers;
}

function newFlatRecursion(numbers) {
    let tempArray = [];
    tempArray = numbers.pop();
    if (typeof tempArray == 'number') {
        return numbers.concat(tempArray);
    } else {
        return numbers.concat(newFlatRecursion(tempArray));
    }
}

let testArray = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10, [11]]]]]];
console.log(testArray);
console.log(newFlat1(testArray));

// вариант с рекурсией

testArray = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10, 11, [2, 3, 4, [5]]]]]]];
console.log(testArray);
console.log(newFlatRecursion(testArray));
