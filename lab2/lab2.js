'use strict';

function pow(x, n) {

    if (Math.floor(n) != n) {
        return NaN;
    }

    if (n == 0) {
        if (x == 0) {
            return NaN;
        }
        else {
            return 1;
        }
    }

    if (n < 0) {
        n = -n;
        x = 1 / x;
    }

    let x1 = x;
    for (let i = 1; i < n; i++) {
        x *= x1;
    }
    return x;

}

let sumTo = new Function('n', `let s = 0;
    for (let i = 1; i <= n; i++) {
        s += i;
    }
    return s;`);

function isLeapYear(year) {

    return year % 4 == 0 ?
            year % 100 == 0 ?
                year % 400 == 0 ? true
                : false
            : true
        : false;
        
}

function factorial(n) {

    if (n == 0n) {
        return 1n;
    }
    else {
        return BigInt(n) * factorial(n - 1);
    }

}

function fib(n) {
    
    let x1 = -1n;
    let x = 0n;
    let t = 0n;
    
	let i = 0;
	if (n != 0) {
        // Количество знаков в двоичной записи
	    i = Math.ceil(Math.log2(Math.abs(n)));
	}
    
    while (i--) {

        // Удвоение номера числа Фибоначчи
		t = x * (2n * x1 + x);
        x1 = x1 * x1 + x * x;
        x = t;

        // Если i-ый разряд n == 1, то рассчитывается следующее число Фибоначчи
        if (Math.floor(n % 2 ** (i + 1) / 2 ** i) != 0) {
            t = x + x1;
            x1 = x;
            x = t;
        }
        
    }
    
	x = n < 0 && n % 2 == 0 ? -x : x; 
    
    return x;
    
}

function compare(x) {

    return function(y) {

        return y > x ? true
            : y == x ? null
            : false;

    }

}

function sum(...args) {

    let s = 0;

    for (let i of args) {
        s += i;
    }

    return s;

}

function addBlackSpot(obj) {
    
}
