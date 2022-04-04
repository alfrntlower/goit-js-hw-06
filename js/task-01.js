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


categoriesItemEl.forEach(el => {
    console.log(`Category: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.querySelectorAll('li').length}`);

});

