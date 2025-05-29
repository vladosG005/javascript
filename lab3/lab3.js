/*
 * Возвращает дробную часть числа, т.е. какое положительное число, меньшее 1, необходимо вычесть, чтобы получить целое число.
 * @param {number} num - исходное число.
 * @return {number} дробную часть num.
*/
export function getDecimal(num) {

    return num - Math.floor(num).toFixed(15);

}

/*
 * Нормализует ссылку: заменяет http:// на https:// или добавляет https:// в начало.
 * @param {string} url - ссылка.
 * @return {string} нормализованную url.
*/
export function normalizeUrl(url) {
    
    url = url.replace('http://', 'https://');

    if (!url.startsWith('https://')) {
        url = 'https://' + url;
    }

    return url;
}

/*
 * Проверяет, есть ли в строке спам: подстроки "XXX" или "viagra" в любом регистре.
 * @param {string} str - исходная строка.
 * @return {boolean} true, если в str есть спам, иначе false.
*/
export function checkSpam(str) {

    str = str.toLowerCase();
    return str.includes('xxx') || str.includes('viagra') ? true : false;

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
