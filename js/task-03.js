const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('#gallery');
const imagesArray = [];

images.forEach(image => {
    const item = document.createElement('li');
    const imageItem = document.createElement('img');
    imageItem.setAttribute('src', `${image.url}`);
    imageItem.setAttribute('alt', `${image.alt}`);
    item.appendChild(imageItem);
    imagesArray.push(item.outerHTML);
});

const imagesToString= imagesArray.join('');
gallery.insertAdjacentHTML('afterbegin', imagesToString);

const galleryImg = document.querySelectorAll('img');
galleryImg.forEach(item => {
    item.classList.add('gallery-img');
});

const galleryItem = document.querySelectorAll('li');
galleryItem.forEach(item => {
    item.classList.add('gallery-item');
})