/*
 * Возвращает дробную часть числа, т.е. какое положительное число, меньшее 1, необходимо вычесть, чтобы получить целое число.
 * @param {number} num - исходное число.
 * @return {number} дробную часть num.
*/
export function getDecimal(num) {

    return num - Math.floor(num);

}

/*
 * Нормализует ссылку: заменяет http:// на https:// или добавляет https:// в начало.
 * @param {string} url - ссылка.
 * @return {string} нормализованную url.
*/
export function normalizeUrl(url) {
    
    url.replace('http://', 'https://');

    if (!url.startsWith('https://')) {
        url = 'https://' + url;
    }

    return url;
}

export function checkSpam(str) {
}

export function truncate(str, maxlength) {
}

export function camelize(str) {
}

export function fibs(n) {
}

export function arrReverseSorted(arr) {
}

export function unique(arr) {
}
