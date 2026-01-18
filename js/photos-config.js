/**
 * PasneserPark - Photo Hover Texts Configuration
 *
 * Pas hier de hover-teksten aan voor de foto's op de Foto's pagina.
 * De id's komen overeen met de data-photo-id attributen in de HTML.
 */

const PHOTO_TEXTS = {
    "buitenkeuken": {
        title: "Buitenkeuken",
        description: "Kook je eigen maaltijd in onze volledig uitgeruste buitenkeuken. Met gasfornuis, koelkast en alles wat je nodig hebt."
    },
    "waterplek": {
        title: "De Waterplek",
        description: "Een verfrissende plek om af te koelen op warme dagen. Helder water, omringd door groen."
    },
    "bospaadjes": {
        title: "Bospaadjes",
        description: "Wandel door de omliggende bossen. Rustige paden, schaduwrijke plekken en de geluiden van de natuur."
    },
    "bar": {
        title: "Avond bij de Bar",
        description: "Sluit de dag af met een drankje aan onze gezellige bar. Onder de sterren, met goed gezelschap."
    }
};

/**
 * Laad de hover-teksten vanuit de configuratie
 */
(function() {
    'use strict';

    function initPhotoTexts() {
        const cards = document.querySelectorAll('.experience-card[data-photo-id]');

        cards.forEach(card => {
            const photoId = card.getAttribute('data-photo-id');
            const config = PHOTO_TEXTS[photoId];

            if (config) {
                const titleEl = card.querySelector('.experience-card__title');
                const textEl = card.querySelector('.experience-card__text');

                if (titleEl) titleEl.textContent = config.title;
                if (textEl) textEl.textContent = config.description;
            }
        });
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPhotoTexts);
    } else {
        initPhotoTexts();
    }
})();
