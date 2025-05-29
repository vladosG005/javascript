/*
 * Возвращает дробную часть числа, т.е. какое положительное число, меньшее 1, необходимо вычесть, чтобы получить целое число.
 * @param {number} num - исходное число.
 * @return {number} дробную часть num.
*/
export function getDecimal(num) {

    return (num - Math.floor(num)).toFixed(15);

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

/*
 * Сокращает строку до указанного количества символов.
 * @param {string} str - исходная строка.
 * @param {number} maxlength - максимальное число символов в возвращаемой строке.
 * @return {string} str, сокращённую до maxlength символов с троеточием в виде последнего символа, если её длина превышает maxlength, иначе просто str. 
*/
export function truncate(str, maxlength) {

    if (str.length <= maxlength) {
        return str;
    }

    return str.slice(maxlength - 1) + '\u2026';

}

export function camelize(str) {
}

export function fibs(n) {
}

export function arrReverseSorted(arr) {
}

export function unique(arr) {
}
