document.getElementById('loginBtn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(email && password) {
        console.log("Authenticating:", email);
        // Add your logic to send this to your backend here
    } else {
        alert("Please fill in all fields.");
    }
});
