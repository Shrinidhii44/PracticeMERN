document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
           
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            let isValid = true;

            
            if (name === "") {
                showError('nameError', "Name is required");
                isValid = false;
            } else {
                hideError('nameError');
            }

           
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                showError('emailError', "Please enter a valid email address");
                isValid = false;
            } else {
                hideError('emailError');
            }

          
            if (message.length < 10) {
                showError('msgError', "Message must be at least 10 characters long");
                isValid = false;
            } else {
                hideError('msgError');
            }

            
            if (isValid) {
                alert(`Thank you, ${name}! Your message has been sent.`);
                contactForm.reset();
            }
        });
    }

    function showError(id, message) {
        const errorElement = document.getElementById(id);
        errorElement.innerText = message;
        errorElement.style.display = 'block';
    }

    function hideError(id) {
        const errorElement = document.getElementById(id);
        errorElement.innerText = "";
    }
});