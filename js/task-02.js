const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const list = document.querySelector('#ingredients');
const items = [];

ingredients.forEach(ingredient => {
    const item = document.createElement('li');
    item.textContent = ingredient;
    items.push(item);    
});

list.append(...items);
