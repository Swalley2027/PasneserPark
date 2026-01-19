/**
 * PasneserPark - Internationalization (i18n) System
 * Handles multi-language support with JSON translation files
 */

(function() {
    'use strict';

    const STORAGE_KEY = 'pasneserpark_language';
    const SUPPORTED_LANGUAGES = ['nl', 'en', 'de', 'sq'];
    const DEFAULT_LANGUAGE = 'nl';

    let currentLanguage = DEFAULT_LANGUAGE;
    let translations = {};

    /**
     * Get language from URL parameter (?lang=xx)
     */
    function getUrlLanguage() {
        const params = new URLSearchParams(window.location.search);
        const lang = params.get('lang');
        return SUPPORTED_LANGUAGES.includes(lang) ? lang : null;
    }

    /**
     * Get saved language preference from localStorage
     */
    function getSavedLanguage() {
        try {
            const lang = localStorage.getItem(STORAGE_KEY);
            return SUPPORTED_LANGUAGES.includes(lang) ? lang : null;
        } catch (e) {
            return null;
        }
    }

    /**
     * Get browser's preferred language
     */
    function getBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        const shortLang = browserLang.split('-')[0].toLowerCase();
        return SUPPORTED_LANGUAGES.includes(shortLang) ? shortLang : null;
    }

    /**
     * Save language preference to localStorage
     */
    function saveLanguage(lang) {
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) {
            // localStorage not available
        }
    }

    /**
     * Detect the best language to use
     */
    function detectLanguage() {
        // Priority: URL param > localStorage > browser > default
        return getUrlLanguage() || getSavedLanguage() || getBrowserLanguage() || DEFAULT_LANGUAGE;
    }

    /**
     * Load translation file for a language
     */
    async function loadTranslations(lang) {
        try {
            const response = await fetch(`lang/${lang}.json`);
            if (!response.ok) {
                throw new Error(`Failed to load ${lang}.json`);
            }
            return await response.json();
        } catch (error) {
            console.warn(`Could not load translations for ${lang}:`, error);
            // Fallback to default language
            if (lang !== DEFAULT_LANGUAGE) {
                return loadTranslations(DEFAULT_LANGUAGE);
            }
            return {};
        }
    }

    /**
     * Get nested value from object using dot notation
     * e.g., getValue(obj, 'nav.home') returns obj.nav.home
     */
    function getValue(obj, path) {
        return path.split('.').reduce((current, key) => {
            return current && current[key] !== undefined ? current[key] : null;
        }, obj);
    }

    /**
     * Apply translations to all elements with data-i18n attribute
     */
    function applyTranslations() {
        const elements = document.querySelectorAll('[data-i18n]');

        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = getValue(translations, key);

            if (translation) {
                // Check if we should set innerHTML or textContent
                if (element.hasAttribute('data-i18n-html')) {
                    element.innerHTML = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });

        // Handle placeholder translations
        const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const translation = getValue(translations, key);
            if (translation) {
                element.placeholder = translation;
            }
        });

        // Handle title translations
        const titleElements = document.querySelectorAll('[data-i18n-title]');
        titleElements.forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            const translation = getValue(translations, key);
            if (translation) {
                element.title = translation;
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = currentLanguage;

        // Update active state in language selector
        updateLanguageSelector();
    }

    /**
     * Update language selector to show current language
     */
    function updateLanguageSelector() {
        const selectors = document.querySelectorAll('.lang-selector__item');
        selectors.forEach(selector => {
            const lang = selector.getAttribute('data-lang');
            if (lang === currentLanguage) {
                selector.classList.add('active');
            } else {
                selector.classList.remove('active');
            }
        });
    }

    /**
     * Change language
     */
    async function setLanguage(lang) {
        if (!SUPPORTED_LANGUAGES.includes(lang)) {
            console.warn(`Language ${lang} is not supported`);
            return;
        }

        currentLanguage = lang;
        saveLanguage(lang);
        translations = await loadTranslations(lang);
        applyTranslations();

        // Dispatch custom event for other scripts to listen to
        window.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: lang }
        }));
    }

    /**
     * Get current language
     */
    function getLanguage() {
        return currentLanguage;
    }

    /**
     * Get translation by key
     */
    function t(key) {
        return getValue(translations, key) || key;
    }

    /**
     * Initialize language selector click handlers
     */
    function initLanguageSelector() {
        document.querySelectorAll('.lang-selector__item').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const lang = this.getAttribute('data-lang');
                if (lang) {
                    setLanguage(lang);
                }
            });
        });
    }

    /**
     * Initialize the i18n system
     */
    async function init() {
        currentLanguage = detectLanguage();
        translations = await loadTranslations(currentLanguage);
        applyTranslations();
        initLanguageSelector();
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose API globally
    window.i18n = {
        setLanguage,
        getLanguage,
        t,
        SUPPORTED_LANGUAGES
    };
})();
