function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, который изменяет цвета фона элемента < body > через
//  инлайн стиль при клике на button.change - color и выводит
//  значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor.

const colorEl = document.querySelector('.color');
console.log(colorEl);

const buttonEl = document.querySelector('.change-color');
console.log(buttonEl);

buttonEl.addEventListener('click', changeBodyColor);

function changeBodyColor(color) {
  const randomColor = getRandomHexColor();
  document.body.style.background = randomColor;
  colorEl.textContent = randomColor;
}
