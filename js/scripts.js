// Smooth scrolling
document.querySelectorAll('.scroll-button').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.querySelector(event.target.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Alert przy pobieraniu gry
document.querySelector('.download-button').addEventListener('click', () => {
    alert("Zaraz pobierzesz grę! Przygotuj się na przygodę.");
});
