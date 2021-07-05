"use strict"
let number_to_word = {
   '-2': 'две',
   '-1': 'одна',
    '0': "",
    '1': "один",
    '2': "два",
    '3': "три",
    '4': "четыре",
    '5': "пять",
    '6': "шесть",
	'1': 'один',
	'2': 'два',
	'3': 'три',
	'4': 'четыре',
	'5': 'пять',
	'6': 'шесть',
	'7': 'семь',
	'8': 'восемь',
	'9': 'девять',
	'10': 'десять',
	'11': 'одиннадцать',
	'12': 'двенадцать',
	'13': 'тринадцать',
	'14': 'четырнадцать' ,
	'15': 'пятнадцать',
	'16': 'шестнадцать',
	'17': 'семнадцать',
	'18': 'восемнадцать',
	'19': 'девятнадцать',		
    '20': "двадцать",
    '30': "тридцать",
    '40': "сорок",
    '50': "пятьдесят",
    '60': "шестьдесят",
    '70': "семьдесят",
    '80': "восемьдесят",
    '90': "девяносто",
    '100': "сто",
    '200': "двести",
    '300': "триста",
    '400': "четыреста",
    '500': "пятьсот",
    '600': "шестьсот",
    '700': "семьсот",
    '800': "восемьсот",
    '900': "девятьсот"
}

function digitToString(digit, flag) {

    let out_string = [];
    let hundreds = String(Math.floor(digit/100) * 100);
    digit = digit % 100;
    debugger;
    out_string.push(String(number_to_word[hundreds]));
    if (digit < 20) {
        out_string.push(String(number_to_word[String(digit)]));
    } else {
        out_string.push(String(number_to_word[String(Math.floor(digit/10)*10)]));
        if ((digit % 10 < 3) && flag) {
            digit = -(digit % 10);
            out_string.push(String(number_to_word[String(digit)]));
            
        } else {
            out_string.push(String(number_to_word[String(digit % 10)]));
        }
    }
    if (flag) {
        if (digit < 0) {
            out_string.push('тысячи');
           } else {
               out_string.push('тысяч');
               }
    }
    return out_string;
}

let result_number = [];
let number = +prompt("Введите число: ", 0);
let units = number % 1000;
let thousands = Math.floor(number/1000);
if (thousands) {
    result_number = digitToString(thousands, true);
} 
result_number = result_number.concat(digitToString(units, false));
result_number = result_number.join(' ')
alert(result_number);


//console.log(digitToString(134, false))