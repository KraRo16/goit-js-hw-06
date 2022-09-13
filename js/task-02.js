const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredientsEl = document.querySelector('#ingredients');

const elementsEl = ingredients.map(ingredients => {
  const newListEl = document.createElement('li');
  newListEl.classList.add('item');
  newListEl.textContent = ingredients;
  console.log(newListEl);
  return newListEl;
});

ingredientsEl.append(...elementsEl);
