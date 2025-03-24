type TKey = 'countryName' | 'countryCode' | 'categories' | 'sources';

const storage = {
    get<T>(key: TKey, defaultValue: T | null = null): T | null {
        try {
            const data = localStorage.getItem(key);
            return data ? (JSON.parse(data) as T) : defaultValue;
        } catch (error) {
            console.error(`Error parsing storage key "${key}":`, error);
            return defaultValue;
        }
    },

    set<T>(key: TKey, value: T): void {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(`Error saving storage key "${key}":`, error);
        }
    },

    remove(key: TKey): void {
        localStorage.removeItem(key);
    },

    clear(): void {
        localStorage.clear();
    },
};

export default storage;
