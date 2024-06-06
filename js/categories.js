//https://fakestoreapi.com/products

function displayProducts(){
    var xrequst =new XMLHttpRequest()
    xrequst.open("GET","https://api.escuelajs.co/api/v1/categories/",true)
    xrequst.send()

    console.log(xrequst)

    xrequst.onreadystatechange=function (){
        if (xrequst.status==200 && xrequst.readyState==4) {
            var rqstData=JSON.parse(xrequst.responseText)
            console.log(rqstData)
            
            var proImage = document.createElement("img")
            var titel = document.createElement("b")
            var description = document.createElement("p")
            var proPrice=document.createElement("b")
    
            for (var usr in rqstData.name) {

                console.log(usr)
                

            }
            
        } else {
            console.log("fiald")
            
        }
    }
}

displayProducts()
