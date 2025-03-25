import type { TNewsAPIArticle } from 'types/newApi.types';

export const createNewsDataForGuardian = (response: any): TNewsAPIArticle[] => {
  return response.response.results.map((item: any) => ({
    source: { id: 'guardian', name: 'Guardian' },
    author: 'Guardian',
    title: item.webTitle,
    description: '',
    url: item.webUrl,
    urlToImage: item.fields?.thumbnail || '',
    publishedAt: item.webPublicationDate,
    content: '',
  }));
};

export const createNewsDataForNyt = (response: any): TNewsAPIArticle[] => {
  return response.response.docs.map((item: any) => ({
    source: { id: 'nyt', name: 'New York Times' },
    author: item.byline.original,
    title: item.headline.main,
    description: item.abstract,
    url: item.web_url,
    urlToImage: `https://static01.nyt.com/${
      item.multimedia?.find((media: any) => media.subtype === 'thumbnail')?.url
    }`,
    publishedAt: item.pub_date,
    content: item.lead_paragraph,
  }));
};
export const createNewsDataForNewsApi = (response: any): TNewsAPIArticle[] => {
  return response.articles;
};
