// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число
let i =0;
console.log(`${i} – это ноль`);
for (i = 1; i < 11; i++) {
    let even = 'четное';
    (i%2 === 0)? even = 'четное' : even = 'нечетное';
    console.log(`${i} – это ${even} число`);
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const array = [1, 2, 3, 4, 5, 6, 7];
const newArray = [];

for (let i = 0; i < array.length; i++) {
    (array[i] < 4 || array[i] > 5) ? newArray.push(array[i]): null;
}

console.log(newArray);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const arr = []
for (let i = 0; i < 5; i++) {
    arr.push(Math.floor(Math.random()*10));
}
console.log(arr);
let sum = arr[0];
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
    sum = sum + arr[i];
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log(`Sum = ${sum}, Min = ${min}`);

let findThree = false
for (let i = 0; i < arr.length; i++) {
    (arr[i] == 3) ? findThree = true: null;
}
console.log(findThree);
