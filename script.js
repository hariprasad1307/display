function login() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    if (username === "example" && password === "password") {
        alert("Login successful!");
    } else {
        alert("Login failed. Please check your username and password.");
    }
}

function signup() {
    var username = document.getElementById("signupUsername").value;
    var password = document.getElementById("signupPassword").value;

    alert("Account created successfully!");
}

document.getElementById("togglePassword").addEventListener("click", function() {
    togglePassword("loginPassword");
});

document.getElementById("toggleSignupPassword").addEventListener("click", function() {
    togglePassword("signupPassword");
});

function togglePassword(passwordFieldId) {
    var passwordField = document.getElementById(passwordFieldId);
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
    
}
