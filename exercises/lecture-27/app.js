// Знайти елемент ul у документі та запам'ятати його у змінній ul.

// За допомогою JSON.parse прочитати елемент localStorage з ключем items та зберегти його в масиві itemsArray. Якщо елемент відсутній, створити його зі значенням [].

// Написати функцію addTask(text), що створює елемент li з властивістю textContent, яка дорівнює значенню, що передається за допомогою аргументу функції text. Кожний створений елемент li функція повинна додавати до елемента ul.

// Використовуючи метод forEach та функцію addTask, згенерувати вміст елемента ul, відображаючи його на сторінці.

// Знайти елемент input у документі та запам'ятати його у змінній input.

// Написати функцію add(), що додає до масиву itemsArray значення, введене користувачем в полі input, та зберігає цей масив у localStorage з ключем items, використовуючи метод JSON.stringify. Одночасно візуалізувати доданий елемент на сторінці, використовуючи функцію addTask.

// Написати функцію del(), що чистить localStorage, масив itemsArray та значення властивості ul.innerHTML.

// Отримання посилань на елементи DOM
const ul = document.querySelector('ul');
const input = document.getElementById('item');

// Отримання масиву завдань з localStorage, якщо він є
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

// Функція для додавання завдання до списку
function addTask(text) {
    const newItem = document.createElement('li');
    newItem.textContent = text;
    ul.appendChild(newItem);
}

// Функція для додавання нового завдання
function add() {
    const newItemValue = input.value;
    // Перевірка, чи поле введення не порожнє
    if (newItemValue.trim() !== '') {
        // Додавання нового завдання до масиву та візуалізація на сторінці
        itemsArray.push(newItemValue);
        addTask(newItemValue);
        // Збереження оновленого масиву в localStorage
        localStorage.setItem('items', JSON.stringify(itemsArray));
        // Очищення поля введення
        input.value = '';
    }
}

// Функція для видалення всіх завдань
function del() {
    // Очищення localStorage та масиву
    localStorage.removeItem('items');
    itemsArray = [];
    // Очищення вмісту списку на сторінці
    ul.innerHTML = '';
}

// Відображення всіх завдань, збережених у масиві itemsArray
itemsArray.forEach(item => {
    addTask(item);
});