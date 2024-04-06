// Написати JavaScript-код для обробки надсилання форми та виконання перевірки на стороні клієнта.

// Перевірка форми: потрібно отримати значення імені користувача, електронної пошти та пароля.

// Виконати базову перевірку:

// ім’я користувача не може бути пустим,
// електронна адреса має бути у правильному форматі,
// пароль має містити принаймні 8 символів,
// пароль має містити принаймні одну велику літеру, одну малу літеру, одну цифру та один спеціальний символ.
// Обробка помилок: якщо будь-яка перевірка не вдасться, потрібно показати відповідне повідомлення про помилку. Повідомлення про помилки відображаються в розділі errorMessages.

// Скидання форми: після успішної реєстрації потрібно скинути значення полів форми.

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const errorMessages = document.getElementById('errorMessages');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Заборона стандартної відправку форми
  
      // Очистка попереднього повідомлення про помилки
      errorMessages.innerHTML = '';
  
      // Отримання значення форми
      const username = form.username.value.trim();
      const email = form.email.value.trim();
      const password = form.password.value.trim();
  
      // Перевірка валідності введених даних
      if (username === '') {
        displayError('Введіть ім\'я користувача.');
        return;
      }
  
      if (email === '') {
        displayError('Введіть електронну пошту.');
        return;
      }
  
      // Перевірка правильності формату електронної пошти за допомогою регулярного виразу
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        displayError('Неправильний формат електронної пошти.');
        return;
      }
  
      if (password === '') {
        displayError('Введіть пароль.');
        return;
      }
  
      // Перевірка довжини паролю
      if (password.length < 8) {
        displayError('Пароль повинен містити принаймні 8 символів.');
        return;
      }
  
      // Перевірка складності паролю
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/;
      if (!passwordRegex.test(password)) {
        displayError('Пароль повинен містити принаймні одну велику літеру, одну малу літеру, одну цифру та один спеціальний символ.');
        return;
      }
  
      // Відправлення форми після всіх перевірок. Виведення даних форми в консоль
      console.log('Ім\'я користувача:', username);
      console.log('Електронна пошта:', email);
      console.log('Пароль:', password);
  
      // Очистка значення полів форми після успішної відправки
      form.reset();
    });
  
    function displayError(message) {
      const errorMessage = document.createElement('p');
      errorMessage.textContent = message;
      errorMessages.appendChild(errorMessage);
    }
  });
  