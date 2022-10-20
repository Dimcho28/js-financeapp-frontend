const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const registerBtn = document.getElementById("registerBtn");
const loginBtn = document.getElementById("loginBtn");



function register () {
    registerForm.style.display = "block";
    loginForm.style.display = "none";
    
    activityForBtn(registerBtn);
    inactivityForBtn(loginBtn);
}

function login () {
    registerForm.style.display = "none";
    loginForm.style.display = "block";

    activityForBtn(loginBtn);
    inactivityForBtn(registerBtn);  
}

function activityForBtn (button) {
    button.classList.add("active-btn");
    button.classList.remove("inactive-btn");
}

function inactivityForBtn (button) {
    button.classList.add("inactive-btn");
    button.classList.remove("active-btn");
}