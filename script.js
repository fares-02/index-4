// console.log("test")
let btnPlus = document.querySelectorAll(".Plus-btn")
let btnMinus = document.querySelectorAll(".Minus-btn")
let qte = document.querySelectorAll(".qte")
let btnDelete = document.querySelectorAll(".Delete")
let card = document.querySelectorAll(".card")
let btnLike = document.querySelectorAll(".Like")
let heart = document.querySelectorAll(".fa-heart")
let total = document.querySelector(".total")
let price = document.querySelectorAll(".price")
console.log(price)
// *******************************************************
// plus and minus buttons
for (let i = 0; i < qte.length; i++) {
    btnPlus[i].addEventListener("click", function () {
       qte[i].innerHTML++
       totale()     
    })
}
for (let i = 0; i < qte.length; i++) {
    btnMinus[i].addEventListener("click", function () {
        if (qte[i].innerHTML>0) {
            qte[i].innerHTML--
        }
        totale()
    })
}
// delete button
for (let i = 0; i < btnDelete.length; i++) {
    btnDelete[i].addEventListener("click", function () {
        card[i].remove()
        totale()
    })   
}
// like button
for (let i = 0; i < btnLike.length; i++) {
    btnLike[i].addEventListener("click", function () {
        if (heart[i].style.color==="red") {
            heart[i].style.color="black"
        } else {
            heart[i].style.color="red"
        }
    })
}
// total
function totale() {
    let price = document.querySelectorAll(".price")
    let qte = document.querySelectorAll(".qte")

    let somme=0
for (let i = 0; i < price.length; i++) {
    somme=somme+price[i].innerHTML*qte[i].innerHTML
}    
total.innerHTML=somme
}
