import { CATEGORIES_LIST, NEWS_SOURCES } from '@constants/feed.constants';
import { TFeedCategories } from '@types/feed.types';
import storage from '@utils/storage.utils';

type TUserPreference = {
    countryName: string;
    countryCode: string;
    categories: TFeedCategories[];
    sources: string[];
};

const userPreference = {
    get(): TUserPreference {
        return {
            countryName: storage.get<string>('countryName', '') ?? '',
            countryCode: storage.get<string>('countryCode', '') ?? '',
            categories: storage.get<TFeedCategories[]>('categories') ??
                CATEGORIES_LIST.filter(cat => ![TFeedCategories.ALL_NEWS, TFeedCategories.MY_FEED].includes(cat.id)).map((item) => item.id),
            sources: storage.get<string[]>('sources') ?? NEWS_SOURCES.map(source => source.id),
        };
    },

    set(newPreferences: Partial<TUserPreference>): void {
        if (newPreferences.countryName !== undefined) {
            storage.set<string>('countryName', newPreferences.countryName);
        }
        if (newPreferences.countryCode !== undefined) {
            storage.set<string>('countryCode', newPreferences.countryCode);
        }
        if (newPreferences.categories !== undefined) {
            storage.set<TFeedCategories[]>('categories', newPreferences.categories);
        }
        if (newPreferences.sources !== undefined) {
            storage.set<string[]>('sources', newPreferences.sources);
        }
    },

    reset(): void {
        storage.remove('countryName');
        storage.remove('countryCode');
        storage.remove('categories');
        storage.remove('sources');
    }
};

export default userPreference;
