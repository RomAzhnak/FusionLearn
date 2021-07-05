"use strict"
const numberToWord = {
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
    let outString = [];
    let hundreds = Math.floor(digit / 100) * 100;
    digit = digit % 100;
    outString.push(numberToWord[hundreds]);
    if ((digit < 20) && (digit > 2)) {
        outString.push(numberToWord[digit]);
    } else {
        outString.push(numberToWord[Math.floor(digit / 10) * 10]);
        digit = digit % 10;
        if ((digit < 3) && thousands) {
            digit = -digit;
        }
        outString.push(numberToWord[digit]);
    }
    if (thousands) {
        switch (digit) {
            case -1: outString.push('тысяча');
                break;
            case -2:
            case 2:
            case 3:
            case 4: outString.push('тысячи');
                break;
            default: outString.push('тысяч');

        }
    }
    return outString
}

function numberInWords(number) {
    if (!number) { return 0 }
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

console.log(numberInWords(555555));
