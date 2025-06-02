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
    
}

let b1 = new Book('Мастер и Маргарита', 1966, 204);
b1.show();

let b2 = new Book();
b2.setTitle('Горе от ума');
b2.setPubYear(1825);
b2.setPrice(89);

console.log(`Название новой книги: ${b2.getTitle()}
Год публикации: ${b2.getPubYear()}
Цена: ${b2.getPrice()} ₽`);

