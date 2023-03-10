const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("#ingredients");

const itemsFromIngredients = (ingredients) => {
  return ingredients.map((ingredient) => {
    const newItem = document.createElement("li");
    newItem.textContent = ingredient;
    newItem.classList.add("item");
    return newItem;
  });
};

listIngredients.append(...itemsFromIngredients(ingredients));
