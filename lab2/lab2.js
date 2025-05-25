'use strict';

function pow(x, n) {

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

function isLeapYear (year) {

    return year % 4 == 0 ?
            year % 100 == 0 ?
                year % 400 == 0 ?
                    year % 3200 == 0 ? false 
                    : true
                : false
            : true
        : false;
        
}