// console.log('hello from product.html')
let categoriesLinksContainer = document.querySelector('#nav-bottom-left');
let categoriesCardsContainer = document.querySelector('.categoriesCardsContainer');

function loadCategoriesLinks(){
  fetch('https://api.escuelajs.co/api/v1/categories')
    .then(response => response.json())
    .then((data)=>addCategories(data))
    .catch(error => console.log('Error:', error));
}

function addCategories(categories=[]){
  for (let i = 0; i < 10; i++) {
    let newCategory = document.createElement('a');
    // console.log(categories[i])
    newCategory.classList.add('nav-a');
    newCategory.innerText = categories[i].name;
    newCategory.setAttribute("href", "../pages/products.html?categoryName=" + categories[i].name + "&categoryId=" + categories[i].id);
    categoriesLinksContainer.append(newCategory);

    /*let newCategoryCard = document.createElement('div');
    let newCategoryCardImage = document.createElement('img');
    let newCategoryCardText = document.createElement('span');
    let newCategoryCardShowMore = document.createElement('span');

    newCategoryCard.classList.add('categoryCard');
    newCategoryCardImage.setAttribute('src', categories[i].image);
    newCategoryCardText.innerText = categories[i].name;
    newCategoryCardShowMore.innerText = "See more";

    newCategoryCard.append(newCategoryCardText, newCategoryCardImage, newCategoryCardShowMore);
    newCategoryCard.addEventListener('click', ()=>{
      window.location.assign( "./pages/products.html?categoryName=" + categories[i].name + "&categoryId=" + categories[i].id);
    })

    categoriesCardsContainer.append(newCategoryCard);*/

  }

}

loadCategoriesLinks();

// search feature
let searchBtn = document.getElementById('nav-search-right');
let searchInput = document.getElementById('nav-search-input');

searchBtn.addEventListener('click', function(){
  window.location .assign(`../pages/products.html?q=${searchInput.value}`);
});
searchInput.addEventListener("keypress",
  (eventHandler) => {
    if (eventHandler.key === "Enter") {
      window.location.assign(`./pages/products.html?q=${searchInput.value}`);
    }
  });
