//Focus on FIRST principles for efficient development, comment MORE for readibility + maintainability


// Login & Register
const needAccount = document.getElementById("btn-reg");
const registerForm = document.getElementById("register");
const loginForm = document.getElementById("login-form"); 

needAccount.addEventListener("click", function() {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
});

