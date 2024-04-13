const idCategories = document.querySelector('#categories');
const categories = idCategories.querySelectorAll('.item');
console.log('Number of categories:', categories.length);
categories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const itemsCount = category.querySelectorAll('li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Items: ${itemsCount}`);
});
