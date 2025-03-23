export type TNewAPIParams = {
  sources?: string;
  q?: string;
  category?: string;
  country?: string;
  pageSize?: number;
  page?: number;
};
export type TNewsAPIResponse = {
  status: string;
  totalResults: number;
  articles: TNewsAPIArticle[];
};
export type TNewsAPIArticle = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content: string;
};
