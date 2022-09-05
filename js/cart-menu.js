let cartProductsDivDom = document.querySelector('.cart-products div');
let badgeDom = document.querySelector('.badge');
let shoppingCartIcon = document.querySelector('.shopping-cart');
let cartProductsMenu = document.querySelector('.cart-products');


// [Problem when Refresh the Page]      
// Check if there are Products in Cart in localStorage to show them when Clicking on Cart Icon 
let addedItem = localStorage.getItem('productsInCart') ?
JSON.parse(localStorage.getItem('productsInCart')) : [] ;

if (addedItem) {
addedItem.map((item) => {
    cartProductsDivDom.innerHTML += `
    <span><strong>${item.quantity}</strong></span>
    <span data-i18n="${item.title}">${item.title} </span>
    <br>`;
})
badgeDom.style.display = 'block';
badgeDom.innerHTML = addedItem.length
}

shoppingCartIcon.addEventListener('click', openCartMenu);

// Open Shopping Cart Menu when Clicking on Cart Icon 
function openCartMenu() {
    if (cartProductsDivDom.innerHTML !== '') {
        if (cartProductsMenu.style.display == 'block') {
            cartProductsMenu.style.display = 'none';
        } else {
            cartProductsMenu.style.display = 'block'
        }

    }
}






