"use strict"
function pow(m,n) {
  if (n == 0) {
    return 1;
  }
  return m*pow(m,--n);
}
let a, b, power
a = prompt("Введите число",'')
b = prompt("Введите степень",'')
power = pow(a,b)
alert(`${a} в степени ${b} равно ${pow(a,b)}`);
