/**
 * PasneserPark - Header Component
 * Zelfstandige header die via JavaScript wordt geladen
 * Alle styling zit IN dit bestand - geen externe CSS nodig
 */

(function() {
    'use strict';

    // ===== CSS STYLES =====
    const headerStyles = `
        /* Reset - voorkom conflicts met externe libraries */
        .site-header,
        .site-header *,
        .site-header *::before,
        .site-header *::after {
            box-sizing: border-box !important;
            margin: 0 !important;
            padding: 0 !important;
        }

        /* Header container */
        .site-header {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            width: 100% !important;
            height: 80px !important;
            min-height: 80px !important;
            max-height: 80px !important;
            z-index: 9999 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            background: transparent !important;
            transition: background 0.4s ease, box-shadow 0.4s ease !important;
        }

        .site-header.scrolled {
            background: #FFF4D5 !important;
            box-shadow: 0 2px 20px rgba(93, 64, 55, 0.15) !important;
        }

        /* Inner container */
        .site-header__inner {
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            width: 100% !important;
            max-width: 1400px !important;
            height: 80px !important;
            padding: 0 2rem !important;
        }

        /* Navigation */
        .site-header__nav {
            display: flex !important;
            align-items: center !important;
            gap: 2.5rem !important;
            height: 100% !important;
        }

        .site-header__nav a {
            font-family: 'Source Sans Pro', sans-serif !important;
            font-size: 1.05rem !important;
            font-weight: 500 !important;
            letter-spacing: 0.03em !important;
            color: #FFF4D5 !important;
            text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6) !important;
            text-decoration: none !important;
            padding: 0.5rem 0 !important;
            position: relative !important;
            display: inline-block !important;
            cursor: pointer !important;
            transition: color 0.3s ease, text-shadow 0.3s ease !important;
        }

        .site-header.scrolled .site-header__nav a {
            color: #5D4037 !important;
            text-shadow: none !important;
        }

        /* Active underline */
        .site-header__nav a::after {
            content: '' !important;
            position: absolute !important;
            bottom: 0 !important;
            left: 0 !important;
            width: 0 !important;
            height: 2px !important;
            background: linear-gradient(90deg, #D4AF37, #E8C55A) !important;
            transition: width 0.3s ease !important;
        }

        .site-header__nav a:hover::after,
        .site-header__nav a.active::after {
            width: 100% !important;
        }

        /* Right section */
        .site-header__right {
            display: flex !important;
            align-items: center !important;
            gap: 1rem !important;
        }

        /* Reserveren button */
        .site-header__cta {
            font-family: 'Source Sans Pro', sans-serif !important;
            font-size: 0.95rem !important;
            font-weight: 600 !important;
            color: white !important;
            background: linear-gradient(135deg, #5A7D3E, #4A6B30) !important;
            padding: 0.75rem 1.5rem !important;
            border-radius: 4px !important;
            text-decoration: none !important;
            cursor: pointer !important;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3) !important;
            transition: transform 0.3s ease, box-shadow 0.3s ease !important;
        }

        .site-header.scrolled .site-header__cta {
            box-shadow: 0 2px 8px rgba(90, 125, 62, 0.3) !important;
        }

        .site-header__cta:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 4px 15px rgba(90, 125, 62, 0.4) !important;
        }

        /* Hamburger menu */
        .site-header__hamburger {
            display: none !important;
            flex-direction: column !important;
            gap: 5px !important;
            cursor: pointer !important;
            padding: 10px !important;
            z-index: 10001 !important;
        }

        .site-header__hamburger span {
            width: 25px !important;
            height: 3px !important;
            background-color: #FFF4D5 !important;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3) !important;
            transition: all 0.3s ease !important;
        }

        .site-header.scrolled .site-header__hamburger span {
            background-color: #5D4037 !important;
            box-shadow: none !important;
        }

        .site-header__hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px) !important;
        }

        .site-header__hamburger.active span:nth-child(2) {
            opacity: 0 !important;
        }

        .site-header__hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -7px) !important;
        }

        /* Mobile Navigation */
        .site-mobile-nav {
            display: none !important;
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            background-color: #FFF4D5 !important;
            z-index: 9998 !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 2rem !important;
        }

        .site-mobile-nav.active {
            display: flex !important;
        }

        .site-mobile-nav a {
            font-family: 'Playfair Display', serif !important;
            font-size: 1.5rem !important;
            color: #5D4037 !important;
            text-decoration: none !important;
            padding: 0.5rem 1rem !important;
            transition: color 0.3s ease !important;
        }

        .site-mobile-nav a:hover {
            color: #5A7D3E !important;
        }

        .site-mobile-nav a.active {
            border-bottom: 2px solid #D4AF37 !important;
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
            .site-header {
                height: 70px !important;
                min-height: 70px !important;
                max-height: 70px !important;
            }

            .site-header__inner {
                height: 70px !important;
                padding: 0 1rem !important;
            }

            .site-header__nav {
                display: none !important;
            }

            .site-header__hamburger {
                display: flex !important;
            }
        }
    `;

    // ===== LANGUAGE DETECTION =====
    const path = window.location.pathname;
    const langFolders = ['en', 'de', 'sq'];
    let currentLang = 'nl';
    let basePath = '';

    for (const lang of langFolders) {
        if (path.includes('/' + lang + '/')) {
            currentLang = lang;
            basePath = '../';
            break;
        }
    }

    // ===== TRANSLATIONS =====
    const navTexts = {
        nl: { home: 'Welkom', glamping: 'Glamping', fotos: "Foto's", info: 'Info', reviews: 'Reviews', blog: 'Blog', contact: 'Contact', book: 'Reserveren' },
        en: { home: 'Home', glamping: 'Glamping', fotos: 'Photos', info: 'Info', reviews: 'Reviews', blog: 'Blog', contact: 'Contact', book: 'Book Now' },
        de: { home: 'Startseite', glamping: 'Glamping', fotos: 'Fotos', info: 'Info', reviews: 'Bewertungen', blog: 'Blog', contact: 'Kontakt', book: 'Buchen' },
        sq: { home: 'Kryefaqja', glamping: 'Glamping', fotos: 'Foto', info: 'Info', reviews: 'Vlerësime', blog: 'Blog', contact: 'Kontakt', book: 'Rezervo' }
    };
    const t = navTexts[currentLang] || navTexts.nl;

    // ===== HTML TEMPLATE =====
    const headerHTML = `
        <header class="site-header" id="site-header">
            <div class="site-header__inner">
                <nav class="site-header__nav">
                    <a href="${basePath}index.html" data-page="index">${t.home}</a>
                    <a href="${basePath}glamping.html" data-page="glamping">${t.glamping}</a>
                    <a href="${basePath}fotos.html" data-page="fotos">${t.fotos}</a>
                    <a href="${basePath}info.html" data-page="info">${t.info}</a>
                    <a href="${basePath}reviews.html" data-page="reviews">${t.reviews}</a>
                    <a href="${basePath}blog.html" data-page="blog">${t.blog}</a>
                    <a href="${basePath}contact.html" data-page="contact">${t.contact}</a>
                </nav>

                <div class="site-header__right">
                    <a href="https://www.airbnb.nl/rooms/1452333527355917092" target="_blank" rel="noopener" class="site-header__cta">${t.book}</a>
                </div>

                <div class="site-header__hamburger" id="site-hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>

        <nav class="site-mobile-nav" id="site-mobile-nav">
            <a href="${basePath}index.html" data-page="index">${t.home}</a>
            <a href="${basePath}glamping.html" data-page="glamping">${t.glamping}</a>
            <a href="${basePath}fotos.html" data-page="fotos">${t.fotos}</a>
            <a href="${basePath}info.html" data-page="info">${t.info}</a>
            <a href="${basePath}reviews.html" data-page="reviews">${t.reviews}</a>
            <a href="${basePath}blog.html" data-page="blog">${t.blog}</a>
            <a href="${basePath}contact.html" data-page="contact">${t.contact}</a>
            <a href="https://www.airbnb.nl/rooms/1452333527355917092" target="_blank" rel="noopener" class="site-header__cta">${t.book}</a>
        </nav>
    `;

    // ===== INJECT CSS =====
    const styleElement = document.createElement('style');
    styleElement.id = 'site-header-styles';
    styleElement.textContent = headerStyles;
    document.head.appendChild(styleElement);

    // ===== INJECT HTML =====
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // ===== GET ELEMENTS =====
    const header = document.getElementById('site-header');
    const hamburger = document.getElementById('site-hamburger');
    const mobileNav = document.getElementById('site-mobile-nav');

    // ===== ACTIVE PAGE DETECTION =====
    // path is already defined above
    const pageName = path.split('/').pop().replace('.html', '') || 'index';

    // Mark active link in desktop nav
    const desktopLinks = document.querySelectorAll('.site-header__nav a[data-page]');
    desktopLinks.forEach(link => {
        if (link.getAttribute('data-page') === pageName) {
            link.classList.add('active');
        }
    });

    // Mark active link in mobile nav
    const mobileLinks = document.querySelectorAll('.site-mobile-nav a[data-page]');
    mobileLinks.forEach(link => {
        if (link.getAttribute('data-page') === pageName) {
            link.classList.add('active');
        }
    });

    // ===== SCROLL EFFECT =====
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on page load

    // ===== MOBILE MENU TOGGLE =====
    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            mobileNav.classList.toggle('active');
            document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
        });

        // Close mobile nav when clicking a link
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

})();
