var cart = document.querySelector("#cart");
var closee = document.querySelector("#close");
var cartContent = document.querySelector("#cartContent");
var totalPriceContaier = document.querySelector("#totalPriceContaier");
var total = 0;
var totalPrice = document.querySelector("#totalprice");

var btn1 = document.querySelector("#btnAdd1");
var btn2 = document.querySelector("#btnAdd2");
var btn3 = document.querySelector("#btnAdd3");
var btn4 = document.querySelector("#btnAdd4");
var btn5 = document.querySelector("#btnAdd5");
var btn6 = document.querySelector("#btnAdd6");
var btn7 = document.querySelector("#btnAdd7");
var btn8 = document.querySelector("#btnAdd8");
var btn9 = document.querySelector("#btnAdd9");
var btn10 = document.querySelector("#btnAdd10");
var btn11 = document.querySelector("#btnAdd11");
var btn12 = document.querySelector("#btnAdd12");


var product1 = document.querySelector("#product1");
var product2 = document.querySelector("#product2");
var product3 = document.querySelector("#product3");
var product4 = document.querySelector("#product4");
var product5 = document.querySelector("#product5");
var product6 = document.querySelector("#product6");
var product7 = document.querySelector("#product7");
var product8 = document.querySelector("#product8");
var product9 = document.querySelector("#product9");
var product10 = document.querySelector("#product10");
var product11 = document.querySelector("#product11");
var product12 = document.querySelector("#product12");
var products = document.querySelector("#products");



cart.onclick = function(){
    cartContent.style.display = "block"
}
closee.onclick = function(){
    cartContent.style.display = "none"
}





btn1.onclick = function (){
    products.innerHTML += product1.textContent +"  +  ";
    total += Number(product1.getAttribute("price"));
}
btn2.onclick = function (){
    products.innerHTML += product2.textContent +"  +  ";
    total += Number(product2.getAttribute("price"));
}
btn3.onclick = function (){
    products.innerHTML += product3.textContent +"  +  ";
    total += Number(product3.getAttribute("price"));
}
btn4.onclick = function (){
    products.innerHTML += product4.textContent +"  +  ";
    total += Number(product4.getAttribute("price"));
}
btn5.onclick = function (){
    products.innerHTML += product5.textContent +"  +  ";
    total += Number(product5.getAttribute("price"));
}
btn6.onclick = function (){
    products.innerHTML += product6.textContent +"  +  ";
    total += Number(product6.getAttribute("price"));
}
btn7.onclick = function (){
    products.innerHTML += product7.textContent +"  +  ";
    total += Number(product7.getAttribute("price"));
}
btn8.onclick = function (){
    products.innerHTML += product8.textContent +"  +  ";
    total += Number(product8.getAttribute("price"));
}
btn9.onclick = function (){
    products.innerHTML += product9.textContent +"  +  ";
    total += Number(product9.getAttribute("price"));
}
btn10.onclick = function (){
    products.innerHTML += product10.textContent +"  +  ";
    total += Number(product10.getAttribute("price"));
}
btn11.onclick = function (){
    products.innerHTML += product11.textContent +"  +  ";
    total += Number(product11.getAttribute("price"));
}
btn12.onclick = function (){
    products.innerHTML += product12.textContent +"  +  ";
    total += Number(product12.getAttribute("price"));
}



totalPrice.onclick = function(){
    totalPriceContaier.innerHTML = total +" $"
}



