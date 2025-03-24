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
export type TUseSearchNewsQueryParamas = Omit<
  TNewAPIParams,
  'sources' | 'category' | 'country'
>;
export type TNytMultimedia = {
  subtype: string;
  url: string;
};

export type TNytDoc = {
  byline: { original: string };
  headline: { main: string };
  abstract: string;
  web_url: string;
  multimedia: TNytMultimedia[];
  pub_date: string;
  lead_paragraph: string;
};

export type TNytResponse = {
  response: {
    docs: TNytDoc[];
  }
};
export type TGuardianFields = {
  byline: string;
  trailText: string;
  thumbnail?: string;
  bodyText: string;
};

export type TGuardianResult = {
  webTitle: string;
  webUrl: string;
  webPublicationDate: string;
  fields?: TGuardianFields;
};

export type TGuardianResponse = {
  response: {
    results: TGuardianResult[];
  }
};