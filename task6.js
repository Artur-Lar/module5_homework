const arr = [1, 2, 3, 4, 4];
const allEqual = arr.every((val, i, arr) => val === arr[0]);
console.log(`Все элементы массива одинаковые: ${allEqual}`);
const hasDuplicates = arr.some((val, i, arr) => arr.indexOf(val) !== i);
console.log(`В массиве есть повторяющиеся элементы: ${hasDuplicates}`);
