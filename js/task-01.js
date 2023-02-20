const menuItemsByTagClass = document.querySelectorAll("li.item");
console.log(`Number of categories: ${menuItemsByTagClass.length}`);

for (const item of menuItemsByTagClass) {
  const itemTitle = item.querySelector("h2");
  const sortItemByTag = item.querySelectorAll("li");
  console.log("\n");
  console.log(`Category: ${itemTitle.textContent}`);
  console.log(`Elements: ${sortItemByTag.length}`);
}
