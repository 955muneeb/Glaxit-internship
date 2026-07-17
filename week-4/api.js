// Fetch a random quote
export const fetchRandomQuote = async () => {
    try {
        const response = await fetch('https://dummyjson.com/quotes/random');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return { text: data.quote, author: data.author };
    } catch (error) {
        console.error("Error fetching quote:", error);
        return { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" };
    }
};

// Fetch current weather data
export const fetchWeather = async () => {
    try {
        // Coordinates set to Taxila by default
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=33.7463&longitude=72.8397&current_weather=true');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data.current_weather;
    } catch (error) {
        console.error("Error fetching weather:", error);
        return null;
    }
};