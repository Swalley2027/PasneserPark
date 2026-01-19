/**
 * PasneserPark - Main JavaScript
 * Handles header behavior, mobile navigation, and general interactions
 */

(function() {
    'use strict';

    // DOM Elements
    const header = document.getElementById('header');
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');

    /**
     * Header scroll behavior
     * Changes header style based on scroll position
     * Works on ALL pages with hero sections
     */
    function handleHeaderScroll() {
        if (!header) return;

        const scrollPosition = window.scrollY;
        // Check for any hero-style section (dark background)
        const hasHeroSection = document.querySelector('.hero, .accom-hero, .reviews-hero, .blog-hero, .page-hero') !== null;

        // Only apply scroll effect on pages with hero sections
        if (hasHeroSection) {
            if (scrollPosition > 100) {
                header.classList.remove('header--transparent');
                header.classList.add('header--solid');
            } else {
                header.classList.remove('header--solid');
                header.classList.add('header--transparent');
            }
        } else {
            // Pages without hero (fotos, contact) - always solid
            header.classList.remove('header--transparent');
            header.classList.add('header--solid');
        }
    }

    /**
     * Mobile navigation toggle
     */
    function toggleMobileNav() {
        if (!hamburger || !mobileNav) return;

        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    }

    /**
     * Close mobile nav when clicking a link
     */
    function closeMobileNavOnClick() {
        if (!mobileNav) return;

        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

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
        // Header scroll behavior
        handleHeaderScroll();
        window.addEventListener('scroll', handleHeaderScroll);

        // Mobile navigation
        if (hamburger) {
            hamburger.addEventListener('click', toggleMobileNav);
        }
        closeMobileNavOnClick();

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
