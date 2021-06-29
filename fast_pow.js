function fastpow(x,y) {
    let p;
    if (y==0) {
        return 1;
    }
    p =  fastpow(x, Math.floor(y/2));
    p = p**2;
    if (y%2) {
    p = p*x;
    }
    return p;
}

let a = prompt();
let b = prompt();
alert(fastpow(a,b));
