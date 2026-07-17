export const renderQuote = (element, quoteData) => {
    element.innerHTML = `"${quoteData.text}" <strong>— ${quoteData.author}</strong>`;
};

export const renderWeather = (element, weatherData, locationName = "Taxila, Punjab") => {
    if (!weatherData) {
        element.innerHTML = "<span style='color: #dc2626;'>Unable to load weather data.</span>";
        return;
    }
    
    element.innerHTML = `
        <div class="weather-info">
            <div class="temperature">${weatherData.temperature}°C</div>
            <div class="location">📍 ${locationName}</div>
            <div class="details">Wind Speed: ${weatherData.windspeed} km/h</div>
        </div>
    `;
};

export const renderSavedQuotesList = (listElement, quotes) => {
    if (quotes.length === 0) {
        listElement.innerHTML = "<li style='color: #64748b; font-style: italic;'>No favorite quotes saved yet.</li>";
        return;
    }
    listElement.innerHTML = quotes.map(q => 
        `<li>"${q.text}" <br><strong>— ${q.author}</strong></li>`
    ).join('');
};