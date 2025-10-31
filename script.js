// AdoptMe Website - Interactive Features

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add hover effect to pet cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Form validation (if contact form is added later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('contact-status');

    if (!form) {
        console.log('AdoptMe website loaded successfully!');
        return;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        status.textContent = '';

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            status.textContent = 'Please fill out all fields.';
            status.style.color = '#c0392b';
            return;
        }

        if (!validateEmail(email)) {
            status.textContent = 'Please enter a valid email address.';
            status.style.color = '#c0392b';
            return;
        }

        // Simulate successful submission (no backend)
        status.textContent = 'Thanks! Your message has been sent.';
        status.style.color = '#2d7a46';
        form.reset();
    });
});

console.log('AdoptMe website loaded successfully!');

