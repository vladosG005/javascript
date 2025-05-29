/*
 * Возвращает дробную часть числа, т.е. какое положительное число, меньшее 1, необходимо вычесть, чтобы получить целое число.
 * @param {number} num - исходное число.
 * @return {number} дробную часть num.
*/
export function getDecimal(num) {

    return num - Math.floor(num);

}

/*
 * Возвращает дробную часть числа, т.е. какое положительное число, меньшее 1, необходимо вычесть, чтобы получить целое число.
 * @param {number} num - исходное число.
 * @return {number} дробную часть num.
*/
export function normalizeUrl(url) {
    
    url.replace('http://', 'https://');

    if (!url.startsWith('https://')) {
        url = 'https://' + url;
    }
    
    return url;
}