// Update the quote DOM element
export const renderQuote = (element, quoteData) => {
    element.innerHTML = `"${quoteData.text}" <br><br><strong>— ${quoteData.author}</strong>`;
};

// Update the weather DOM element
export const renderWeather = (element, weatherData) => {
    if (!weatherData) {
        element.innerHTML = "Unable to load weather data.";
        return;
    }
    element.innerHTML = `
        <strong>Temperature:</strong> ${weatherData.temperature}°C <br>
        <strong>Wind Speed:</strong> ${weatherData.windspeed} km/h
    `;
};

// Render the list of saved quotes
export const renderSavedQuotesList = (listElement, quotes) => {
    if (quotes.length === 0) {
        listElement.innerHTML = "<li>No favorite quotes saved yet.</li>";
        return;
    }
    listElement.innerHTML = quotes.map(q => 
        `<li style="margin-bottom: 0.5rem;">"${q.text}" — <em>${q.author}</em></li>`
    ).join('');
};