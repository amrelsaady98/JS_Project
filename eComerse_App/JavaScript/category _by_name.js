console.log(window.location.search)

let catName = new URLSearchParams(window.location.search);
console.log(catName.get("categoryName"))
getProductData(catName.get("categoryName"))
function getProductData(categoryName) {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', "https://fakestoreapi.com/products/category/" + categoryName, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            const data = JSON.parse(xhttp.responseText);
            console.log(data)
            const productList = document.getElementById('prodct');
            var productDiv;
            var cartbutton;
            data.forEach(product => {
                productDiv = document.createElement('div');
                productDiv.setAttribute("id",`${product.id}`)
                console.log(productDiv.getAttribute("id"))
                cartbutton = document.createElement('button');
                cartbutton.setAttribute("id",product.id)
                
                var imge=document.createElement('img')
                imge.src=product.image
                productDiv.appendChild(imge)

                var titel=document.createElement('p')
                titel.innerHTML=product.title
                titel.setAttribute("class","txt")
                productDiv.appendChild(titel)

                var pric=document.createElement('b')
                pric.innerHTML="Price "+product.price+" $"
                productDiv.appendChild(pric)

                
              cartbutton.onclick = function (e) {
                return function () {
                  const productId = e
                  addToCart(productId);
                  //console.log(productId)
                }
              }(product.id)
              productDiv.appendChild(cartbutton)
              productList.appendChild(productDiv);
                
            });
            
        } else {
            console.error("cant get data");
        }
    };

}

const apiUrl = 'https://fakestoreapi.com/products/';
var storedData = [];


function getProductDetails(productId) {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'https://fakestoreapi.com/products/'+productId, true);
  xhttp.send();
  console.log(productId)
  xhttp.onreadystatechange = function() {
    if (xhttp.status === 200) {
      const product = JSON.parse(xhttp.responseText);
      //console.log(product)
      //cart.push(product);
      const cart={
        id:product.id,
        title:product.title,
        price:product.price,
        image:product.image,
        category:product.category,
        quantity:1,

      }
      //const storedData = JSON.parse(localStorage.getItem('cart'));
       storedData.push(cart);
      localStorage.setItem('cart', JSON.stringify(storedData));
      //return product
      // localStorage.setItem('cart', JSON.stringify(cart));
      // open('../Pages/cart.html');

    } else {
      console.error('Error:cant get data');
    }
  };
  
}

function addToCart(productId) {
    const product = getProductDetails(productId);
    
    //localStorage.setItem('cart', JSON.stringify(cart));
    //open('../Pages/cart.html');
  }
  

// document.getElementById("addcart").addEventListener('click', function() {
//     const productId = this.getAttribute('data-product-id');
//     //const productId = target.parentNode.dataset.id;
//     addToCart(productId);
//   });

// function addToCart(productId) {
//     const product = getProductDetails(productId);
    
// }


  