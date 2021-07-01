"use strict";
function newFlat1(numbers) {
    let arr;
    while (typeof numbers[numbers.length-1] != "number") {
        arr = numbers.pop();
        numbers = numbers.concat(arr);  // numbers.push(...arr);
    }
    return numbers;
}

let numb = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10, [11]]]]]];
console.log(numb);
console.log(newFlat1(numb));

// второй вариант

/* function newFlat(numbers) {
    let arr = [];
    arr = numbers.pop();
    if (typeof arr == 'number') {
        return numbers.concat(arr);
    } else {
        numbers = numbers.concat(newFlat(arr));
        return numbers;
    }
}

let numb = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10, 11, [2, 3, 4, [5]]]]]]];
console.log(numb);
console.log(numb[2]);
let s = newFlat(numb);
console.log(s); */
