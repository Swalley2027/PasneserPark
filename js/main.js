/**
 * PasneserPark - Main JavaScript
 * General interactions and animations
 * NOTE: Header is now handled by js/components/header.js
 */

(function() {
    'use strict';

    /**
     * Smooth scroll for anchor links
     */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    /**
     * Fade-in animation on scroll
     */
    function initFadeInAnimations() {
        if ('IntersectionObserver' in window) {
            const fadeObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in--visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            document.querySelectorAll('.fade-in').forEach(element => {
                fadeObserver.observe(element);
            });
        } else {
            // Fallback for browsers without IntersectionObserver
            document.querySelectorAll('.fade-in').forEach(element => {
                element.classList.add('fade-in--visible');
            });
        }
    }

    /**
     * Lazy load images
     */
    function initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        observer.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    /**
     * Add loading animation to images
     */
    function initImageLoading() {
        document.querySelectorAll('.photo-grid__item img, .experience-card img').forEach(img => {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
        });
    }

    /**
     * Initialize all functionality
     */
    function init() {
        // Smooth scroll
        initSmoothScroll();

        // Fade-in animations
        initFadeInAnimations();

        // Lazy loading
        initLazyLoading();

        // Image loading
        initImageLoading();
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
