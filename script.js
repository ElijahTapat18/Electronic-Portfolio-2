document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('show');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-links') && !event.target.closest('.menu-toggle')) {
            if (navLinks.classList.contains('show')) {
                navLinks.classList.remove('show');
            }
        }
    });
    
    // Form submission (prevent default for demo)
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Validate form (simple validation)
            if (!name || !email || !subject || !message) {
                alert('Please fill out all fields');
                return;
            }
            
            // In a real application, you would send this data to a server
            console.log('Form submitted:', { name, email, subject, message });
            
            // Show success message
            alert('Message sent successfully! (This is a demo - no actual message was sent)');
            
            // Reset form
            contactForm.reset();
        });
    }
});
