'use strict';

class Book {

    constructor(t, y, p) {
        this.title = t;
        this.pubYear = y;
        this.price = p;
    }

    show() {
        console.log(`{this.title} {this.price}`);
    }
}

let b = new Book('мим', 2020, 19.99);
b.show();
