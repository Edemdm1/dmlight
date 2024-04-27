"use strict";
document.addEventListener('DOMContentLoaded', function () {

  // Отримання посилань на елементи DOM
  const menu = document.querySelector('.our-services__menu'); // Меню табів
  const content = document.querySelectorAll('.our-services__content'); // Вміст табів
  const tabs = document.querySelectorAll('.our-services__tab'); // Елементи табів

  // Додавання обробника події кліку на меню табів
  menu.addEventListener('click', (e) => {
    // При кліку знімаємо клас "active-tab" з усіх елементів табів
    tabs.forEach(item => {
      item.classList.remove("active-tab");
    });

    // Виклик функції для показу вмісту відповідного табу
    showContent(e.target);
  });

  // Функція для відображення вмісту відповідного табу
  function showContent(tab) {
    content.forEach(item => {
      item.classList.remove("visible-content"); // Знімаємо клас "visible-content" з усіх елементів вмісту

      // Перевірка, чи співпадає атрибут "data-aplienceParts" елемента вмісту з атрибутом табу
      if (item.dataset.aplienceParts == tab.dataset.aplienceParts) {
        item.classList.add('visible-content'); // Додаємо клас "visible-content" для показу потрібного вмісту
      }
    });

    tab.classList.add("active-tab"); // Додаємо клас "active-tab" для виділення активного табу
  }

});
