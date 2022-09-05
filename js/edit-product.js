let products = JSON.parse(localStorage.getItem('products')) || products;
let productId = JSON.parse(localStorage.getItem('edit-product'))

let selectedProduct = products.find(item => item.id === productId)

let updateForm = document.getElementById('update-form');
let productName = document.getElementById('product-name');
let productDesc = document.getElementById('product-desc');
let productSizeSelect = document.getElementById('product-size');
let uploadImageFile = document.getElementById('upload-image-file')
let productImage;

// To Fill Edit Form with the Selected Product Information
productName.value = selectedProduct.title;
productDesc.value = selectedProduct.desc;
productSizeSelect.value = selectedProduct.size;
productImage = selectedProduct.imageUrl

// Events
productSizeSelect.addEventListener('change', getProductSizeValue);
updateForm.addEventListener('submit', updateProductFun);
uploadImageFile.addEventListener('change', uploadImage);

// Functions
function getProductSizeValue(e) {
    productSizeSelect.value
}

// Updating New Product
function updateProductFun(e) {
    e.preventDefault();
    
    selectedProduct.title = productName.value;
    selectedProduct.desc = productDesc.value;
    selectedProduct.size = productSizeSelect.value;
    selectedProduct.imageUrl = productImage;

    localStorage.setItem('products', JSON.stringify(products));

    setTimeout(() => {
        window.location = 'index.html'
    }, 500)

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



