'use strict';

class Book {

    constructor(t, y, p) {
    
        this.title = t;
        this.pubYear = y;
        this.price = p;
        
    }

    show() {
    
        console.log(`Название книги: ${this.title}\nЕё цена: ${this.price} ₽`);
        
    }
    
    setTitle(t) {
    
        if (t != '') {
            this.title = t;
        }
        else {
            console.log('В качестве названия передана пустая строка.');
        }
        
    }
    
    getTitle() {
        return this.title;
    }
    
    setPubYear(y) {
    
        if (y > 0) {
            this.pubYear = y;
        }
        else {
            console.log('В качестве года публикации передано неположительное число.');
        }
        
    }
    
    getPubYear() {
        return this.pubYear;
    }
    
    setPrice(p) {
    
        if (p > 0) {
            this.price = p;
        }
        else {
            console.log('В качестве цены передано неположительное число.');
        }
        
    }
    
    getPrice() {
        return this.price;
    }
    
    static compare(book1, book2) {
    
        let p1 = book1.getPubYear();
        let p2 = book2.getPubYear();
        
        if (p1 > p2) {
            return 1;
        }
        if (p1 == p2) {
            return 0;
        }
        if (p1 < p2) {
            return -1;
        }
        
    }
}

let b1 = new Book('Мастер и Маргарита', 1966, 204);
b1.show();

let b2 = new Book();
b2.setTitle('Горе от ума');
b2.setPubYear(1825);
b2.setPrice(89);

console.log(`Название новой книги: ${b2.getTitle()}\nГод публикации: ${b2.getPubYear()}\nЦена: ${b2.getPrice()} ₽`);

let bm = [new Book('Юность', 1857, 309), new Book('Детство', 1852, 249), new Book('Отрочество', 1854, 123)];

bm = bm.sort(Book.compare);

for (let i of bm) {
    console.log(`Название: ${i.getTitle()}\nГод публикации: ${i.getPubYear()}\n`);
}

function isEmpty(obj) {
    
    if (Reflect.ownKeys(obj).length) {
        return false;
    }
    return true;
    
}

console.log(isEmpty({[Symbol()]: true}));

let obj = {className: 'open menu',

    addClass(cls) {
    
        if (!(new Set(this.className.split(' ')).has(cls))) {
            if (!(this.className == '')) {
                this.className += ' ';
            } 
            this.className += cls;
        }
        
        return this;
        
    },
    
    removeClass(cls) {
        
        let s = this.className.split(' ');
        
        if (s.includes(cls)) {
            this.className = s.filter(element => element != cls).join(' ');
        }
        
        return this;
    
    }
    
}

console.log(obj.addClass('navigation').className);
console.log(obj.removeClass('menu').className);
