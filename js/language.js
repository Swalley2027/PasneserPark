/**
 * PasneserPark - Language Selection
 * Handles language preference storage and redirection
 */

(function() {
    'use strict';

    // Storage key for language preference
    const STORAGE_KEY = 'pasneserpark_language';

    /**
     * Get saved language preference
     */
    function getSavedLanguage() {
        try {
            return localStorage.getItem(STORAGE_KEY);
        } catch (e) {
            return null;
        }
    }

    /**
     * Save language preference
     */
    function saveLanguage(lang) {
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) {
            // localStorage not available
        }
    }

    /**
     * Get language from URL parameter
     */
    function getUrlLanguage() {
        const params = new URLSearchParams(window.location.search);
        return params.get('lang');
    }

    /**
     * Check if we're on the language selection page
     */
    function isLanguagePage() {
        return window.location.pathname.includes('language.html');
    }

    /**
     * Redirect to language page if no preference is set
     */
    function checkLanguagePreference() {
        // Skip if already on language page
        if (isLanguagePage()) return;

        // Check URL parameter first
        const urlLang = getUrlLanguage();
        if (urlLang) {
            saveLanguage(urlLang);
            return;
        }

        // Check saved preference
        const savedLang = getSavedLanguage();
        if (!savedLang) {
            // No preference set, redirect to language selection
            window.location.href = 'language.html';
        }
    }

    /**
     * Add click handlers to flag links
     */
    function initFlagHandlers() {
        document.querySelectorAll('.flag').forEach(flag => {
            flag.addEventListener('click', function(e) {
                const lang = this.dataset.lang;
                if (lang) {
                    saveLanguage(lang);
                }
                // Let the default link behavior continue
            });
        });
    }

    /**
     * Initialize language functionality
     */
    function init() {
        if (isLanguagePage()) {
            initFlagHandlers();
        } else {
            checkLanguagePreference();
        }
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
