// console.log('hello from index.html')
let categoriesLinksContainer = document.querySelector('#nav-bottom-left');
let categoriesCardsContainer = document.querySelector('.categoriesCardsContainer');

function loadCategoriesLinks(){
  fetch('https://api.escuelajs.co/api/v1/categories')
    .then(response => response.json())
    .then((data)=>addCategories(data))
    .catch(error => console.error('Error:', error));
}

function addCategories(categories=[]){
  for (let i = 0; i < 10; i++) {
    let newCategory = document.createElement('a');
    newCategory.classList.add('nav-a');
    newCategory.innerText = categories[i].name;
    newCategory.setAttribute("href", "./pages/products.html");
    categoriesLinksContainer.append(newCategory);

    let newCategoryCard = document.createElement('div');
    let newCategoryCardImage = document.createElement('img');
    let newCategoryCardText = document.createElement('span');
    let newCategoryCardShowMore = document.createElement('span');

    newCategoryCard.classList.add('categoryCard');
    newCategoryCardImage.setAttribute('src', categories[i].image);
    newCategoryCardText.innerText = categories[i].name;
    newCategoryCardShowMore.innerText = "See more";

    newCategoryCard.append(newCategoryCardText, newCategoryCardImage, newCategoryCardShowMore);
    newCategoryCard.addEventListener('click', ()=>{
      window.location = "./pages/products.html";
    })

    categoriesCardsContainer.append(newCategoryCard);

  }

}

loadCategoriesLinks();
