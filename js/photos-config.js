/**
 * PasneserPark - Foto's Configuratie
 *
 * INSTRUCTIES:
 * 1. Zet je foto in de map: images/gallery/
 *    (Dit is de gallery map met alle foto's voor de Foto's pagina)
 * 2. Voeg hieronder een regel toe met: foto en titel
 * 3. Klaar! De foto verschijnt automatisch op de Foto's pagina
 *
 * Voorbeeld:
 *   { foto: "mijn-foto.jpg", titel: "Mijn Titel" }
 */

const FOTOS = [
    { foto: "outdoor-kitchen.jpg", titel: "Buitenkeuken met kookgerei bij PasneserPark glamping Albanië" },
    { foto: "water-spot.jpg", titel: "Natuurlijke waterplek in het bos bij PasneserPark" },
    { foto: "forest-path-bench.jpg", titel: "Rustiek bankje langs bospad bij PasneserPark glamping" },
    { foto: "bar-evening.jpg", titel: "Sfeervolle avond bij de bar op PasneserPark terrein" },
    { foto: "3Glazen flessen.jpeg", titel: "Decoratieve glazen flessen in rustieke stijl" },
    { foto: "Eien.jpeg", titel: "Verse eieren van lokale kippen bij PasneserPark" },
    { foto: "ezel.jpeg", titel: "Vriendelijke ezel in de Albanese natuur nabij PasneserPark" },
    { foto: "Groene Bladeren.jpeg", titel: "Weelderig groen gebladerte in de bergen van Albanië" },
    { foto: "Haan.jpeg", titel: "Kleurrijke haan op het PasneserPark terrein" },
    { foto: "Koe.jpeg", titel: "Grazende koe in de heuvels rond PasneserPark" },
    { foto: "Schaduw vijgenblad.jpeg", titel: "Schaduw van vijgenblad in de Albanese zon" },
    { foto: "Schapen.jpeg", titel: "Schapen grazen in de bergen nabij PasneserPark glamping" },
    { foto: "Tito op Heuvel.jpeg", titel: "Tito de hond op een heuvel met uitzicht over Albanië" }
];


/**
 * Laad de foto's automatisch in de pagina
 * (Deze code hoef je niet aan te passen)
 */
(function() {
    'use strict';

    let currentIndex = 0;
    const images = [];

    // Detect if we're in a language subfolder
    const path = window.location.pathname;
    const langFolders = ['en', 'de', 'sq'];
    let basePath = '';
    for (const lang of langFolders) {
        if (path.includes('/' + lang + '/')) {
            basePath = '../';
            break;
        }
    }

    function loadPhotos() {
        const grid = document.getElementById('photos-grid');
        if (!grid) return;

        // Maak de grid leeg
        grid.innerHTML = '';

        // Voeg elke foto toe
        FOTOS.forEach((foto, index) => {
            const imgSrc = `${basePath}images/gallery/${foto.foto}`;
            images.push(imgSrc);

            const card = document.createElement('div');
            card.className = 'experience-card';
            card.setAttribute('data-index', index);
            card.innerHTML = `<img src="${imgSrc}" alt="${foto.titel}">`;
            card.addEventListener('click', () => openLightbox(index));
            grid.appendChild(card);
        });

        initLightbox();
    }

    function initLightbox() {
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightbox-image');
        const lightboxClose = document.getElementById('lightbox-close');
        const lightboxPrev = document.getElementById('lightbox-prev');
        const lightboxNext = document.getElementById('lightbox-next');

        if (!lightbox) return;

        window.openLightbox = function(index) {
            currentIndex = index;
            lightboxImage.src = images[currentIndex];
            lightbox.classList.add('lightbox--active');
            document.body.style.overflow = 'hidden';
        };

        function closeLightbox() {
            lightbox.classList.remove('lightbox--active');
            document.body.style.overflow = '';
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            lightboxImage.src = images[currentIndex];
        }

        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            lightboxImage.src = images[currentIndex];
        }

        lightboxClose.addEventListener('click', closeLightbox);
        lightboxNext.addEventListener('click', nextImage);
        lightboxPrev.addEventListener('click', prevImage);

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });

        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('lightbox--active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        });
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadPhotos);
    } else {
        loadPhotos();
    }
})();
