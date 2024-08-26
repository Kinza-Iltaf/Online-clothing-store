// Get references to elements
const accountIcon = document.getElementById('accountIcon');
const loginForm = document.getElementById('login-form');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');

const createAccountLink = document.getElementById('create-account-link');
const createAccountContainer = document.getElementById('create-account-container');
const resetPasswordLink = document.getElementById('reset-password-link');
const resetPasswordForm = document.getElementById('reset-password-form');
const resetCloseBtn = document.getElementById('reset-close-btn');
const createCloseBtn = document.getElementById('create-close-btn'); // New close button reference

// Function to toggle login form visibility
function toggleLoginForm() {
    loginForm.classList.toggle('show');
    overlay.classList.toggle('show');
}

// Event listener for account icon click
accountIcon.addEventListener('click', toggleLoginForm);

// Event listener for close button click in login form
closeBtn.addEventListener('click', toggleLoginForm);

// Event listener for create account link click
createAccountLink.addEventListener('click', function(e) {
    e.preventDefault();
    loginForm.classList.remove('show');
    createAccountContainer.style.display = 'block';
});

// Event listener for reset password link click
resetPasswordLink.addEventListener('click', function(e) {
    e.preventDefault();
    loginForm.classList.remove('show');
    resetPasswordForm.classList.add('show');
});

// Event listener for close button in reset password form
resetCloseBtn.addEventListener('click', function() {
    resetPasswordForm.classList.remove('show');
    loginForm.classList.add('show');
});

// Event listener for close button in create account form
createCloseBtn.addEventListener('click', function() {
    createAccountContainer.style.display = 'none';
    loginForm.classList.add('show');
});


// Event listener for account icon click
accountIcon.addEventListener('click', toggleLoginForm);

// Event listener for close button click
closeBtn.addEventListener('click', toggleLoginForm);