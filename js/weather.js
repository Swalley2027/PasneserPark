/**
 * PasneserPark - Weather Widget
 * Fetches and displays weather data for Pasnes, Albania
 */

(function() {
    'use strict';

    // Configuration
    const CONFIG = {
        // Coordinates for Pasnes area, Albania
        latitude: 40.5,
        longitude: 20.1,
        // Open-Meteo API (free, no API key required)
        apiUrl: 'https://api.open-meteo.com/v1/forecast'
    };

    // DOM Elements
    const tempElement = document.getElementById('weather-temp');
    const day1Element = document.getElementById('weather-day1');
    const day2Element = document.getElementById('weather-day2');
    const day3Element = document.getElementById('weather-day3');
    const iconElement = document.querySelector('.weather-widget__icon');

    /**
     * Get weather icon based on weather code
     */
    function getWeatherIcon(code) {
        // WMO Weather interpretation codes
        if (code === 0) return '\u2600'; // Clear sky - sun
        if (code <= 3) return '\u26C5'; // Partly cloudy
        if (code <= 49) return '\u2601'; // Fog/cloudy
        if (code <= 69) return '\u2614'; // Rain
        if (code <= 79) return '\u2744'; // Snow
        if (code <= 99) return '\u26C8'; // Thunderstorm
        return '\u2600'; // Default sun
    }

    /**
     * Fetch weather data from Open-Meteo API
     */
    async function fetchWeather() {
        try {
            const url = `${CONFIG.apiUrl}?latitude=${CONFIG.latitude}&longitude=${CONFIG.longitude}&daily=temperature_2m_max,temperature_2m_min,weathercode&current_weather=true&timezone=auto`;

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Weather API request failed');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching weather:', error);
            return null;
        }
    }

    /**
     * Update the weather widget with fetched data
     */
    function updateWeatherWidget(data) {
        if (!data) {
            // Show fallback if API fails
            if (tempElement) tempElement.textContent = '--\u00B0C';
            return;
        }

        try {
            // Current temperature
            const currentTemp = Math.round(data.current_weather.temperature);
            const currentCode = data.current_weather.weathercode;

            if (tempElement) {
                tempElement.textContent = `${currentTemp}\u00B0C`;
            }

            if (iconElement) {
                iconElement.textContent = getWeatherIcon(currentCode);
            }

            // 3-day forecast
            const daily = data.daily;

            if (day1Element && daily.temperature_2m_max[0] !== undefined) {
                const maxTemp = Math.round(daily.temperature_2m_max[0]);
                const minTemp = Math.round(daily.temperature_2m_min[0]);
                day1Element.textContent = `${minTemp}\u00B0 / ${maxTemp}\u00B0C`;
            }

            if (day2Element && daily.temperature_2m_max[1] !== undefined) {
                const maxTemp = Math.round(daily.temperature_2m_max[1]);
                const minTemp = Math.round(daily.temperature_2m_min[1]);
                day2Element.textContent = `${minTemp}\u00B0 / ${maxTemp}\u00B0C`;
            }

            if (day3Element && daily.temperature_2m_max[2] !== undefined) {
                const maxTemp = Math.round(daily.temperature_2m_max[2]);
                const minTemp = Math.round(daily.temperature_2m_min[2]);
                day3Element.textContent = `${minTemp}\u00B0 / ${maxTemp}\u00B0C`;
            }
        } catch (error) {
            console.error('Error updating weather widget:', error);
        }
    }

    /**
     * Initialize weather widget
     */
    async function init() {
        // Only initialize if weather elements exist
        if (!tempElement) return;

        const weatherData = await fetchWeather();
        updateWeatherWidget(weatherData);

        // Refresh weather every 30 minutes
        setInterval(async () => {
            const data = await fetchWeather();
            updateWeatherWidget(data);
        }, 30 * 60 * 1000);
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
