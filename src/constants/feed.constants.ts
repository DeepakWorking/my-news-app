import {
  TFeedCategories,
  TFeedCategoryItem,
  TNewsSourceKey,
} from 'types/feed.types';

export const CATEGORIES_LIST: TFeedCategoryItem[] = [
  { id: TFeedCategories.ALL_NEWS, label: 'All News' },
  { id: TFeedCategories.MY_FEED, label: 'For You' },
  { id: TFeedCategories.GENERAL, label: 'Top Stories' },
  { id: TFeedCategories.BUSINESS, label: 'Business' },
  { id: TFeedCategories.ENTERTAINMENT, label: 'Entertainment' },
  { id: TFeedCategories.HEALTH, label: 'Health' },
  { id: TFeedCategories.SCIENCE, label: 'Science' },
  { id: TFeedCategories.SPORTS, label: 'Sports' },
  { id: TFeedCategories.TECHNOLOGY, label: 'Technology' },
];

type NewsSource = {
  name: string;
  domain?: string;
  id: TNewsSourceKey;
};

export const NEWS_API_ORG_SOURCES: Partial<Record<TNewsSourceKey, NewsSource>> =
  {
    [TNewsSourceKey.BBC_NEWS]: {
      name: 'BBC News',
      domain: 'bbc.com',
      id: TNewsSourceKey.BBC_NEWS,
    },
    [TNewsSourceKey.CNN]: {
      name: 'CNN',
      domain: 'cnn.com',
      id: TNewsSourceKey.CNN,
    },
    [TNewsSourceKey.REUTERS]: {
      name: 'Reuters',
      domain: 'reuters.com',
      id: TNewsSourceKey.REUTERS,
    },
    [TNewsSourceKey.NYT]: {
      name: 'The New York Times',
      domain: 'nytimes.com',
      id: TNewsSourceKey.NYT,
    },
    [TNewsSourceKey.AP]: {
      name: 'The Associated Press',
      domain: 'ap.org',
      id: TNewsSourceKey.AP,
    },
    [TNewsSourceKey.AFP]: {
      name: 'Agence France-Presse',
      domain: 'afp.com',
      id: TNewsSourceKey.AFP,
    },
    [TNewsSourceKey.AL_JAZEERA]: {
      name: 'Al Jazeera',
      domain: 'aljazeera.com',
      id: TNewsSourceKey.AL_JAZEERA,
    },
    [TNewsSourceKey.BLOOMBERG]: {
      name: 'Bloomberg',
      domain: 'bloomberg.com',
      id: TNewsSourceKey.BLOOMBERG,
    },
    [TNewsSourceKey.WSJ]: {
      name: 'The Wall Street Journal',
      domain: 'wsj.com',
      id: TNewsSourceKey.WSJ,
    },
    [TNewsSourceKey.WASHINGTON_POST]: {
      name: 'The Washington Post',
      domain: 'washingtonpost.com',
      id: TNewsSourceKey.WASHINGTON_POST,
    },
    [TNewsSourceKey.DER_SPIEGEL]: {
      name: 'Der Spiegel',
      domain: 'spiegel.de',
      id: TNewsSourceKey.DER_SPIEGEL,
    },
    [TNewsSourceKey.LE_MONDE]: {
      name: 'Le Monde',
      domain: 'lemonde.fr',
      id: TNewsSourceKey.LE_MONDE,
    },
    [TNewsSourceKey.BBC_WORLD_NEWS]: {
      name: 'BBC World News',
      domain: 'bbc.com/news/world',
      id: TNewsSourceKey.BBC_WORLD_NEWS,
    },
    [TNewsSourceKey.FOX_NEWS]: {
      name: 'Fox News',
      domain: 'foxnews.com',
      id: TNewsSourceKey.FOX_NEWS,
    },
    [TNewsSourceKey.SKY_NEWS]: {
      name: 'Sky News',
      domain: 'skynews.com',
      id: TNewsSourceKey.SKY_NEWS,
    },
    [TNewsSourceKey.DW]: {
      name: 'Deutsche Welle',
      domain: 'dw.com',
      id: TNewsSourceKey.DW,
    },
    [TNewsSourceKey.NHK_WORLD]: {
      name: 'NHK World-Japan',
      domain: 'nhkworld.com',
      id: TNewsSourceKey.NHK_WORLD,
    },
    [TNewsSourceKey.RFERL]: {
      name: 'Radio Free Europe/Radio Liberty',
      domain: 'rferl.org',
      id: TNewsSourceKey.RFERL,
    },
    [TNewsSourceKey.THE_TELEGRAPH]: {
      name: 'The Telegraph',
      domain: 'telegraph.co.uk',
      id: TNewsSourceKey.THE_TELEGRAPH,
    },
    [TNewsSourceKey.NPR]: {
      name: 'National Public Radio',
      domain: 'npr.org',
      id: TNewsSourceKey.NPR,
    },
  };
export const NEWS_SOURCES: Array<{ id: TNewsSourceKey; name: string }> = [
  { id: TNewsSourceKey.NYT, name: 'The New York Times' },
  { id: TNewsSourceKey.GUARDIAN, name: 'The Guardian' },
  { id: TNewsSourceKey.NEWS_API, name: 'NewsAPI' },
];
export const GUARDIAN_CATEGORY_PARAM_MAPS: Partial<
  Record<TFeedCategories, string>
> = {
  [TFeedCategories.BUSINESS]: 'business',
  [TFeedCategories.ENTERTAINMENT]: 'films',
  [TFeedCategories.HEALTH]: 'healthcare-network',
  [TFeedCategories.SPORTS]: 'sport',
  [TFeedCategories.TECHNOLOGY]: 'technology',
  [TFeedCategories.SCIENCE]: 'science',
};
