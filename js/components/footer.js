/**
 * PasneserPark - Footer Component
 * Zelfstandige footer die via JavaScript wordt geladen
 * Alle styling zit IN dit bestand - geen externe CSS nodig
 */
(function() {
    'use strict';

    // ================================
    // CSS STYLES
    // ================================
    const footerStyles = `
        /* ================================
           Footer - Premium Two-Layer Design
           ================================ */

        .site-footer {
            background-color: #2d3a2e !important;
            color: #f5f0e8 !important;
            position: relative !important;
            z-index: 1 !important;
        }

        /* Subtle texture overlay */
        .site-footer::before {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E") !important;
            opacity: 0.02 !important;
            pointer-events: none !important;
        }

        /* ================================
           LAYER 1 - Hero Section
           ================================ */
        .site-footer__hero {
            padding: 60px 2rem 50px !important;
            text-align: center !important;
            position: relative !important;
        }

        .site-footer__logo-wrapper {
            display: inline-block !important;
            transition: transform 0.3s ease !important;
        }

        .site-footer__logo-wrapper:hover {
            transform: scale(1.05) !important;
        }

        .site-footer__logo {
            width: 250px !important;
            max-width: 100% !important;
            height: auto !important;
            transition: filter 0.3s ease !important;
        }

        .site-footer__logo-wrapper:hover .site-footer__logo {
            filter: brightness(1.08) !important;
        }

        .site-footer__tagline {
            font-family: 'Playfair Display', Georgia, serif !important;
            font-style: italic !important;
            font-size: 1.15rem !important;
            color: #f5f0e8 !important;
            opacity: 0.85 !important;
            margin-top: 1.5rem !important;
            letter-spacing: 0.5px !important;
        }

        /* ================================
           DIVIDER
           ================================ */
        .site-footer__divider {
            max-width: 800px !important;
            margin: 0 auto !important;
            height: 1px !important;
            background: linear-gradient(
                90deg,
                transparent,
                rgba(201, 162, 39, 0.4) 20%,
                #c9a227 50%,
                rgba(201, 162, 39, 0.4) 80%,
                transparent
            ) !important;
        }

        /* ================================
           LAYER 2 - Info Section
           ================================ */
        .site-footer__info {
            max-width: 1000px !important;
            margin: 0 auto !important;
            padding: 50px 2rem !important;
            display: grid !important;
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 2rem !important;
            position: relative !important;
        }

        /* Column Styling */
        .site-footer__column {
            text-align: center !important;
        }

        .site-footer__column h4 {
            font-family: 'Source Sans Pro', 'Segoe UI', sans-serif !important;
            font-size: 0.7rem !important;
            font-weight: 600 !important;
            letter-spacing: 2.5px !important;
            text-transform: uppercase !important;
            color: #c9a227 !important;
            margin-bottom: 1.5rem !important;
            position: relative !important;
            padding-bottom: 0.75rem !important;
        }

        .site-footer__column h4::after {
            content: '' !important;
            position: absolute !important;
            bottom: 0 !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            width: 25px !important;
            height: 1px !important;
            background: #c9a227 !important;
        }

        /* Column links */
        .site-footer__column a {
            display: block !important;
            font-family: 'Source Sans Pro', 'Segoe UI', sans-serif !important;
            font-size: 0.9rem !important;
            color: #f5f0e8 !important;
            opacity: 0.7 !important;
            margin-bottom: 0.65rem !important;
            transition: all 0.3s ease !important;
            text-decoration: none !important;
        }

        .site-footer__column a:hover {
            opacity: 1 !important;
            color: #d4b94a !important;
        }

        /* ================================
           Social & Booking Icons
           ================================ */
        .site-footer__icons {
            display: flex !important;
            gap: 0.6rem !important;
            justify-content: center !important;
        }

        .site-footer__icon {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            width: 42px !important;
            height: 42px !important;
            border-radius: 50% !important;
            background: rgba(245, 240, 232, 0.06) !important;
            border: 1px solid rgba(201, 162, 39, 0.25) !important;
            transition: all 0.3s ease !important;
            text-decoration: none !important;
        }

        .site-footer__icon:hover {
            background: #c9a227 !important;
            border-color: #c9a227 !important;
            transform: scale(1.1) !important;
        }

        .site-footer__icon svg {
            width: 18px !important;
            height: 18px !important;
            fill: #f5f0e8 !important;
            transition: fill 0.3s ease !important;
        }

        .site-footer__icon:hover svg {
            fill: #2d3a2e !important;
        }

        /* ================================
           Contact Info
           ================================ */
        .site-footer__contact-item {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 0.5rem !important;
            margin-bottom: 0.65rem !important;
        }

        .site-footer__contact-item svg {
            width: 14px !important;
            height: 14px !important;
            fill: #c9a227 !important;
            flex-shrink: 0 !important;
        }

        .site-footer__contact-item a {
            display: inline !important;
            margin-bottom: 0 !important;
        }

        /* ================================
           LAYER 3 - Copyright + Flags
           ================================ */
        .site-footer__bottom {
            max-width: 1000px !important;
            margin: 0 auto !important;
            padding: 1.25rem 2rem !important;
            border-top: 1px solid rgba(201, 162, 39, 0.3) !important;
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
            font-size: 0.8rem !important;
            color: #f5f0e8 !important;
            opacity: 0.6 !important;
        }

        .site-footer__bottom p {
            margin: 0 !important;
            font-family: 'Source Sans Pro', 'Segoe UI', sans-serif !important;
        }

        /* ================================
           Language Selector (Flags)
           ================================ */
        .site-footer__lang-selector {
            display: flex !important;
            gap: 0.5rem !important;
            align-items: center !important;
            flex-wrap: wrap !important;
            justify-content: flex-end !important;
        }

        .site-footer__lang-item {
            width: 22px !important;
            height: 15px !important;
            border-radius: 2px !important;
            overflow: hidden !important;
            cursor: pointer !important;
            opacity: 0.5 !important;
            transition: all 0.3s ease !important;
            border: 1px solid transparent !important;
        }

        .site-footer__lang-item:hover {
            opacity: 1 !important;
            transform: scale(1.15) !important;
            filter: brightness(1.1) !important;
        }

        .site-footer__lang-item.active {
            opacity: 1 !important;
            border-color: #c9a227 !important;
            box-shadow: 0 0 8px rgba(201, 162, 39, 0.4) !important;
        }

        .site-footer__lang-item svg {
            width: 100% !important;
            height: 100% !important;
            display: block !important;
        }

        /* ================================
           Footer Responsive
           ================================ */
        @media (max-width: 992px) {
            .site-footer__info {
                grid-template-columns: repeat(2, 1fr) !important;
                gap: 2.5rem 3rem !important;
                max-width: 600px !important;
            }
        }

        @media (max-width: 768px) {
            .site-footer__hero {
                padding: 50px 1.5rem 40px !important;
            }

            .site-footer__logo {
                width: 200px !important;
            }

            .site-footer__tagline {
                font-size: 1rem !important;
                margin-top: 1.25rem !important;
            }

            .site-footer__info {
                grid-template-columns: 1fr !important;
                gap: 2rem !important;
                padding: 40px 1.5rem !important;
                max-width: 100% !important;
            }

            .site-footer__bottom {
                flex-direction: column !important;
                gap: 1rem !important;
                text-align: center !important;
                padding: 1.25rem 1.5rem !important;
            }

            .site-footer__lang-selector {
                justify-content: center !important;
            }
        }

        @media (max-width: 480px) {
            .site-footer__hero {
                padding: 40px 1rem 35px !important;
            }

            .site-footer__logo {
                width: 180px !important;
            }

            .site-footer__icon {
                width: 38px !important;
                height: 38px !important;
            }

            .site-footer__icon svg {
                width: 16px !important;
                height: 16px !important;
            }

            .site-footer__lang-item {
                width: 20px !important;
                height: 14px !important;
            }
        }
    `;

    // ================================
    // HTML TEMPLATE
    // ================================
    const footerHTML = `
        <footer class="site-footer">
            <!-- Layer 1: Hero met logo -->
            <div class="site-footer__hero">
                <a href="index.html" class="site-footer__logo-wrapper">
                    <img src="images/logo/Logo-round.png" alt="PasneserPark Logo" class="site-footer__logo">
                </a>
                <p class="site-footer__tagline">Jouw thuis in de Albanese natuur</p>
            </div>

            <!-- Divider -->
            <div class="site-footer__divider"></div>

            <!-- Layer 2: Info columns -->
            <div class="site-footer__info">
                <!-- Column 1: Menu -->
                <div class="site-footer__column">
                    <h4>Menu</h4>
                    <a href="index.html">Welkom</a>
                    <a href="glamping.html">Glamping</a>
                    <a href="fotos.html">Foto's</a>
                    <a href="reviews.html">Reviews</a>
                    <a href="blog.html">Blog</a>
                    <a href="info.html">Info</a>
                    <a href="contact.html">Contact</a>
                </div>

                <!-- Column 2: Book With Us -->
                <div class="site-footer__column">
                    <h4>Boek Bij Ons</h4>
                    <div class="site-footer__icons">
                        <a href="https://www.airbnb.nl/rooms/1452333527355917092" target="_blank" rel="noopener" class="site-footer__icon" aria-label="Airbnb">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.5 17.2c-.3.5-.8.8-1.4.8-.3 0-.5-.1-.8-.2-1.3-.6-2.3-1.6-3.1-2.7-.8 1.1-1.8 2.1-3.1 2.7-.3.1-.5.2-.8.2-.6 0-1.1-.3-1.4-.8-.2-.4-.3-.9-.2-1.4.5-2.1 1.5-4 2.9-5.6-.8-.8-1.3-1.8-1.3-3 0-.5.4-.9.9-.9s.9.4.9.9c0 .8.4 1.5 1 2 .6-.5 1.4-1.1 2.2-1.5.2-.1.4-.1.6 0 .8.4 1.6 1 2.2 1.5.6-.5 1-1.2 1-2 0-.5.4-.9.9-.9s.9.4.9.9c0 1.2-.5 2.2-1.3 3 1.4 1.6 2.4 3.5 2.9 5.6.1.5 0 1-.2 1.4zM12 9.7c-.6.4-1.2.9-1.7 1.4 1 1.4 1.5 3 1.7 4.6.2-1.6.7-3.2 1.7-4.6-.5-.5-1.1-1-1.7-1.4z"/>
                            </svg>
                        </a>
                        <a href="https://www.booking.com" target="_blank" rel="noopener" class="site-footer__icon" aria-label="Booking.com">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.4 0C1.08 0 0 1.08 0 2.4v19.2C0 22.92 1.08 24 2.4 24h19.2c1.32 0 2.4-1.08 2.4-2.4V2.4C24 1.08 22.92 0 21.6 0H2.4zm7.14 6.66h2.07c1.56 0 2.82.63 2.82 2.25 0 1.02-.57 1.71-1.41 2.01v.03c1.05.21 1.77 1.05 1.77 2.22 0 1.83-1.44 2.67-3.12 2.67H9.54V6.66zm2.01 3.75c.72 0 1.17-.36 1.17-1.02 0-.69-.45-1.02-1.17-1.02h-.6v2.04h.6zm.15 4.05c.84 0 1.35-.36 1.35-1.17 0-.78-.51-1.14-1.35-1.14h-.75v2.31h.75z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Column 3: Follow Us -->
                <div class="site-footer__column">
                    <h4>Volg Ons</h4>
                    <div class="site-footer__icons">
                        <a href="https://www.instagram.com/pasneserpark" target="_blank" rel="noopener" class="site-footer__icon" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Column 4: Contact -->
                <div class="site-footer__column">
                    <h4>Contact</h4>
                    <div class="site-footer__contact-item">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                        <a href="mailto:info@pasneserpark.com">info@pasneserpark.com</a>
                    </div>
                    <div class="site-footer__contact-item">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                        <a href="tel:+355685576874">+355 68 557 6874</a>
                    </div>
                </div>
            </div>

            <!-- Layer 3: Copyright + Flags -->
            <div class="site-footer__bottom">
                <p>&copy; 2025 PasneserPark. Alle rechten voorbehouden.</p>
                <div class="site-footer__lang-selector">
                    <!-- Nederlands (actief) -->
                    <span class="site-footer__lang-item active" data-lang="nl" title="Nederlands">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6">
                            <rect fill="#21468B" width="9" height="6"/>
                            <rect fill="#FFF" width="9" height="4"/>
                            <rect fill="#AE1C28" width="9" height="2"/>
                        </svg>
                    </span>
                    <!-- Engels -->
                    <span class="site-footer__lang-item" data-lang="en" title="English">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
                            <rect fill="#012169" width="60" height="30"/>
                            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>
                            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="4"/>
                            <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>
                            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>
                        </svg>
                    </span>
                    <!-- Duits -->
                    <span class="site-footer__lang-item" data-lang="de" title="Deutsch">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3">
                            <rect fill="#000" width="5" height="3"/>
                            <rect fill="#D00" y="1" width="5" height="2"/>
                            <rect fill="#FFCE00" y="2" width="5" height="1"/>
                        </svg>
                    </span>
                    <!-- Albanees -->
                    <span class="site-footer__lang-item" data-lang="sq" title="Shqip">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 980 700">
                            <rect fill="#E41E20" width="980" height="700"/>
                            <path fill="#000" d="M490,145.5L397.2,227l-9.8-36.6l-28,23.7l-4.3-46.2l-37.1,16.2l11.5-51.7l-45.9-5.6l31-41.4l-47.2-19.4l45.9-27.6L271,13.9l51.1,7.3L314.5,0l44.2,29.4l16.2-38.8l28,40.6l32.5-30.2L428.9,51l43.4-16.2L455.7,79l47.9,3.5l-42.6,28L490,145.5z M490,145.5l29.1-34.9l47.9-3.5l-16.6-44.2l43.4,16.2l-6.5-49.6l32.5,30.2l28-40.6L664.3,58l44.2-29.4l-7.6,21.2l51.1-7.3l-42.3,24.5l45.9,27.6l-47.2,19.4l31,41.4l-45.9,5.6l11.5,51.7l-37.1-16.2l-4.3,46.2l-28-23.7l-9.8,36.6L490,145.5z"/>
                        </svg>
                    </span>
                </div>
            </div>
        </footer>
    `;

    // ================================
    // INJECT CSS
    // ================================
    function injectStyles() {
        const styleElement = document.createElement('style');
        styleElement.id = 'site-footer-styles';
        styleElement.textContent = footerStyles;
        document.head.appendChild(styleElement);
    }

    // ================================
    // INJECT HTML
    // ================================
    function injectFooter() {
        // Zoek de placeholder comment of voeg toe aan einde van body
        const body = document.body;

        // Maak een tijdelijke container om de HTML te parsen
        const temp = document.createElement('div');
        temp.innerHTML = footerHTML;
        const footer = temp.firstElementChild;

        // Voeg footer toe aan het einde van de body (voor scripts)
        body.appendChild(footer);
    }

    // ================================
    // LANGUAGE SELECTOR
    // ================================
    function initLanguageSelector() {
        const langItems = document.querySelectorAll('.site-footer__lang-item');

        langItems.forEach(item => {
            item.addEventListener('click', function() {
                // Verwijder active class van alle items
                langItems.forEach(i => i.classList.remove('active'));
                // Voeg active class toe aan geklikte item
                this.classList.add('active');

                // Trigger language change event (voor i18n.js)
                const lang = this.getAttribute('data-lang');
                if (window.changeLanguage) {
                    window.changeLanguage(lang);
                }
            });
        });
    }

    // ================================
    // INITIALIZE
    // ================================
    function init() {
        injectStyles();
        injectFooter();
        initLanguageSelector();
    }

    // Start wanneer DOM geladen is
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
