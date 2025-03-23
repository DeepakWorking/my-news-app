import { fetchGuardianNewsForSearch } from '@services/guardianNews.service';
import { fetchNewsApiNews } from '@services/newsApi.service';
import { fetchNytNewsForSearch } from '@services/nytNews.service';
import { TNewAPIParams, TNewsAPIArticle } from '@types/newApi.types';
import { useQueries } from './index';

type TUseSearchNewsQueryParamas = Omit<
  TNewAPIParams,
  'sources' | 'category' | 'country'
>;
type NytMultimedia = {
  subtype: string;
  url: string;
};

type NytDoc = {
  byline: { original: string };
  headline: { main: string };
  abstract: string;
  web_url: string;
  multimedia: NytMultimedia[];
  pub_date: string;
  lead_paragraph: string;
};

type NytResponse = {
  response: {
    docs: NytDoc[];
  }
};
type GuardianFields = {
  byline: string;
  trailText: string;
  thumbnail: string;
  bodyText: string;
};

type GuardianResult = {
  webTitle: string;
  webUrl: string;
  webPublicationDate: string;
  fields: GuardianFields;
};

type GuardianResponse = {
  response: {
    results: GuardianResult[];
  }
};
export const useSearchNewQuery = (
  params: TUseSearchNewsQueryParamas,
  options?: { enabled?: boolean },
) => {
  const queries = useQueries<TNewsAPIArticle[]>({
    queries: [
      {
        queryKey: ['searchNews', params.pageSize, params.page, params.q],
        queryFn: async (): Promise<TNewsAPIArticle[]> => {
          try {
            const response = await fetchNewsApiNews(params);
            return response.data.articles;
          } catch (err) {
            console.error(err);
            return [];
          }
        },
        enabled: options?.enabled,
      },
      {
        queryKey: ['guardianNews', params.pageSize, params.page, params.q],
        queryFn: async (): Promise<TNewsAPIArticle[]> => {
          try {
            const response: { data: GuardianResponse } =
              await fetchGuardianNewsForSearch(params.q as string);
            return response.data.response.results.map((item) => ({
              source: {
                id: 'guardian',
                name: 'Guardian',
              },
              author: 'Guardian',
              title: item.webTitle,
              description: '',
              url: item.webUrl,
              urlToImage: '',
              publishedAt: item.webPublicationDate,
              content: '',
            }));
          } catch (error) {
            console.error(error);
            return [];
          }

        },
        enabled: options?.enabled,
      },
      {
        queryKey: ['nytNews', params.pageSize, params.page, params.q],
        queryFn: async (): Promise<TNewsAPIArticle[]> => {
          try {
            const response: { data: NytResponse } = await fetchNytNewsForSearch(
              params.q as string,
            );
            return response.data.response.docs.map((item) => ({
              source: {
                id: 'nyt',
                name: 'New York Times',
              },
              author: item.byline.original,
              title: item.headline.main,
              description: item.abstract,
              url: item.web_url,
              urlToImage: item.multimedia?.find(
                (media) => media.subtype === 'thumbnail',
              )?.url,
              publishedAt: item.pub_date,
              content: item.lead_paragraph,
            }));
          } catch (error) {
            console.error(error);
            return [];
          }
        },
        enabled: options?.enabled,
      },
    ],
  });

  const [newsApiResult, guardianResult, nytResult] = queries;

  const isLoading = queries.some((q) => q.isLoading);
  const isError = queries.some((q) => q.isError);
  const data: TNewsAPIArticle[] = [
    ...((newsApiResult.data ?? []) as TNewsAPIArticle[]),
    ...((guardianResult.data ?? []) as TNewsAPIArticle[]),
    ...((nytResult.data ?? []) as TNewsAPIArticle[]),
  ];

  return { data, isLoading, isError };
};
