const elementsList = document.querySelector("ul#categories");
console.log(`Number of categories: ${elementsList.children.length}`);
[...elementsList.children].forEach((elem) => {
console.log(`Category: ${elem.firstElementChild.textContent}`)
console.log(`Elements: ${elem.lastElementChild.children.length}`)
})





