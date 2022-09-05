let productsDom = document.querySelector('.products');
let noProducts = document.querySelector('.noproducts');

// Show Products in Products Page(myProducts.html)
function showMyProducts(allProducts = []) {

    let products = JSON.parse(localStorage.getItem('products')) || allProducts;

    let myProducts = products.filter(item => item.isMe === 'Y');
    console.log(myProducts);
    // Check if there is no Products 
    if (myProducts.length === 0) {
        noProducts.innerHTML = 'There is No Products!!'
    }
    
    let product = myProducts.map((item) => {
        return `
        <div class="product-item" style="border:${item.isMe === 'Y' ? '2px solid green' : '' }">
            <img src= "${item.imageUrl}" class="product-item-image" alt="image">
            <div class="product-item-info">
                <a onclick='saveProductData(${item.id})' data-i18n="${item.title}">${item.title}</a>
                <p data-i18n="${item.desc}">${item.desc}</p>
                <span data-i18n="productSize"> Size </span> 
                <span data-i18n="${item.size}">${item.size}</span> 
                <div class="actions">
                    <button class="edit-product" onclick='editProduct(${item.id})' data-i18n='edit'>Edit
                    </button>
                    
                    <button class="delete-product" onclick='deleteProduct(${item.id})' data-i18n='delete'>Delete
                    </button>
                </div>
            </div>    
        </div>
        `
    });
    productsDom.innerHTML = product.join("");
    
} 

showMyProducts()


// editProduct
function editProduct(id) {
    localStorage.setItem('edit-product', id);
    window.location = 'edit-product.html'
}


// Remove Product From My Product Page
function deleteProduct(id) {
    let products = JSON.parse(localStorage.getItem('products')) ;
    if (products) {
        let filteredItem =  products.filter((item) => item.id !== id);
        localStorage.setItem('products', JSON.stringify(filteredItem))
        showMyProducts(filteredItem);
    } 

}































// Show Products in Home(myProducts.html) Page
// let showProducts;
// (showProducts = function (products=[]) {
    
//     let myProducts = products.filter(item => item.isMe === 'Y');
//     if(myProducts.length !== 0) {
//         let product = myProducts.map((item) => {
//             return `
                // <div class="product-item" style="border:${item.isMe === 'Y' ? '2px solid green' : '' }">
                //         <img src= "${item.imageUrl}" class="product-item-image" alt="image">
                //         <div class="product-item-info">
                //             <a onclick='saveProductData(${item.id})'>${item.title}</a>
                //             <p>${item.desc}</p>
                //             <span>Size: ${item.size}</span>
                //              <div>
                //                 <button class="edit-product" onclick='editProduct(${item.id})'>Edit
                //                 </button>
                                
                //                 <button class="delete-product" onclick='deleteProduct(${item.id})'>Delete
                //                 </button>
                //             </div>
                //         </div>    
                // </div>
                // `
//         });

//         productsDom.innerHTML = product.join("");
//     } else {
//         noProducts.innerHTML = 'No Products!!'
//     }
// })(JSON.parse(localStorage.getItem('products')) || productsDB)



// // editProduct
// function editProduct(id) {
//     localStorage.setItem('edit-product', id);
//     window.location = 'edit-product.html'
// }


// function deleteProduct(id) {
//     let products = JSON.parse(localStorage.getItem('products')) || productsDB
//     let myProducts = products.filter(item => item.isMe === 'Y');
//     let filteredProduct = myProducts.filter(item => item.id !== id );

//     let selectedProduct = myProducts.find(item => item.id === id);
//     products = products.filter(item => item.id !== selectedProduct.id)
//     console.log(products);
//     localStorage.setItem('products', JSON.stringify(products))
//     showProducts(filteredProduct);

// }




