export const StorageService = {
    save(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (e) {
            console.error("Storage quota exceeded or disabled:", e);
        }
    },
    load(key, fallback = []) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : fallback;
        } catch (e) {
            console.error("Failed to parse local storage payload:", e);
            return fallback;
        }
    }
};