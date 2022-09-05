let username = document.getElementById('username');
let password = document.getElementById('password');
let loginBtn = document.querySelector('#submit')
let errorMessage = document.querySelector(".msg");

getUsername = localStorage.getItem('username');
getPassword = localStorage.getItem('password');

loginBtn.addEventListener('click', login)

function login(e) {
    e.preventDefault();
    if (username.value === '' || password.value === '') {
        errorMessage.innerHTML = "Fields is Required *";
        errorMessage.style.color = "red";
        username.style.cssText = 'border-style: solid; border-color: red; border-width: 1px'
        password.style.cssText = 'border-style: solid; border-color: red; border-width: 1px'
    } else {
        if (getUsername && 
            getUsername.trim() === username.value.trim() && 
            getPassword && 
            getPassword === password.value) {
            setTimeout(() => {
                window.location = 'index.html'
            }, 1000) 
        } else  {
            // errorMessage.style.display = 'block';
            errorMessage.innerHTML = "Username or Password is Wrong";
            errorMessage.style.color = "red";
        }

    }
}