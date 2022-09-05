// Global Script for User when he is Logged in

let links = document.querySelector('#links');
let userInfo = document.querySelector('#user-info');
let userDom = document.querySelector('#user');
let logOut = document.querySelector('#logout');

let username = localStorage.getItem('username');

// Check if User Exicts to Display his userInfo in Header
if(username) {
    userInfo.style.display = 'flex';
    links.remove();
    userDom.innerHTML = username;  
} 
// Event Click on Logout Button
logOut.addEventListener('click', function() {
    localStorage.clear();
    setTimeout(() => {
        window.location = "register.html"
    }, 1000)
})