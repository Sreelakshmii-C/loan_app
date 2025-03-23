// Open Modal
function openModal() {
    document.getElementById("authModal").style.display = "flex";
}

// Close Modal
function closeModal() {
    document.getElementById("authModal").style.display = "none";
}

// Toggle Between Login & Register Forms
function toggleForm() {
    let loginForm = document.getElementById("loginForm");
    let registerForm = document.getElementById("registerForm");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    }
}
function registerUser() {
    let email = document.querySelector("#registerForm input[type='email']").value;
    
    // Check if the email already exists (you can replace this with backend validation)
    let existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (existingUsers.includes(email)) {
        alert("You already have an account! Please log in.");
        showLoginForm(); // Redirect to login form
    } else {
        existingUsers.push(email);
        localStorage.setItem("users", JSON.stringify(existingUsers));
        alert("Registration successful! You can now log in.");
        showLoginForm(); // Redirect to login form
    }
}
function registerUser() {
    let email = document.querySelector("#registerForm input[type='email']").value;
    
    // Check if the email already exists
    let existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (existingUsers.includes(email)) {
        alert("You already have an account! Please log in.");
        showLoginForm(); // Redirect to login form
    } else {
        existingUsers.push(email);
        localStorage.setItem("users", JSON.stringify(existingUsers));
        alert("Registration successful! You can now log in.");
        showLoginForm(); // Redirect to login form
    }
}

function loginUser() {
    let email = document.getElementById("loginEmail").value;
    
    // Get registered users from local storage
    let existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (existingUsers.includes(email)) {
        // Show alert and redirect on "OK"
        alert("Login Successful!");
        window.location.href = "index.html";  // Redirect to home page
    } else {
        alert("Account not found! Please register.");
        showRegisterForm(); // Redirect to register form
    }
}

function showLoginForm() {
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}

function showRegisterForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
}

function toggleForm() {
    let loginForm = document.getElementById("loginForm");
    let registerForm = document.getElementById("registerForm");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    }
}
