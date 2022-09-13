// Напиши скрипт который, при наборе текста в инпуте input#name-input
// (событие input), подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputEl = document.querySelector('#name-input');
console.log(inputEl);
const outputEl = document.querySelector('#name-output');
console.log(outputEl);

inputEl.addEventListener('input', inputChange);

function inputChange(event) {
  outputEl.textContent = inputEl.value === '' ? 'Anonymus' : inputEl.value;
}
