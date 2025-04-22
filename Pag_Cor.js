// Menú móvil
document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileBtn.classList.toggle('active');
    });

    // Cargar productos
    loadCoffeeProducts();
});

// Carga dinámica de productos
function loadCoffeeProducts() {
    const products = [
        {
            name: 'Café Arabica Premium',
            origin: 'Huila, Colombia',
            notes: 'Notas de chocolate y avellana',
            price: '$25.000',
            image: 'arabica.jpg'
        },
        // Más productos...
    ];

    const grid = document.querySelector('.coffee-grid');
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'coffee-card animate';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="card-content">
                <h3>${product.name}</h3>
                <p class="origin">${product.origin}</p>
                <p class="notes">${product.notes}</p>
                <p class="price">${product.price}</p>
                <button class="btn">Ver Detalles</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Observador de intersección para animaciones
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
});

document.querySelectorAll('.coffee-card, .specialty-card').forEach(el => {
    observer.observe(el);
});

// Manejo de formulario
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const response = await fetch('https://formspree.io/f/your-form-id', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            showMessage('¡Mensaje enviado con éxito!', 'success');
            contactForm.reset();
        } else {
            showMessage('Error al enviar el mensaje', 'error');
        }
    });
}

function showMessage(text, type) {
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 3000);
}