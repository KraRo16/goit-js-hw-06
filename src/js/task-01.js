const categoriesEL = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesEL.length);

categoriesEL.forEach((element, index) => {
  const catEl = element.querySelector('h2');
  const elemEl = element.querySelectorAll('li');
  console.log('Categorie:', catEl.textContent);
  console.log('Elements:', elemEl.length);
});
