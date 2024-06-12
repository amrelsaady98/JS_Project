//https://fakestoreapi.com/products

function displayProducts() {
    var xrequst = new XMLHttpRequest()
    xrequst.open("GET", "https://fakestoreapi.com/products/", true)
    xrequst.send()

    console.log(xrequst)

    xrequst.onreadystatechange = function () {
        if (xrequst.status == 200 && xrequst.readyState == 4) {
            const data = JSON.parse(xrequst.responseText);
            console.log(data)
            const productList = document.getElementById('prodct');
            data.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <b>${product.title}</b>
        <p>Price: ${product.price}</p>
      `;
                productList.appendChild(productDiv);
            });

        } else {
            console.log("fiald")

        }
    }
}

displayProducts()

document.getElementById('addcart').addEventListener('click', function() {
    const productId = this.getAttribute('data-product-id');
    addToCart(productId);
  });

  function addToCart(productId) {
    const product = getProductDetails(productId);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = '../Pages/cart.html';
  }
  
