const categories = document.querySelectorAll('.item');
console.log(`В списке ${categories.length} категории`);

categories.forEach(category=> {
    const title = category.querySelector('h2')
    console.log(`Категория: ${title.textContent}`);

    const elements = category.querySelectorAll('li');
    console.log(`Количество элементов: ${elements.length}`);
});
