let products = JSON.parse(localStorage.getItem('products')) || productsDB;
let productId = localStorage.getItem('productId');
let itemDom = document.querySelector('.product-details');

let productDetails = products.find(item => item.id == productId);

itemDom.innerHTML = `
    <img src="${productDetails.imageUrl}" alt="" >
    <h2 data-i18n="${productDetails.title}">${productDetails.title}</h2>
    <p data-i18n="${productDetails.desc}">${productDetails.desc}</p>
    <span data-i18n="productSize"> Size </span> 
    <span data-i18n="${productDetails.size}">${productDetails.size}</span> <br>
    <span data-i18n="quantity">Quantity</span>
    <span><strong>${productDetails.quantity}</strong></span> <br>
    <button class='edit' onclick='editProduct(${productId})' data-i18n='edit'>Edit</button>
    `

// editProduct
function editProduct(id) {
    localStorage.setItem('edit-product', id);
    window.location = 'edit-product.html'
}





