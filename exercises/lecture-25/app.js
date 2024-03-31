// Exercise_1:
// Маємо масив list

const list = ['html', 'css', 'javascript', 'react.js'];

// Використовуючи метод createElement, створити невпорядкований список на основі масиву list та вставити його на сторінку.

// Отримання посилання на батьківський елемент, куди буде вставлятися список
const parentElement = document.getElementById('container');

// Створення елементу невпорядкованого списку
const unorderedList = document.createElement('ul');

// Проходження по елементах масиву та створення елементів списку
list.forEach(item => {
    const listItem = document.createElement('li'); // Створення елементу списку
    listItem.textContent = item; // Встановлення тексту елементу
    unorderedList.appendChild(listItem); // Додавання елементу до невпорядкованого списку
});

// Вставка невпорядкованого списку в батьківський елемент
parentElement.appendChild(unorderedList);


// Exercise_2:
// Маємо масив listWithHref

const listWithHref = [
    {'html': "https://developer.mozilla.org/en-US/docs/Web/HTML"}, 
    {'css': "https://developer.mozilla.org/en-US/docs/Web/CSS"}, 
    {'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript"}, 
    {'react.js': "https://react.dev"}
];
// Використовуючи метод createElement, створити впорядкований список на основі масиву listWithHref, де кожний елемент списку є тегом a з відповідним посиланням. Наприклад, для першого елемента списку:
//   <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">html</a>
// Додайте створений список на сторінку.

// Створення елементу впорядкованого списку
const orderedList = document.createElement('ol');

// Проходження по елементах масиву та створення тегів <a> з посиланнями
listWithHref.forEach(item => {
    const key = Object.keys(item)[0]; // Отримимання ключю (назви) елементу
    const value = item[key]; // Отримання значення (посилання) елементу
    
    const listItem = document.createElement('li'); // Створення елементу списку
    const link = document.createElement('a'); // Створення елементу посилання
    link.href = value; // Встановлення посилання
    link.textContent = key; // Встановлення тексту посилання
    listItem.appendChild(link); // Додавання посилання до елементу списку
    orderedList.appendChild(listItem); // Додавання елементу списку до впорядкованого списку
});

// Вставка впорядкованого списку в батьківський елемент
parentElement.appendChild(orderedList);



// Exercise_3:
// Маємо масив students

const students = [
    {'firstName': 'Tom', 'lastName': 'Cat', 'degree': 230},
    {'firstName': 'Nary', 'lastName': 'Ann', 'degree': 336},
    {'firstName': 'John', 'lastName': 'Doe', 'degree': 400},
    {'firstName': 'James', 'lastName': 'Bond', 'degree': 700},
]

// Використовуючи метод createElement, створити таблицю на основі масиву students. Заголовки стовпчиків таблиці - firstName, lastName, degree. Встановити для заголовків стовпчиків таблиці css-властивості: background-color: blue; color: azure; Додайте таблицю на сторінку.

// Створення таблиці
const table = document.createElement('table');

// Створення рядку для заголовків
const headerRow = document.createElement('tr');

// Заголовки стовпчиків таблиці
const headers = ['firstName', 'lastName', 'degree'];

// Створення заголовків стовпчиків таблиці
headers.forEach(headerText => {
    const header = document.createElement('th');
    header.textContent = headerText;
    header.style.backgroundColor = 'blue';
    header.style.color = 'azure';
    headerRow.appendChild(header);
});

// Додавання рядків з заголовками в таблицю
table.appendChild(headerRow);

// Проходження по студентах та створення рядків з їх даними
students.forEach(student => {
    const row = document.createElement('tr');

    // Додавання даних студента у відповідні стовпчики
    headers.forEach(header => {
        const cell = document.createElement('td');
        cell.textContent = student[header];
        row.appendChild(cell);
    });

    // Додавання рядків з даними студента в таблицю
    table.appendChild(row);
});

// Вставка таблиці в батьківський елемент
parentElement.appendChild(table);
