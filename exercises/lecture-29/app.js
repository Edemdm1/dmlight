// Створіть змінну checkAuth, яка дорівнює результату пошуку селектора з класом check-auth у файлі index.html.

// За допомогою addEventListener, виконайте обробку події click на змінній checkAuth. Функція зворотного зв'язку обробки цієї події повинна запускати блок try { } catch(e) {}.

// У блоці try { } потрібно перевіряти результат, що повертає функція isAuth(). Якщо результат повернення дорівнює false, за допомогою оператора throw викинути виняток AuthException('FORBIDDEN', 'You don't have access to this page').

// У блоці catch() перехопити цей виняток та передати сформоване повідомлення про помилку у діалог dialogBoxId, відобразивши його у параграфі з класом ="message".

// Якщо результат повернення функції isAuth() дорівнює true, за допомогою метода window.open відкрити сторінку success.html.

// Створення класу AuthException, який розширює клас Error.
class AuthException extends Error {
    constructor(code, message) {
      // Виклик конструктора базового класу зі зміненою властивістю message.
      super(message ? `${code}: ${message}` : code);
      this.code = code; // Зберігання коду помилки.
    }
    
    // Перевизначення методу toString() для зручного виводу повідомлення про помилку.
    toString() {
      return this.message;
    }
  }
  
  // Функція для перевірки автентифікації. Повертає true, якщо автентифікація пройшла успішно, інакше false.
  let isAuth = (auth) => auth ?? false;
  
  // Пошук елемента з класом 'check-auth' у документі.
  let checkAuth = document.querySelector('.check-auth');
  
  // Отримання елемента діалогового вікна.
  let dialogBoxId = document.getElementById("dialogBox");
  
  // Додавання обробника події click на елементі 'check-auth'.
  checkAuth.addEventListener('click', function() {
      try {
          // Виклик функції isAuth() для перевірки автентифікації.
          let result = isAuth();
          // Якщо автентифікація не пройшла, генеруємо виняток AuthException.
          if (result === false) {
              throw new AuthException('FORBIDDEN', "You don't have access to this page");
          } else {
              // Якщо автентифікація успішна, відкриваємо сторінку success.html.
              window.open('success.html', '_blank');
          }
      } catch (e) {
          // Обробка винятку.
          console.error('Сталася помилка:', e);
          let errorMessage = e.toString();
          let messageParagraph = dialogBoxId.querySelector('.message');
          messageParagraph.textContent = errorMessage;
          showDialog(); // Відображення діалогового вікна з повідомленням про помилку.
      }
  });
  
  // Функція для відображення діалогового вікна.
  function showDialog() {
      // Додавання обробника події keydown для обробки натискання клавіш (у цьому випадку, кнопки "Escape").
      dialogBoxId.addEventListener("keydown", (e) => {
          if (e.key === "Escape") {
              e.preventDefault();
              closeDialog(); // Закриття діалогового вікна при натисканні "Escape".
          }
      });
      dialogBoxId.showModal(); // Відображення діалогового вікна.
  }
  
  // Функція для закриття діалогового вікна.
  function closeDialog() {
      if (dialogBoxId.open) {
          dialogBoxId.close(); // Закриття діалогового вікна.
      }
  }
  