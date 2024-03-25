const alertElement = document.querySelector('.alert');

// 1. Знайти на сторінці кнопку з класом btn-primary. Призначте знайденому елементу подію onclick. Написати функцію обробки події onclick, що додає CSS-клас alert-primary до елемента з id = alert та змінює значення властивості textContent цього елемента на "A simple primary alert—check it out!".
// Отримумання кнопки з класом btn-primary
const primaryButton = document.querySelector('.btn-primary');

// Призначення подію onclick кнопці
primaryButton.onclick = function() {
    // Додавання CSS-клас alert-primary
    alertElement.classList.add('alert-primary');
    
    // Зміна текстового вмісту елемента
    alertElement.textContent = "A simple primary alert—check it out!";
};

// Обробки події mouseout
primaryButton.addEventListener('mouseout', function() {
    // Додавання CSS-клас alert-success
    alertElement.classList.remove('alert-primary');

    // Зміна текстового вмісту елемента
    alertElement.textContent = ""; 
})

// 2. Знайти на сторінці кнопку з класом btn-secondary. Додати до кнопки прослуховувач події "click". Написати функцію обробки події click, що додає CSS-клас alert-primary до елемента з id = alert та змінює значення властивості textContent цього елемента на "A simple secondary alert—check it out!"

// Отримумання кнопки з класом btn-secondary
const secondaryButton = document.querySelector('.btn-secondary');

// Обробки події click
secondaryButton.addEventListener('click', function() {
    // Додавання CSS-клас alert-primary
    alertElement.classList.add('alert-primary');

    // Зміна текстового вмісту елемента
    alertElement.textContent = "A simple secondary  alert—check it out!"; 
})

// Обробки події mouseout
secondaryButton.addEventListener('mouseout', function() {
    // Додавання CSS-клас alert-success
    alertElement.classList.remove('alert-primary');

    // Зміна текстового вмісту елемента
    alertElement.textContent = ""; 
})

// 3. Знайти на сторінці кнопку з класом btn-success. Додати до кнопки прослуховувач події "mouseover". Написати функцію обробки події mouseover, що додає CSS-клас alert-success до елемента з id = alert та змінює значення властивості textContent цього елемента на "A simple success alert—check it out!"

// Отримумання кнопки з класом btn-success
const successButton = document.querySelector('.btn-success');

// Обробки події mouseover
successButton.addEventListener('mouseover', function() {
    // Додавання CSS-клас alert-success
    alertElement.classList.add('alert-success');

    // Зміна текстового вмісту елемента
    alertElement.textContent = "A simple success alert—check it out!"; 
})

// Додати до кнопки прослуховувач події "mouseout". Написати функцію обробки події mouseout, що видаляє CSS-клас alert-success з елемента alert та змінює значення властивості textContent цього елемента на пустий рядок.

// Обробки події mouseout
successButton.addEventListener('mouseout', function() {
    // Додавання CSS-клас alert-success
    alertElement.classList.remove('alert-success');

    // Зміна текстового вмісту елемента
    alertElement.textContent = ""; 
})

// 4. Знайти на сторінці кнопку з класом btn-danger. Додати до кнопки прослуховувач події "focus". Написати функцію обробки події focus, що додає CSS-клас alert-danger до елемента з id = alert та змінює значення властивості textContent цього елемента на "A simple danger alert—check it out!"

// Отримумання кнопки з класом btn-danger
const dangerButton = document.querySelector('.btn-danger');

// Обробки події focus
dangerButton.addEventListener('focus', function() {
    // Додавання CSS-клас btn-danger
    alertElement.classList.add('alert-danger');

    // Зміна текстового вмісту елемента
    alertElement.textContent = "A simple danger alert—check it out!";
})


// Додати до кнопки прослуховувач події "focusout". Написати функцію обробки події focusout, що видаляє CSS-клас alert-danger з елемента alert та змінює значення властивості textContent цього елемента на пустий рядок.

// Обробки події focusout
dangerButton.addEventListener('focusout', function() {
    // Додавання CSS-клас btn-danger
    alertElement.classList.remove('alert-danger');

    // Зміна текстового вмісту елемента
    alertElement.textContent = "";
})


// 5. Знайти на сторінці кнопки з класом btn-dark та btn-light. Написати функцію toggleMode, що перемикає клас «dark-mode» елемента document.body за допомогою методу classList.toggle(). Одночасно при перемиканні класу dark-mode потрібно приховувати або показувати відповідну кнопку. Якщо ввімкнено режим dark-mode, показати кнопку btn-light та сховати кнопку dark-mode, і навпаки, якщо вимкнено режим dark-mode, показати кнопку btn-dark та сховати кнопку btn-light

// Отримумання кнопок з класами btn-dark та btn-light
const darkButton = document.querySelector('.btn-dark');
const lightButton = document.querySelector('.btn-light');

// Функція для перемикання режиму dark-mode та відображення/приховування кнопок
function toggleMode() {
    // Перемикання класу dark-mode для body
    document.body.classList.toggle('dark-mode');

    // Перевірка, чи ввімкнено режим dark-mode
    const isDarkMode = document.body.classList.contains('dark-mode');

    // Показ або приховування кнопки відповідно до режиму
    if (isDarkMode) {
        darkButton.style.display = 'none'; // приховування кнопки btn-dark
        lightButton.style.display = 'inline-block'; // Показ кнопки btn-light
    } else {
        darkButton.style.display = 'inline-block'; // Показ кнопки btn-dark
        lightButton.style.display = 'none'; // приховування кнопку btn-light
    }
}

// Обробник події click на кнопки для виклику функції toggleMode
darkButton.addEventListener('click', toggleMode);
lightButton.addEventListener('click', toggleMode);


// 6. Знайти на сторінці кнопку з класом btn-info. Додати до кнопки прослуховувач події "keypress". Написати функцію обробки події keypress, що перевіряє, чи є натиснута клавіша, клавішею "Enter". Якщо це так, типову дію події потрібно скасовувати за допомогою методу event.preventDefault(). Після скасування дії за замовчуванням, додати CSS-клас alert-info до елемента з id = alert та змінити значення властивості textContent цього елемента на "A simple info alert—check it out!";

// Отримумання кнопку з класом btn-info
const infoButton = document.querySelector('.btn-info');

// Прослуховувач події keypress до кнопки
infoButton.addEventListener('keypress', function(event) {
    // Перевірка, чи натиснута клавіша є клавішею "Enter"
    if (event.key === 'Enter') {
        // Скасовуння типової дію події
        event.preventDefault();

        // Додання CSS-класу alert-info
        alertElement.classList.add('alert-info');
        
        // Зміна текстового вміст елемента
        alertElement.textContent = "A simple info alert—check it out!";
    }
});

// Обробки події mouseout
infoButton.addEventListener('mouseout', function() {
    // Додавання CSS-клас alert-info
    alertElement.classList.remove('alert-info');

    // Зміна текстового вмісту елемента
    alertElement.textContent = ""; 
})


// 7. Знайти на сторінці всі селектори .card. Використовуючи цмкл for, вивести на консоль вміст кожного елемента з класом .card-title

// Отримання всіх елементів з класом .card
const cards = document.querySelectorAll('.card');

// Цикл для ітерації по кожному елементу .card
for (let i = 0; i < cards.length; i++) {
    // Отримуння заголовоку кожної .card
    const cardTitle = cards[i].querySelector('.card-title');
    
    // Виведення вмісту заголовка на консоль
    console.log(cardTitle.textContent);
}


// 8. Знайти на сторінці всі селектори .card. Використовуючи цикл for, знайти для кожного елемента .card кнопку з класом .add-to-cart, додати для кожної кнопки обробник події click, що викликає функцію, яка виводить на консоль вміст кожного елемента з класом .card-title

// Цикл для ітерації по кожному елементу .card
for (let i = 0; i < cards.length; i++) {
    // Отримвння кнопки .add-to-cart для кожного елемента .card
    const addToCartButton = cards[i].querySelector('.add-to-cart');
    
    // Додавання обробнику події click для кожної кнопки
    addToCartButton.addEventListener('click', function() {
        // Отримання заголовоку кожної .card
        const cardTitle = cards[i].querySelector('.card-title');
        
        // Виведення вмісту заголовка на консоль
        console.log(cardTitle.textContent);
    });
}

