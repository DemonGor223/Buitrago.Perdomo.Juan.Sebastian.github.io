// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handler (currently just prevents default)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    const submitButton = contactForm.querySelector('button[type="submit"]');
    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Validate form
        if (name && email && message) {
            // Here you would typically send the form data to a server
            // For now, just show an alert
            alert('Muchas Gracias por tu mensaje! te contestaré pronto.');
            
            // Clear form
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        } else {
            alert('Porfavor rellena todas las casillas.');
        }
    });
}

// Dynamic time update for the "Local Time" element
function updateLocalTime() {
    const timeElement = document.querySelector('.info-item:nth-child(2) span');
    if (timeElement) {
        const now = new Date();
        const options = { 
            hour: 'numeric', 
            minute: '2-digit', 
            hour12: true,
            timeZone: 'America/Los_Angeles'
        };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        const formattedTime = formatter.format(now);
        timeElement.textContent = `Local Time: PST - ${formattedTime}`;
    }
}

// Update time initially and then every minute
updateLocalTime();
setInterval(updateLocalTime, 60000);

// Add animation for skill items
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
    }, 200 * (index + 1));
});

// Add hover effect to project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
        card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});