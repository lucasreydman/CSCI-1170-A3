// NOTIFICATION WHEN USER  VISITS INDEX PAGE ONLY
window.onload = function() {
    let path = window.location.pathname;
    if (path.match(/\/index\.html$/)) {
        alert('Welcome to Lucas Reydman\'s Personal Website!');
    }
};

// COLOUR CHANGER BUTTONS FOR INDEX.HTML (DEFAULT + DARK MODE + LIGHT MODE)
document.addEventListener('DOMContentLoaded', () => {
    const defaultButton = document.getElementById('defaultMode');
    const lightButton = document.getElementById('lightMode');
    const darkButton = document.getElementById('darkMode');

    defaultButton.addEventListener('click', () => {
        document.body.className = ''; // RESET TO DEFAULT COLOR SCHEME
    });

    lightButton.addEventListener('click', () => {
        document.body.className = 'light-mode'; // ACTIVATE LIGHT MODE
    });

    darkButton.addEventListener('click', () => {
        document.body.className = 'dark-mode'; // ACTIVATE DARK MODE
    });
});

// CONTACT FORM VALIDATION 
function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    
    let emailPattern = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/; // Email address standard validation
    
    if (!name || !email || !phone || !subject || !message) { // Check if any fields are empty
        alert('ALL FIELDS ARE REQUIRED');
        return false;
    }
    
    if (!emailPattern.test(email)) { // Test Email against standard validation
        alert('PLEASE ENTER A VALID EMAIL ADRESS');
        return false;
    }
    
    if (!phone.match(/^\d{10}$/)) { // Test Phone number against 10 digit validation
        alert('PLEASE ENTER A VALID PHONE NUMBER');
        return false;
    }
    
    alert('FORM SUBMITTED!'); // Success!

}

