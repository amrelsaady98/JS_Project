//TODO: implement addToCart function
function addToCart(product, quantity= 1) {
  let cartList;
  let savedData = localStorage.getItem('CART_LIST');
  console.log(savedData);
  if (localStorage.getItem('CART_LIST') == null) {
    console.log("true")
      cartList = [];
  } else {
    cartList = JSON.parse(localStorage.getItem('CART_LIST'));
  }
  console.log(cartList);
  cartList.push({
    productId: product.id,
    product: product,
    quantity: 1
  });
  console.log(cartList);
  localStorage.setItem('CART_LIST', JSON.stringify(cartList));
}
