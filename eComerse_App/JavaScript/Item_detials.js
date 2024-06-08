// var d = new Date();
// d.setTime(d.getTime() + (3 * 24 * 60 * 60 * 1000));
// var dte = d.toLocalDateString();
// document.getElementById("tim").innerHTML += dte

function addToCart(){
    open("../Pages/cart.html")
    var amount=document.getElementById("amont").value
    localStorage.setItem("amount",amount)
    localStorage.setItem("Price ",3000)
    
    

}
function getData(){
    document.getElementById("proamont").value=amount
    var proamont=document.getElementById("proamont").value
    var pric=parseInt(localStorage.getItem("Price"))
    var tptal=pric*proamont
    document.getElementById("pric").innerText+=tptal
}