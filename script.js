const categories = document.querySelectorAll('#categories .item');
console.log(`У списку ${categories.length} категорії.`);

categories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const items = category.querySelectorAll('ul li').length;
  
  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${items}`);
});

const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const ingredientsList = document.querySelector('#ingredients');
const fragment = document.createDocumentFragment();

ingredients.forEach(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  fragment.appendChild(li);
});

ingredientsList.appendChild(fragment);

const images = [
  {
    url: 'https://tse2.mm.bing.net/th/id/OIP.mz-e7Erb4U9MJFKL3p2q6wHaD8?rs=1&pid=ImgDetMain&o=7&rm=3',
    alt: 'bosnov',
  },
  {
    url: 'https://tse2.mm.bing.net/th/id/OIP._W7Jq7NmVj45EKwQm_-7FwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
    alt: 'shreck',
  },
  {
    url: 'https://tse2.mm.bing.net/th/id/OIF.RbZ3BbuFkdl6IfVeoLH1wA?rs=1&pid=ImgDetMain&o=7&rm=3',
    alt: 'steve aura',
  },
];

const galleryList = document.querySelector('#gallery');

const galleryMarkup = images.map(image => {
  return `<li><img src="${image.url}" alt="${image.alt}" width="300"></li>`;
}).join('');

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector('#value');

let counterValue = 0;

function decrement() {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  valueSpan.textContent = counterValue;
}

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
