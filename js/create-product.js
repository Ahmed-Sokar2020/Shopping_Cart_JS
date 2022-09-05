let createForm = document.getElementById('create-form');
let productName = document.getElementById('product-name');
let productDesc = document.getElementById('product-desc');
let productSizeSelect = document.getElementById('product-size');
let uploadImageFile = document.getElementById('upload-image-file')
// let productSizeValue;
let productImage;

// Events
productSizeSelect.addEventListener('change', getProductSizeValue);
createForm.addEventListener('submit', createProductFun);
uploadImageFile.addEventListener('change', uploadImage);

// This Feature to Prevent the Input to Copy to it
productName.addEventListener('paste', (e) => {
    e.preventDefault()
})

// Functions
function getProductSizeValue(e) {
    // productSizeValue = e.target.value
    productSizeSelect.value
}

// Creating New Product
function createProductFun(e) {
    e.preventDefault();
    let allProducts = JSON.parse(localStorage.getItem('products')) || productsDB;
    let productNameValue = productName.value;
    let productDescValue = productDesc.value;
    let productSizeValue = productSizeSelect.value;

    if (productNameValue && productDescValue) {
        let obj= {
            id: allProducts? allProducts.length + 1 : 1,
            imageUrl: productImage,
            title: productNameValue,
            desc: productDescValue,
            size: productSizeValue,
            quantity: 1,
            isMe: 'Y'
        }
    
        let newProducts = allProducts? [...allProducts, obj] : [obj];
        localStorage.setItem('products', JSON.stringify(newProducts));
    
        // productName.value = '';
        // productDesc.value = '';
        // productSizeSelect.value = ''

        setTimeout(() => {
            window.location = 'index.html'
        }, 500)

    } else {
        alert('Data Is Required!!')
        productName.focus()
    }

}

// Uploading Image File

function uploadImage() {
    let file = this.files[0]
    // console.log(file);

    let types = ['image/jpeg', 'image/png'];
    if(types.indexOf(file.type) === -1) {
        alert('Type Not Supported');
        return;
    }

    if(file.size > 2 * 1024 * 1024) {
        alert('Size Cant Exceed 2MG');
        return;
    }

    // productImage = URL.createObjectURL(file);
    // console.log('IMAGE:', productImage);
    getImageBase64(file);
}

function getImageBase64(file) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
        productImage = reader.result;
    }
    reader.onerror = function() {
        alert('Error!!')
    }

}



