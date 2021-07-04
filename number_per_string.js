"use strict"
let numberToWord = {
    '-2': 'две',
    '-1': 'одна',
    '0': '',
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
    '14': 'четырнадцать',
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

function digitToString(digit, thousands) {
    let out_string = [];
    let hundreds = String(Math.floor(digit / 100) * 100);
    digit = digit % 100;
    out_string.push(String(numberToWord[hundreds]));
    if ((digit < 20) && (digit > 2)) {
        out_string.push(String(numberToWord[String(digit)]));
    } else {
        out_string.push(String(numberToWord[String(Math.floor(digit / 10) * 10)]));
        digit = digit % 10;
        if ((digit < 3) && thousands) {
            digit = -digit;
        }
        out_string.push(String(numberToWord[String(digit)]));
    }
    if (thousands) {
        switch (digit) {
            case -1: out_string.push('тысяча');
                break;
            case -2:
            case 2:
            case 3:
            case 4: out_string.push('тысячи');
                break;
            default: out_string.push('тысяч');

        }
    }
    return out_string;
}

function numberInWords(number) {
    if (!number) { return 0 }
    else {
        let resultNumber = [];
        let units = number % 1000;  // выделяем сотни,десятки,единицы
        let thousands = Math.floor(number / 1000);  // выделяем тысячи
        if (thousands) {
            resultNumber = digitToString(thousands, true);
        }
        resultNumber = [...resultNumber, ...digitToString(units, false)];
        resultNumber = resultNumber.join(' ').replace(/\s+/g, ' ');
        return resultNumber;
    }
}

// let number = 999999;    //ввод исходного числа
console.log(numberInWords(555555));
