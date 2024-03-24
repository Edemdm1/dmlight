const classes = ['first', 'second', 'third', 'fourth'];

// 1. Отримати всі елементи з тегом h1. Вивести на консоль тип отриманого об'єкту та його розмір. Використовуючи цикл for, вивести на консоль кожний елемент з отриманого об'єкту.

// Отримання всіх елементів з тегом h1
const h1Elements = document.querySelectorAll('h1');

// Виведення на консоль тип отриманого об'єкту та його розмір
console.log('Тип об\'єкту h1Elements:', typeof h1Elements);
console.log('Розмір об\'єкту h1Elements:', h1Elements.length);

//  Виведення на консоль кожного елементу з отриманого об'єкту, використовуючи цикл for
for (let i = 0; i < h1Elements.length; i++) {
    console.log('Елемент №' + (i + 1) + ':', h1Elements[i]);
}

// 2. Отримати перший абзац за допомогою document.querySelector('#id') за його ідентифікатором p1. Встановити для нього стиль background-color = "gold"

// Отримання першого абзацу за його ідентифікатором p1
const p1Element = document.querySelector('#p1');

// Встановлення для нього стиль background-color = "gold"
p1Element.style.backgroundColor = "gold";


// 3. Отримати другий абзац за допомогою document.querySelector('#id') за його ідентифікатором p2. Встановити для нього стилі background-color:gold; color: blue; font-size: 2rem;

// Отримання  абзацу 2 за його ідентифікатором p2
const p2Element = document.querySelector('#p2');

// Встановлення для нього стилі background-color:gold; color: blue; font-size: 2rem;
p2Element.style.cssText = "background-color:gold; color: blue; font-size: 2rem;";


// 4. Отримати третій абзац за допомогою document.querySelector('#id') за його ідентифікатором p3. Призначити для нього клас third

// Отримання абзацу 3 за його ідентифікатором p3
const p3Element = document.querySelector('#p3');

// Встановлення для нього клас third
p3Element.classList.add('third');


// 5. Отримати четвертий абзац за допомогою document.querySelector('#id') за його ідентифікатором p4. Призначити для нього класи fourth та border

// Отримання абзацу 4 за його ідентифікатором p4
const p4Element = document.querySelector('#p4');

// Встановлення для нього клас fourth
p4Element.classList.add('fourth');

// Встановлення для нього клас border
p4Element.classList.add('border');


// 6. Знайти всі елементи з класом container. Використовуючи цикл for, вивести на консоль перший елемент для кожного зі знайдених елементів.

// Отримання всіх елементів з з класом container
const containerElements = document.querySelectorAll('.container');

//  Виведення на консоль кожного елементу з отриманого об'єкту, використовуючи цикл for
for (let i = 0; i < containerElements.length; i++) {
    const firstElement = containerElements[i].querySelector(':first-child');
    console.log('Перший елемент контейнера ' + (i + 1) + ':', firstElement);
}


// 7. Знайти всі елементи з класом container. Використовуючи цикл for, вивести на консоль вміст першого елементу для кожного першого елемента зі знайдених елементів.

// Отримання всіх елементів з з класом container
const containerAllElements = document.querySelectorAll('.container');

//  Виведення на консоль кожного елементу з отриманого об'єкту, використовуючи цикл for
for (let i = 0; i < containerElements.length; i++) {
    const firstElementContent = containerElements[i].querySelector(':first-child').textContent;
    console.log('Вміст першого елемента контейнера ' + (i + 1) + ':', firstElementContent);
}

8. // Знаходження колекції всіх елементів з селектором '.container header'
const headers = document.querySelectorAll('.container header');

// Заміна заголовків h1 згідно з умовою
for (let i = 0; i < headers.length; i++) {
    // Залишаємо перший заголовок h1, якщо це перший елемент
    if (i === 0) continue;

    // Створення нового тегу відповідно до індексу
    const newTag = document.createElement('h' + (i + 1));

    // Копіювання вмісту старого тегу в новий
    newTag.innerHTML = headers[i].querySelector('h1').innerHTML;

    // Копіюівння атрибутів id та class
    newTag.id = headers[i].querySelector('h1').id;
    newTag.className = headers[i].querySelector('h1').className;

    // Замінення старого тегу на новий
    headers[i].replaceChild(newTag, headers[i].querySelector('h1'));
}

// Масив класів
const headerClasses = ['first', 'second', 'third', 'fourth'];

// Додавання класів до тегів-заголовків
for (let i = 0; i < headers.length; i++) {
    // Отримуємо тег заголовка (h1, h2, h3 або h4) залежно від індексу
    const tag = 'h' + (i + 1);

    // Додавання класу до відповідного тегу-заголовка
    headers[i].querySelector(tag).classList.add(headerClasses[i]);
}

