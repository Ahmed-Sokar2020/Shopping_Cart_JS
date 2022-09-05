let productsDom = document.querySelector('.products');
let noProducts = document.querySelector('.noproducts');
let products = JSON.parse(localStorage.getItem('products'));

// Show Products in Carts Page(user-cart.html) 
function showProductsInCarts(allProducts = []) {

    let products = JSON.parse(localStorage.getItem('productsInCart')) || allProducts;
    // Check if there is no Products in Carts
    if (products.length === 0) {
        noProducts.innerHTML = 'There is No Products in Your Cart!!'
    }

    let product = products.map((item) => {
        return `
            <div class="product-item">
                    <img src= "${item.imageUrl}" class="product-item-image" alt="image">
                    <div class="product-item-info">
                        <h2 data-i18n="${item.title}">${item.title}</h2>
                        <p data-i18n="${item.desc}">${item.desc}</p>
                        <span data-i18n="productSize"> Size </span> 
                        <span data-i18n="${item.size}">${item.size}</span> <br>
                        <span data-i18n="quantity">Quantity</span>
                        <span><strong>${item.quantity}</strong></span>
                    </div>
                    <div class="product-item-actions">
                        <button class="add-to-cart" onclick="removeItemFromCart(${item.id})"
                        style='background-color:red; border:none' data-i18n ="delete" >Delete</button>
                    </div>
            </div>
            `
    });
    productsDom.innerHTML = product.join("");
    // badgeDom.style.display = 'block';
    // badgeDom.innerHTML = products.length    

}
showProductsInCarts()


// Remove Item From Cart
function removeItemFromCart(id) {
    let productsInCart = JSON.parse(localStorage.getItem('productsInCart'));
    if (productsInCart) {
        let filteredItem =  productsInCart.filter((item) => item.id !== id);
        localStorage.setItem('productsInCart', JSON.stringify(filteredItem))
        showProductsInCarts(filteredItem);
    } 

}


