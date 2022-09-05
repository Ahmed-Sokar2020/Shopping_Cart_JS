let userNameInput = document.getElementById('change-username');
let userEmailInput = document.getElementById('change-email');
let profileForm = document.getElementById('edit-profile-form');
let uploadUserImage = document.getElementById('upload-user-image');
// let userPhoto = document.querySelector('.user-photo');
let userImage;

// To Fill Edit Form with the User Information
userNameInput.value = localStorage.getItem('username') ;
userEmailInput.value =  localStorage.getItem('email');
// userPhoto.src = "images/apatar.jpg" 

profileForm.addEventListener('submit', editProfileForm)
uploadUserImage.addEventListener('change', uploadImage);

function editProfileForm(e) {
    e.preventDefault();
    localStorage.setItem('username', userNameInput.value);
    localStorage.setItem('email', userEmailInput.value);
    localStorage.setItem('userImage', userImage);

    setTimeout(() => {
        window.location = 'profile.html';
    }, 500);
}


// Uploading Image File

function uploadImage() {
    let file = this.files[0]

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
        userImage = reader.result;
    }
    reader.onerror = function() {
        alert('Error!!')
    }

}