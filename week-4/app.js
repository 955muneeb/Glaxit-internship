import { fetchRandomQuote, fetchWeather, fetchCoordinates } from './api.js';
import { saveQuote, getSavedQuotes } from './storage.js';
import { renderQuote, renderWeather, renderSavedQuotesList } from './ui.js';

document.addEventListener('DOMContentLoaded', async () => {
    const quoteDisplay = document.getElementById('quote-display');
    const weatherDisplay = document.getElementById('weather-display');
    const saveBtn = document.getElementById('save-quote-btn');
    const savedList = document.getElementById('saved-quotes-list');
    
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    let currentQuote = null;

    // Load initial default layout
    const initDashboard = async () => {
        // Initial defaults (Taxila coordinates)
        const defaultLat = 33.7463;
        const defaultLon = 72.8397;

        const weatherData = await fetchWeather(defaultLat, defaultLon);
        renderWeather(weatherDisplay, weatherData, "Taxila, Punjab");

        currentQuote = await fetchRandomQuote();
        renderQuote(quoteDisplay, currentQuote);

        renderSavedQuotesList(savedList, getSavedQuotes());
    };

    // Handle city searching
    searchForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const cityQuery = searchInput.value.trim();
        if (!cityQuery) return;

        weatherDisplay.innerHTML = "Searching city data...";

        try {
            const location = await fetchCoordinates(cityQuery);
            const weatherData = await fetchWeather(location.lat, location.lon);
            
            const displayName = `${location.name}${location.admin1 ? ', ' + location.admin1 : ''} (${location.country})`;
            renderWeather(weatherDisplay, weatherData, displayName);
            searchInput.value = '';
        } catch (error) {
            weatherDisplay.innerHTML = `<span style="color: #dc2626;">City "${cityQuery}" not found. Try another city.</span>`;
        }
    });

    saveBtn.addEventListener('click', () => {
        if (currentQuote) {
            saveQuote(currentQuote);
            renderSavedQuotesList(savedList, getSavedQuotes());
        }
    });

    initDashboard();
});