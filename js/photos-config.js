/**
 * PasneserPark - Foto's Configuratie
 *
 * INSTRUCTIES:
 * 1. Zet je foto in de map: images/experiences/
 * 2. Voeg hieronder een regel toe met: foto, titel, tekst
 * 3. Klaar! De foto verschijnt automatisch op de Foto's pagina
 *
 * Voorbeeld:
 *   { foto: "mijn-foto.jpg", titel: "Mijn Titel", tekst: "Beschrijving van de foto" }
 */

const FOTOS = [
    { foto: "outdoor-kitchen.jpg", titel: "Buitenkeuken", tekst: "Kook je eigen maaltijd in onze volledig uitgeruste buitenkeuken. Met gasfornuis, koelkast en alles wat je nodig hebt." },
    { foto: "water-spot.jpg", titel: "De Waterplek", tekst: "Een verfrissende plek om af te koelen op warme dagen. Helder water, omringd door groen." },
    { foto: "forest-path-bench.jpg", titel: "Bospaadjes", tekst: "Wandel door de omliggende bossen. Rustige paden, schaduwrijke plekken en de geluiden van de natuur." },
    { foto: "bar-evening.jpg", titel: "Avond bij de Bar", tekst: "Sluit de dag af met een drankje aan onze gezellige bar. Onder de sterren, met goed gezelschap." }
];


/**
 * Laad de foto's automatisch in de pagina
 * (Deze code hoef je niet aan te passen)
 */
(function() {
    'use strict';

    function loadPhotos() {
        const grid = document.getElementById('photos-grid');
        if (!grid) return;

        // Maak de grid leeg
        grid.innerHTML = '';

        // Voeg elke foto toe
        FOTOS.forEach(foto => {
            const card = document.createElement('div');
            card.className = 'experience-card';
            card.innerHTML = `
                <img src="images/experiences/${foto.foto}" alt="${foto.titel}">
                <div class="experience-card__overlay">
                    <h3 class="experience-card__title">${foto.titel}</h3>
                    <p class="experience-card__text">${foto.tekst}</p>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadPhotos);
    } else {
        loadPhotos();
    }
})();
