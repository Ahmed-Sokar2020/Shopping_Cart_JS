let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let registerBtn = document.querySelector('#submit')
let errorMessage = document.querySelector(".msg");

registerBtn.addEventListener('click', register);

function register(e) {
        e.preventDefault();
        if (username.value === '' || email.value === '' || password.value === '') {
            // errorMessage.style.display = 'block';
            errorMessage.innerHTML = "Fields is Required *";
            errorMessage.style.color = "red";
            username.style.cssText = 'border-style: solid; border-color: red; border-width: 1px'
            email.style.cssText = 'border-style: solid; border-color: red; border-width: 1px'
            password.style.cssText = 'border-style: solid; border-color: red; border-width: 1px'
        } else {
            localStorage.setItem('username', username.value);
            localStorage.setItem('email', email.value);
            localStorage.setItem('password', password.value);
    
            setTimeout(() => {
                window.location = 'login.html'
            }, 1000)
    
        }
    
}