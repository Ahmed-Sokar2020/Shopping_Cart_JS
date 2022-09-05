// Define Products
let productsDom = document.querySelector('.products');
let products = productsDB;

// Show Products in Home(index.html) Page
let showProducts;
(showProducts = function (products=[]) {
    let product = products.map((item) => {
        return `
            <div class="product-item" style="border:${item.isMe === 'Y' ? '2px solid green' : '' }">
                    <img src= "${item.imageUrl}" class="product-item-image" alt="image">
                    <div class="product-item-info">
                        <a onclick='saveProductData(${item.id})' data-i18n="${item.title}">${item.title}</a>
                        <p data-i18n="${item.desc}">${item.desc}</p>
                        <span data-i18n="productSize"> Size: </span> 
                        <span data-i18n="${item.size}">${item.size}</span>     
                        ${item.isMe === 'Y' &&
                        "<button id='editBtn'  onclick='editProduct("+item.id+")' data-i18n='editProduct'>Edit Product</button>" || ''}
                    </div>
                    <div class="product-item-actions">
                        <button class="add-to-cart" onclick="addToCart(${item.id})" data-i18n="addToCart">
                        Add To Cart</button>
                        
                        <i class="far fa-heart" style="color:${item.liked === true ? 'red' : ''}" 
                        onclick="addToFavorite(${item.id})"></i>
                    </div>
            </div>
            `
    });
    productsDom.innerHTML = product.join("");
})(JSON.parse(localStorage.getItem('products')) || productsDB)


// add Products To Cart
function addToCart(id) {
    // Check if User Logged or Not
    if(localStorage.getItem('username')) {
        let products = JSON.parse(localStorage.getItem('products')) || productsDB;
        let product =  products.find((item) => item.id === id);
        
        let isProductInCart = addedItem.some((i) => i.id === product.id);

        // Check if Product Exesist in Cart Before
        if (isProductInCart) {
            addedItem.map(item => {
                item.id === product.id ? item.quantity += 1 : item
            }) 
        } else {
            addedItem.push(product)    
        }

        cartProductsDivDom.innerHTML =''
        addedItem.forEach(item => {
            cartProductsDivDom.innerHTML += `
            <span><strong>${item.quantity}</strong></span>
            <span data-i18n="${item.title}">${item.title} </span>
            <br>`;
        })

        // To show the Old Items with the New Item
        // addedItem = [...addedItem, choosenItem];

        // To solve Problem of repeating the Item(product)
        // const uniqueProduct = getUniqueArr(addedItem, 'id');

        localStorage.setItem('productsInCart', JSON.stringify(addedItem));

        let cartProductsItems = document.querySelectorAll('.cart-products div p')
        badgeDom.style.display = 'block';
        badgeDom.innerHTML = cartProductsItems.length
    } else {
        window.location = 'register.html'
    }
    
}


// To solve Problem of repeating the Item(product) when Clicking on addToCart Button more than one time 
// [[To add Products To Cart Filtered by Id]]
function getUniqueArr (arr, filterById) {
    let unique = arr
    .map(item => item[filterById])
    .map((item, i, finalArr) => finalArr.indexOf(item) === i && i)
    .filter(item => arr[item])
    .map(item => arr[item])
    return unique
    
}


// [[Event Keyup on Search Input]]
let input = document.getElementById('search');
input.addEventListener('keyup', function(e) {
    let products = JSON.parse(localStorage.getItem('products')) || productsDB;
    if (e.target.value.trim() === '') {
        showProducts(products)
    } else {      
        search(e.target.value.trim(), products) 
    }
} )


// [[save Product Data in localStorage]]
function saveProductData(id) {
    localStorage.setItem('productId', id);
    window.location = 'product-details.html'
}


// [[Search in Search Input]]
function search (title, productsArray) {
    let item = productsArray.filter((item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1);
    showProducts(item)
}


// ***[[add Favorite Products To Cart]]***

// [Problem when Refresh the Page]      
// Check if there are Favorite Products in localStorage to show them when Clicking on Favorite Icon 
let favoriteItems = localStorage.getItem('favoriteProducts') ?
JSON.parse(localStorage.getItem('favoriteProducts')) : [] ;

function addToFavorite(id) {
    // Check if User Logged or Not
    if(localStorage.getItem('username')) {
        let favoriteProduct =  products.find((item) => item.id === id);
        favoriteProduct.liked = true;

        // To show the Old Items with the New Item
        favoriteItems = [...favoriteItems, favoriteProduct];

        // To solve Problem of repeating the Item(product)
        let uniqueProduct = getUniqueArr(favoriteItems, 'id');

        let stringifyedfavoriteItems = JSON.stringify(uniqueProduct);
        localStorage.setItem('favoriteProducts', stringifyedfavoriteItems); 

        // To make Favorite Icon has Like Color Red then Reshow the Products
        products.map(item => {
            if(item.id === favoriteProduct.id) {
                item.liked == true
            }
        })
        
        localStorage.setItem('products', JSON.stringify(products))
        showProducts(products);
    } else {
        window.location = 'register.html'
    }
    
}


// [[Filter Products by Size]]
let sizeFilter = document.getElementById('size-filter');

sizeFilter.addEventListener('change', getProductsFilterdBySize)

function getProductsFilterdBySize(e) {
    let value = e.target.value;
    console.log(value);
    let products = JSON.parse(localStorage.getItem('products')) || productsDB;

    if (value === 'all') {
        showProducts(products);
    } else {
        products = products.filter(item => item.size === value);
        showProducts(products);
    }
}


// editProduct
function editProduct(id) {
    localStorage.setItem('edit-product', id);
    window.location = 'edit-product.html'
}


