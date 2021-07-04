"use strict"
// function codeToStr(num) {
//   return String.fromCodePoint(num);
// }
/* let ob = {
  first: 'A',
  second: 'F',
  [Symbol.iterator]() {
    this.current = this.first.codePointAt(0);
    this.last = this.second.codePointAt(0);
    return this;
  },
  next() {
    if (this.current <= this.last) {
      return { done: false, value: String.fromCodePoint(this.current++) };
    }
    else {
      return { done: true };
    }
  }
};

for (let i of ob) {
  console.log(i);
} */

//-----------------------------------
/*let recipeMap = new Map([
  ["огурец", 100],
  ["помидор", 150],
  ["лук", 50]
]);
 console.log(recipeMap);
for (let entry of recipeMap) {
  console.log(entry);
} */

//---------------------------------
/* let room = {
  number: 23,
  toJSON() {
    return this.number;
  }
};
let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  room
};
console.log(JSON.stringify(room)); // 23
console.log(JSON.stringify(meetup)); */

//--------------------------------------
/* let company = { // тот же самый объект, сжатый для краткости
  sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
  development: {
    sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
    internals: [{ name: 'Jack', salary: 1300 }]
  }
};

for (let subdep of Object.values(company)) {
  console.log(subdep);
}

// Функция для подсчёта суммы зарплат
function sumSalaries(department) {
  if (Array.isArray(department)) { // случай (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
  } else { // случай (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
    }
    return sum;
  }
}
console.log(sumSalaries(company)); // 6700 */

//----------------------------------------
/* let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
function printList(list) {
  if (!list) {return}
  console.log(list.value);
  printList(list.next);
}
function printReverseList(list) {
  if (!list) {return}
  printReverseList(list.next);
  console.log(list.value);
}
printList(list);
console.log('');
printReverseList(list); */

//------------------------------------
/* function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = value => count = value;
  counter.decrease = () => count--;
  return counter;
}

let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
counter.set(10); // установить новое значение счётчика
console.log(counter()); // 10
counter.decrease(); // уменьшить значение счётчика на 1
console.log(counter()); // 10 (вместо 11) */

//-------------------------------------------------
let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

// демонстрация результатов преобразований:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500
