function pow(x, y) {
    if (y == 0) {
        return 1;
    }
    return x * pow(x, --y);
}

let a = prompt();
let b = prompt();
alert(pow(a, b));