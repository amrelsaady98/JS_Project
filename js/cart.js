//Function to display data on cart
var displayDataDiv = document.getElementById("cartD");
function displayCart() {
    let data = JSON.parse(localStorage.getItem('CART_LIST'));
    console.log(data)
    var productDiv;
    data.forEach(product => {
        productDiv = document.createElement('div');
        productDiv.setAttribute("id", `${product.id}`)
        console.log(productDiv.getAttribute("id"))
        console.log(product)
        var catName = document.createElement('h4')
        catName.innerHTML = product.category
        productDiv.appendChild(catName)

        var imge = document.createElement('img')
        imge.src = product.image
        productDiv.appendChild(imge)

        var titel = document.createElement('p')
        titel.innerHTML = product.title
        productDiv.appendChild(titel)

        var pric = document.createElement('b')
        pric.innerHTML = "Price " + product.price + " $"
        productDiv.appendChild(pric)

        var inpt = document.createElement('input')
        inpt.value = product.quantity
        inpt.placeholder = 'amount:1'
        inpt.style.width = '100px'
        inpt.style.height = '30px'
        inpt.style.borderRadius = '10px'
        inpt.style.padding = '10px'
        inpt.style.fontSize = '20px'
        inpt.style.textAlign = 'center'
        inpt.style.margin = '10px'
        inpt.oninput = function () {
            var inptValu = this.value
            var price = product.price * inptValu
            pric.innerHTML = "Price " + price + "$"
            totPrice(price)
        }

        productDiv.appendChild(inpt)
        totPrice(product.price)
        var rmov = document.createElement('button')
        rmov.setAttribute("id", `${product.id}`)
        rmov.innerHTML = 'Remove'
        rmov.onclick = function (e) {
            const id = e.target.getAttribute('id');
            const indx = data.findIndex((product) => product.id === parseInt(id));
            console.log(indx)
            data.splice(indx, 1)
            localStorage.setItem('cart', JSON.stringify(data))
            location.reload()
            console.log(product + " is removed")
        }
        productDiv.appendChild(rmov)

        displayDataDiv.appendChild(productDiv)
        var line = document.createElement('hr')
        displayDataDiv.appendChild(line)
    })

}


//function to calc total price
var valu = 0.0;
function totPrice(price) {
    var total = document.getElementById('tPric')

    valu += price;
    total.innerHTML = "Total Price: " + valu + " $"

}

//function to clear cart
document.getElementById("clr").addEventListener("click", function () {
    localStorage.clear()
    location.reload()
})




var d = new Date();
d.setTime(d.getTime() + (3 * 24 * 60 * 60 * 1000));
var dte = d.toUTCString();
document.getElementById("tim").innerHTML += dte
