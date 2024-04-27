'use strict';

document.addEventListener('DOMContentLoaded', function () {
  // Отримання посилання на форму заявки
  let applicationForm = document.querySelector('.application__form');
 
  // Ініціалізація валідації форми за допомогою бібліотеки JustValidate
  new JustValidate('.application__form', {
    rules: {
      name: {
        required: true,
        minLength: 2
      },
      phone: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      textarea: {
        required: true,
        maxLength: 150
      }
    },
    messages: {
      name: {
        required: "Write your name!" // Повідомлення про обов'язковість введення імені
      },
      email: {
        required: "Write your email!" // Повідомлення про обов'язковість введення електронної пошти
      },
      phone: {
        required: "Write your phone number!" // Повідомлення про обов'язковість введення номера телефону
      },
      textarea: {
        required: "You forgot to write a message!", // Повідомлення про обов'язковість введення текстового повідомлення
        maxLength: "Please keep it short..." // Повідомлення про перевищення максимальної довжини тексту
      }
    },
    // Обробник події для відправлення форми при успішній валідації
    submitHandler: function (applicationForm) {
      let xhr = new XMLHttpRequest();
      xhr.open("POST", "mail.php", true); // Відправляємо POST-запит на сервер
      let formData = new FormData(applicationForm); // Отримуємо дані форми
      xhr.addEventListener('load', () => {
        if (xhr.readyState == 4) {
          switch (xhr.status) {
            case 200:
              console.log("We got a successful request"); // Вивід повідомлення про успішний запит
              showModalResult("Application sent"); // Показ модального вікна з результатом
              applicationForm.reset(); // Очистка форми після успішного відправлення
              break;
            case 301:
              console.log("Our request moved permanently"); // Повідомлення про переміщення запиту
              break;
            case 404:
              console.log("We didn't find anything!!!"); // Повідомлення про помилку 404 (не знайдено)
              showModalResult("Error!"); // Показ модального вікна з помилкою
              break;
            default:
              console.log("Error!!!"); // Загальне повідомлення про помилку
              showModalResult("Error!"); // Показ модального вікна з помилкою
              break;
          }
        };
      });
      xhr.send(formData); // Відправлення даних форми на сервер
    }
  });
    
  // Функція для показу модального вікна з результатом
  function showModalResult(status) {
    const modalResult = document.createElement('div');
    modalResult.classList.add('modalResult'); // Додавання класу для стилізації модального вікна
    modalResult.innerHTML = `
      <h3 class="modalResult__text">${status}</h3>
    `;
    applicationForm.append(modalResult); // Додавання модального вікна до форми
    setTimeout(() => {
      modalResult.remove(); // Видалення модального вікна після певного часу (4 секунди)
    }, 4000);
  };

});
