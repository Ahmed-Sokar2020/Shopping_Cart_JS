let products = JSON.parse(localStorage.getItem('products')) || productsDB;
let myProduct = products.filter(item => item.isMe === 'Y' );
let productsNumber1 = document.querySelector('#products-number1');
let productsNumber2 = document.querySelector('#products-number2 strong');

let usernameDom = document.getElementById('username');
let userEmailDom = document.getElementById('email');

usernameDom.innerHTML = localStorage.getItem('username') ;;
userEmailDom.innerHTML =  localStorage.getItem('email');

if(myProduct.length !== 0) {
    productsNumber2.innerHTML = myProduct.length;

} else {
    productsNumber1.remove();
    productsNumber2.remove();
}