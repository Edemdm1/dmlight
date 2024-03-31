// Масив кольорів складається з 3 елементів. 
const colors = ['blue', 'green', 'white'];

// Exercise_1: 
// Визначити функцію зворотного виклику під назвою "iter". Функція приймає один параметр під назвою «item». Усередині функції має бути оператор console.log, який виводить значення параметра «item» на консоль. Використовуючи forEach() та функцію iter, вивести в консоль значення кожного кольору.

function item(item) {
    console.log(item);
}
colors.forEach(item);


// Exercise_2:
// Визначити функцію зворотного виклику під назвою "iterate", яка приймає два параметри: "item" та "index". Функція повинна видавати повідомлення на консоль за допомогою шаблонних літералів. Повідомлення має містити значення «item» і значення «index» - ${item} has index ${index}. Використовуючи forEach() та функцію iterate, вивести в консоль значення кожного кольору

function iterate(item, index) {
    console.log(`${item} has index ${index}.`);
}
colors.forEach(iterate);

// Перепишіть функцію iterate, використовуючи масив colors, таким чином, щоб на консоль видавалось повідомлення 'The last iteration!', коли функція виконує останню ітерацію для елементів colors.

function iterate(item, index) {
    if (index === colors.length - 1) {
        console.log('The last iteration!')
    } else {
        console.log(`${item} has index ${index}.`);
    }
}
colors.forEach(iterate);


// Exercise_3:
// Маємо масив letters
const letters = ['a', 'b', 'c'];

// Визначити функцію зворотного виклику під назвою "iterate", яка приймає параметр під назвою "letter". Усередині функції має бути оператор console.log, який перевіряє, чи значення «this» дорівнює об'єкту «window». Коли функція викликається, вона повинна реєструвати «true» на консолі, якщо значення «this» дорівнює об'єкту «window».
function iterate(letter) {
    console.log(this === window);
}

letters.forEach(iterate, window);


// Exercise_4:
// Маємо масив Numbers

const Numbers = [22, 3, 4, 10];
// 
let allEven = true;

// Встановити, чи всі числа масиву парні методом forEach()
Numbers.forEach(number => {
    if (number % 2 !== 0) {
        allEven = false;
    }
});

if (allEven) {
    console.log("Усі числа масиву є парними.");
} else {
    console.log("Не всі числа масиву є парними.");
}


// Exercise_5:
// Маємо масив numbers

const numbers = [22, 3, 4, 10];

// Встановити, чи всі числа масиву парні методом every()

const allEven1 = numbers.every(function(number) {
    return number % 2 === 0;
});

if (allEven1) {
    console.log("Усі числа масиву є парними.");
} else {
    console.log("Не всі числа масиву є парними.");
}


// Exercise_6:
// Маємо масив fruits

const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
// Використовуючи метод findIndex, знайти індекс першого елемента в масиві, який задовольняє умову fruit === "blueberries".

const index = fruits.findIndex(fruit => fruit === "blueberries");
console.log(index);
console.log(fruits[index]);


// Exercise_7:
// Маємо масив arr
const arr = [7, 33, 47, 99, 2, 103, 79];

// Використовуючи метод find, знайти перший елемент у масиві arr, який задовольняє умову елемент > 10.

const found = arr.find(element => element > 10);
console.log(found);


// Exercise_8:
// Маємо масив array

const array = [1, 2, 3, 4, 5];

// Використовуючи метод some, перевірте, чи існує принаймні один елемент у масиві array, що є парним.

const even = (element) => element % 2 === 0; // checks whether an element is even
console.log(array.some(even)); // true


// Exercise_9:
// Маємо масив numbersArr

const numbersArr = [1, 30, 4, 21, 100000];
// Використовуючи метод sort, відсортуйте елементи масиву "numbers" у порядку зростання.

numbersArr.sort(function(a, b) {
    return a - b;
});
console.log(numbersArr); // [ 1, 4, 21, 30, 100000 ]