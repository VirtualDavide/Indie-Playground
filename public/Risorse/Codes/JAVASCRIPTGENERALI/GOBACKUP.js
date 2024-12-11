// Seleziona il bottone
const scrollToTopButton = document.getElementById("myBtn");

// Mostra o nascondi il bottone in base alla posizione di scorrimento
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block"; // Mostra il bottone
    } else {
        scrollToTopButton.style.display = "none"; // Nascondi il bottone
    }
};

// Funzione per scorrere fino in cima quando il bottone viene cliccato
scrollToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Aggiunge l'effetto di scorrimento fluido
    });
};
