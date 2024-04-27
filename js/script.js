"use strict";

document.addEventListener('DOMContentLoaded', function () {

  // Mob menu (Мобільне меню)
  const mobIcon = document.querySelector('.burger'),
    mobMenu = document.querySelector('.header-mob__nav');

  // Обробник події кліку на іконці бургера
  mobIcon.addEventListener("click", (e) => {
    // Перемикаємо класи для анімації іконки бургера та відображення/приховання меню
    mobIcon.classList.toggle("burger-rotate");
    mobIcon.classList.toggle("open");
    mobMenu.classList.toggle("header-mob__nav__show");
  });

  // Timer (Таймер)

  const deadline = '2024-05-15';

  // Функція для обчислення часу, що залишився до кінцевої дати
  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor((t / (1000 * 60 * 60 * 24))),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60) % 24));

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  // Функція для додавання нуля перед числами < 10
  function getZero(num) {
    if (num >= 0 && num < 10) {
      return '0' + num;
    } else {
      return num;
    }
  }

  // Функція для встановлення таймера на сторінці
  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);

    // Оновлення таймера кожну секунду
    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);

      // Відображення часу на таймері з додаванням нулів
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      // Зупинка таймера, якщо досягнуто кінцеву дату
      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  // Встановлення таймера на сторінці з використанням заданої дати-кінцевого терміну
  setClock('.timer', deadline);

  // Modal (Модальне вікно)

  const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal');

  // Додавання обробника подій кліку на всі кнопки-тригери модального вікна
  modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  // Функція для закриття модального вікна
  function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  // Функція для відкриття модального вікна
  function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
  }

  // Додавання обробника події кліку на модальне вікно для його закриття
  modal.addEventListener('click', (e) => {
    // Закриття модального вікна при кліку за межами вікна або на елементі з атрибутом data-close
    if (e.target === modal || e.target.getAttribute('data-close') == "") {
      closeModal();
    }
  });

  // Додавання обробника події натискання клавіші "Escape" для закриття модального вікна
  document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
      closeModal();
    }
  });

});
