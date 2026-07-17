const STORAGE_KEY = 'favoriteQuotes';

// Save a new quote to local storage
export const saveQuote = (quote) => {
    const savedQuotes = getSavedQuotes();
    // Prevent exact duplicates
    const isDuplicate = savedQuotes.some(q => q.text === quote.text);
    if (!isDuplicate) {
        savedQuotes.push(quote);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(savedQuotes));
    }
};

// Retrieve quotes from local storage
export const getSavedQuotes = () => {
    const quotes = localStorage.getItem(STORAGE_KEY);
    return quotes ? JSON.parse(quotes) : [];
};