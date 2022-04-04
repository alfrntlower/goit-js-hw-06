
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector("#ingredients");

const ingredientItemsList = ingredients.map(ingredient => {
  
  const ingredientItem = document.createElement('li');

  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add("item");

 // console.log(ingredientItem.textContent);

  //ingredientsList.appendChild(ingredientItem);
});


ingredientsList.append(...ingredientItemsList);


//ingredientsList.innerHTML = ingredientItemsList;

//console.log(ingredientsList);

