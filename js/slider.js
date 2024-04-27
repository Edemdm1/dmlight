document.addEventListener('DOMContentLoaded', function () {
    // Початок виконання після завантаження DOM
  
    // Отримання елементів слайдера і встановлення початкових значень
    const prevBtn = document.querySelector('.services__slider__prev'), // Кнопка "Попередній слайд"
      nextBtn = document.querySelector('.services__slider__next'), // Кнопка "Наступний слайд"
      cardsField = document.querySelector('.services__slider__cards'); // Контейнер зі слайдами
  
    let positionSlide = 0, // Початкова позиція слайду (починаємо з першого слайда)
      cardsLength = document.querySelectorAll('.services__slider__card').length * 320; // Довжина всіх слайдів у пікселях
  
    // Функція для зміни позиції слайдів
    function changePositionSlide(positionSlide) {
      cardsField.style.transform = `translateX(-${positionSlide}px)`; // Змінюємо положення слайдів за допомогою CSS трансформації
    };
  
    // Обробник події кліку на кнопці "Наступний слайд"
    nextBtn.addEventListener("click", () => {
      positionSlide += 320; // Збільшуємо позицію для переміщення на один слайд (ширина слайда 320px)
      if (positionSlide >= cardsLength) {
        positionSlide = 0; // Повертаємося до першого слайду, якщо досягли кінця
      }
      changePositionSlide(positionSlide); // Змінюємо позицію слайдів
    });
  
    // Обробник події кліку на кнопці "Попередній слайд"
    prevBtn.addEventListener("click", () => {
      if (positionSlide > 0) {
        positionSlide -= 320; // Зменшуємо позицію для переміщення на один слайд назад
      } else {
        positionSlide = cardsLength - 320; // Переміщуємося до останнього слайду, якщо ми на першому
      }
      changePositionSlide(positionSlide); // Змінюємо позицію слайдів
    });
  
  });
  