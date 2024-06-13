var displayDataDiv = document.getElementById("cartD");

function displayCart() {
    let data = JSON.parse(localStorage.getItem('CART_LIST'));
    console.log(data)
    var productDiv;
    data.forEach(item => {
        productDiv = document.createElement('div');
        productDiv.setAttribute("id", `${item.productId}`)
        // console.log(productDiv.getAttribute("id"))
        // console.log(item)
        var catName = document.createElement('h4')
        catName.innerHTML = item.product.category.name
        productDiv.appendChild(catName)

        var imge = document.createElement('img')
        imge.src = item.product.images[0]
        productDiv.appendChild(imge)

        var titel = document.createElement('p')
        titel.innerHTML = item.product.title
        productDiv.appendChild(titel)

        var pric = document.createElement('b')
        pric.innerHTML = "Price " + item.product.price + " $"
        productDiv.appendChild(pric)

        var inpt = document.createElement('input')
        inpt.value = item.quantity
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
            var price = item.price * inptValu
            pric.innerHTML = "Price " + price + "$"
            totPrice(price)
        }

        productDiv.appendChild(inpt)
        totPrice(item.product.price)
        var rmov = document.createElement('button')
        rmov.setAttribute("id", `${item.productId}`)
        rmov.innerHTML = 'Remove'
        rmov.onclick = function (e) {
            // console.log("remove onClick --> " + e.target.id)
            const id = e.target.getAttribute('id');
            const indx = data.findIndex((item) => item.product.id === parseInt(id));
            console.log(indx);
            data.splice(indx, 1);
            localStorage.setItem('CART_LIST', JSON.stringify(data));
            location.reload();
            // console.log(item + " is removed");
        }
        productDiv.appendChild(rmov);

        displayDataDiv.appendChild(productDiv)
        var line = document.createElement('hr');
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
