let productsDom = document.querySelector('.products');
let noProducts = document.querySelector('.noproducts');
let products = JSON.parse(localStorage.getItem('products'));

// Show Products in Carts(cart-products.html) Page
function showFavoriteProducts(allProducts = []) {

    let products = JSON.parse(localStorage.getItem('favoriteProducts')) || allProducts;
    // Check if there is no Products in Carts
    if (products.length === 0) {
        noProducts.innerHTML = 'There is No Favorite Products!!'
    }
    
    let product = products.map((item) => {
        return `
            <div class="product-item">
                    <img src= "${item.imageUrl}" class="product-item-image" alt="image">
                    <div class="product-item-info">
                        <h2 data-i18n="${item.title}">${item.title}</h2>
                        <p data-i18n="${item.desc}">${item.desc}</p>
                        <span data-i18n="productSize"> Size </span> 
                        <span data-i18n="${item.size}">${item.size}</span><br>
                        <span>Quantity: ${item.quantity}</span>
                    </div>
                    <div class="product-item-actions">
                        <button class="add-to-cart" onclick="removeItemFromFavorites(${item.id})"
                        style='background-color:red; border:none'>Remove</button>
                    </div>
            </div>
            `
    });
    productsDom.innerHTML = product.join("");   

}
showFavoriteProducts()

// Remove Item From Cart
function removeItemFromFavorites(id) {
    let productsInFavorites = JSON.parse(localStorage.getItem('favoriteProducts'));
    if (productsInFavorites) {
        let filteredItem =  productsInFavorites.filter((item) => item.id !== id);
        localStorage.setItem('favoriteProducts', JSON.stringify(filteredItem))
        showFavoriteProducts(filteredItem);
    } 

}


