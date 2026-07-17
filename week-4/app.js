import { fetchRandomQuote, fetchWeather } from './api.js';
import { saveQuote, getSavedQuotes } from './storage.js';
import { renderQuote, renderWeather, renderSavedQuotesList } from './ui.js';

document.addEventListener('DOMContentLoaded', async () => {
    // DOM Elements
    const quoteDisplay = document.getElementById('quote-display');
    const weatherDisplay = document.getElementById('weather-display');
    const saveBtn = document.getElementById('save-quote-btn');
    const savedList = document.getElementById('saved-quotes-list');

    let currentQuote = null;

    // Initialization Function
    const initDashboard = async () => {
        // 1. Fetch and render weather
        const weatherData = await fetchWeather();
        renderWeather(weatherDisplay, weatherData);

        // 2. Fetch and render quote
        currentQuote = await fetchRandomQuote();
        renderQuote(quoteDisplay, currentQuote);

        // 3. Render saved quotes from localStorage
        renderSavedQuotesList(savedList, getSavedQuotes());
    };

    // Event Listener for the Save Button
    saveBtn.addEventListener('click', () => {
        if (currentQuote) {
            saveQuote(currentQuote);
            renderSavedQuotesList(savedList, getSavedQuotes());
        }
    });

    // Boot up the app
    initDashboard();
});