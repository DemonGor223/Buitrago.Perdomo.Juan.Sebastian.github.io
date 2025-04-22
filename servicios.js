document.addEventListener('DOMContentLoaded', () => {
    const backLink = document.querySelector('.back-link');
    backLink.addEventListener('click', (e) => {
        e.preventDefault();
        // Redirige a la página principal (ajusta la URL según tu proyecto)
        window.location.href = 'index.html';
    });
});