/*
В результате, в консоли будут выведены такие сообщения.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
*/

const categoriesEl = document.querySelectorAll("#categories");
console.log(categoriesEl);

const categoriesItemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItemEl.length}`);


console.log(`Category: ${categoriesItemEl[0].firstElementChild.textContent}`);
console.log(`Elements: ${categoriesItemEl[0].querySelectorAll('li').length}`);

console.log(`Category: ${categoriesItemEl[1].firstElementChild.textContent}`);
console.log(`Elements: ${categoriesItemEl[1].querySelectorAll('li').length}`);

console.log(`Category: ${categoriesItemEl[2].firstElementChild.textContent}`);
console.log(`Elements: ${categoriesItemEl[2].querySelectorAll('li').length}`);
