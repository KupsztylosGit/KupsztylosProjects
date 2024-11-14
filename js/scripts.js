// Smooth scrolling to sections
document.querySelectorAll('.scroll-button').forEach(button => {
    button.addEventListener('click', (event) => {
        const target = document.querySelector(event.target.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Akcja na przycisku pobierania gry
document.querySelector('.download-button').addEventListener('click', () => {
    alert("Przekierowanie do strony pobierania gry...");
    // Możesz przekierować do konkretnego pliku lub strony
});
