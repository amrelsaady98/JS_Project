// var d = new Date();
// d.setTime(d.getTime() + (3 * 24 * 60 * 60 * 1000));
// var dte = d.toLocalDateString();
// document.getElementById("tim").innerHTML += dte

// function addToCart(){
//     open("../Pages/cart.html")
//     var amount=document.getElementById("amont").value
//     localStorage.setItem("amount",amount)
//     localStorage.setItem("Price ",3000)
    
    

// }
// function getData(){
//     document.getElementById("proamont").value=amount
//     var proamont=document.getElementById("proamont").value
//     var pric=parseInt(localStorage.getItem("Price"))
//     var tptal=pric*proamont
//     document.getElementById("pric").innerText+=tptal
// }


// const apiUrl = 'https://fakestoreapi.com/products/';
// const cart = [];


// function getProductDetails(productId) {
//   const xhttp = new XMLHttpRequest();
//   xhttp.open('GET', apiUrl + productId, true);
//   xhttp.onload = function() {
//     if (xhttp.status === 200) {
//       const product = JSON.parse(xhttp.responseText);
//       return product;
//     } else {
//       console.error('Error:', xhttp.statusText);
//     }
//   };
//   xhttp.send();
// }

// function addToCart(productId) {
//   const product = getProductDetails(productId);
//   cart.push(product);
//   localStorage.setItem('cart', JSON.stringify(cart));
//   open('../Pages/cart.html');
// }


// document.getElementById('addcart').addEventListener('click', function(e) {
//   //const productId = this.getAttribute('data-product-id');
//   const productId = this.target.parentNode.dataset.id;
//   addToCart(productId);
// });

// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => {
//     const productList = document.getElementById('prodct');
//     data.forEach(product => {
//       const productDiv = document.createElement('div');
//       productDiv.innerHTML = `
//         <img src="${product.image}" alt="${product.title}">
//         <h2 class="text">${product.title}</h2>
//         <p>Price: ${product.price}</p>
//         <button data-product-id="${product.id}" id="addcart">Add to Cart</button>
//       `;
//       productList.appendChild(productDiv);
//     });
//   })
//   .catch(error => console.error('Error:', error));