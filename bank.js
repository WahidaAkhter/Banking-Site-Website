document.getElementById('login-submit').addEventListener('click', function () {
    console.log('button clicked');
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    window.location.href = 'banking.html';


})