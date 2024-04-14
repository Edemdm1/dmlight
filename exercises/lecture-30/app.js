// Exercise_1: У файлі index.html є форма з 2-ма полями. Написати асинхронну функцію, що чекає 10 секунд, поки користувач заповнює поля форми. Після чого функція читає значення полів форми, зберігає їх у змінних firstName і lastName та перевіряє чи вони не пусті. Якщо обидва значення пусті, функція змінює контент h1 на I'm miss You. Якщо хоча б одне зі значень заповнене, функція змінює контент h1 на Hello firstName lastName!
// setTimeout використовується для запуску функції myFunction через 10 секунд.
setTimeout(myFunction, 10000);

function myFunction() {
    // Отримання значення полів форми та обрізання зайвих пробілів.
    const firstName = document.querySelector('input[name="firstName"]').value.trim();
    const lastName = document.querySelector('input[name="lastName"]').value.trim();
    
    // Перевірка, чи обидва значення полів пусті.
    if (!firstName && !lastName) {
        // Якщо обидва значення пусті, зміна вмісту елемента з id="waiting" на "I'm miss You".
        document.getElementById('waiting').textContent = "I'm miss You";
    } else {
        // Інакше, якщо хоча б одне поле заповнене, вивід вітання з іменем та прізвищем.
        document.getElementById('waiting').textContent = `Hello ${firstName} ${lastName}!`;
    }
}

// Exercise_2: Створити новий об'єкт xhr, як екземпляр XMLHttpRequest. Надіслати запит на веб-сервер https://jsonplaceholder.typicode.com/posts, використовуючи методи open() і send().
// Створення нового об'єкту XMLHttpRequest для виконання асинхронних запитів до сервера.
let xhr = new XMLHttpRequest();
let url = 'https://jsonplaceholder.typicode.com/posts'
xhr.open('GET', url, true);

// Шаблон для побудови кожного елемента публікації.
const template = (item) => `
       <h3>${item.title}</h3>
       <div>${item.body}</div>`;

       
// Використовуючи подію xhr.onload, напишіть функцію зворотного виклику, що отримує результат запиту з сервера, за допомогою JSON.parse перетворює результат на об'єкт, будує за допомогою шаблона template стрічку публікацій та поміщає отриманий результат всередину елемента з id="demo".       
// Обробник події, який виконується після завершення запиту до сервера.
xhr.onload = function () {
    if (xhr.status === 200) {
        // Парсинг отриманих даних з сервера у форматі JSON.
        const response = JSON.parse(xhr.responseText);
        let postsHTML = "";
        // ПОбудова HTML за допомогою шаблону для кожного об'єкту публікації.
        response.forEach(post => {
            postsHTML += template(post);
        });    
        // Вставлення отриманого HTML у елемент з id="demo".
        document.getElementById("demo").innerHTML = postsHTML;
    } else {
        console.error('Request failed. Status:', xhr.status);
    }
};

// Відправлення запиту до сервера.
xhr.send();
