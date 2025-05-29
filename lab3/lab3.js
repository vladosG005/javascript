/*
 * Возвращает дробную часть числа, т.е. какое положительное число, меньшее 1, необходимо вычесть, чтобы получить целое число.
 * @param {number} num - исходное число.
 * @return {number} дробную часть num.
*/
export function getDecimal(num) {
    a = 5;
    return num - Math.floor(num);
}
