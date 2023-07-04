const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsListEl = document.querySelector('ul#ingredients');

const addIngredients = ingredients.map(ingredient => {

const liEl = document.createElement('li');
liEl.classList.add('item');
liEl.textContent = ingredient;

return liEl;
})

ingredientsListEl.append(...addIngredients);






