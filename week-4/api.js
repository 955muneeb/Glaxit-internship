// Fetch coordinates for a city using Open-Meteo Geocoding API
export const fetchCoordinates = async (cityName) => {
    try {
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`);
        if (!response.ok) throw new Error('Geocoding network error');
        const data = await response.json();
        
        if (!data.results || data.results.length === 0) {
            throw new Error('City not found');
        }
        
        const result = data.results[0];
        return {
            lat: result.latitude,
            lon: result.longitude,
            name: result.name,
            country: result.country || '',
            admin1: result.admin1 || '' // State/Province
        };
    } catch (error) {
        console.error("Geocoding error:", error);
        throw error;
    }
};

// Fetch current weather data using coordinates
export const fetchWeather = async (lat, lon) => {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
        if (!response.ok) throw new Error('Weather API network error');
        const data = await response.json();
        return data.current_weather;
    } catch (error) {
        console.error("Error fetching weather:", error);
        return null;
    }
};

// Fetch a random quote
export const fetchRandomQuote = async () => {
    try {
        const response = await fetch('https://dummyjson.com/quotes/random');
        if (!response.ok) throw new Error('Quote API network error');
        const data = await response.json();
        return { text: data.quote, author: data.author };
    } catch (error) {
        console.error("Error fetching quote:", error);
        return { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" };
    }
};