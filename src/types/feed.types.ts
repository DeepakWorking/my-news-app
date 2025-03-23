export enum TFeedCategories {
  BUSINESS = 'business',
  ENTERTAINMENT = 'entertainment',
  GENERAL = 'general',
  HEALTH = 'health',
  SCIENCE = 'science',
  SPORTS = 'sports',
  TECHNOLOGY = 'technology',
  MY_FEED = 'my_feed',
  ALL_NEWS = 'all_news'
}
export type TFeedCategoryItem = {
  id: TFeedCategories;
  label: string;
};
export enum TNewsSourceKey {
  BBC_NEWS = 'bbc-news',
  CNN = 'cnn',
  REUTERS = 'reuters',
  NYT = 'nyt',
  AP = 'ap',
  AFP = 'afp',
  AL_JAZEERA = 'al-jazeera',
  BLOOMBERG = 'bloomberg',
  WSJ = 'wsj',
  WASHINGTON_POST = 'washington-post',
  DER_SPIEGEL = 'der-spiegel',
  LE_MONDE = 'le-monde',
  BBC_WORLD_NEWS = 'bbc-world-news',
  FOX_NEWS = 'fox-news',
  SKY_NEWS = 'sky-news',
  DW = 'dw',
  NHK_WORLD = 'nhk-world',
  RFERL = 'rferl',
  THE_TELEGRAPH = 'the-telegraph',
  NPR = 'npr',
}
