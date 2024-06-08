let urlParams = new URLSearchParams(window.location.search);
let categoryName, categoryId, searchQuery;

// document elements
let productsTitle = document.querySelector(".titleContainer span:first-child"); // category or search query
let productsSubTitle = document.querySelector(".titleContainer span:last-child"); // items count
let productsGrid = document.querySelector("#products-grid");
let searchBtn = document.getElementById('nav-search-right');
let searchInput = document.getElementById('nav-search-input');

searchBtn.addEventListener('click', function(){
  window.location .assign(`products.html?q=${searchInput.value}`);
})

console.log(urlParams.get('q'));

if (urlParams.has("q")) {
  searchQuery = urlParams.get("q");
  //TODO: load search results
  searchInput.value = searchQuery;
  loadCategoryProducts("title=" + searchQuery, displayProducts, (err)=>console.log(err));
}
if (urlParams.has("categoryName")) {
  categoryName = urlParams.get("categoryName");
  categoryId = urlParams.get("categoryId");
  //TODO: update title with category name
  productsTitle.innerText = categoryName;
  //TODO: load category's products
  loadCategoryProducts("categoryId="+categoryId, displayProducts, (err)=>console.log(err));
}


function loadCategoryProducts(params, resolve, rejected) {
  console.log(`https://api.escuelajs.co/api/v1/products/?${params}`);
  fetch(`https://api.escuelajs.co/api/v1/products/?${params}`)
    .then(response => response.json())
    .then((data) => resolve(data))
    .catch(error => rejected());
}

function displayProducts(data){
  productsSubTitle.innerText = `${data.length} - Products available`;
  data.map((item)=>{
    let productCard = document.createElement('div');
    productCard.classList.add("product-card");

    let productImageElement = document.createElement("img");
    productImageElement.classList.add("product-img");
    productImageElement.setAttribute("src", item.images[0]);
    productCard.append(productImageElement);

    let productContentContainer = document.createElement("div");
    productContentContainer.classList.add("product-card-content");

    let productDescription = document.createElement("span");
    productDescription.classList.add("product-card-description");
    productDescription.innerText = item.title;
    productContentContainer.append(productDescription);

    let productPrice = document.createElement("span");
    productPrice.classList.add("product-card-price");
    productPrice.innerText = item.price + " EGP";
    productContentContainer.append(productPrice);

    let addToCardBtn = document.createElement("div");
    addToCardBtn.innerText = "Add to cart";
    addToCardBtn.classList.add("add-to-cart-button");
    addToCardBtn.classList.add("hover-mask");
    productContentContainer.append(addToCardBtn);

    productCard.append(productContentContainer);
    productCard.style.cursor = "pointer";

    productCard.addEventListener('click', ()=>{
      console.log(item.title);
    })
    productsGrid.append(productCard);

  })
}
