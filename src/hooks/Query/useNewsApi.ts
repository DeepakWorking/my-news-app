import { GUARDIAN_CATEGORY_PARAM_MAPS } from '@constants/feed.constants';
import { fetchGuardianNewsForSearch } from '@services/guardianNews.service';
import {
  fetchNewsApiNews,
  fetchNewsApiTopHeadlines
} from '@services/newsApi.service';
import { fetchNytNewsForSearch } from '@services/nytNews.service';
import { createNewsDataForGuardian, createNewsDataForNewsApi, createNewsDataForNyt } from '@utils/newsFeed.utils';
import { TFeedCategories } from 'types/feed.types';
import { TGuardianResponse, TNewAPIParams, TNewsAPIArticle, TNewsAPIResponse, TNytResponse } from 'types/newApi.types';
import { useQueries, useQuery } from './index';

type TUseGetNewsForCategory = Omit<TNewAPIParams, 'sources'> & { category: TFeedCategories };

type TUseGetNewsForHome = Omit<TNewAPIParams, 'category'>;
export const useGetNewsForHome = (
  params: TUseGetNewsForHome,
  options?: { enabled?: boolean },
) => {
  return useQuery({
    queryKey: [
      'allNewsApi',
      params.sources,
      params.pageSize,
      params.page,
      params.q,
    ],
    queryFn: () => {
      return fetchNewsApiNews(params);
    },
    select: (data) => data.data as TNewsAPIResponse,
    ...options,
  });
};
export const useGetNewsForSections = (
  params: TUseGetNewsForCategory,
  options?: { enabled?: boolean },
) => {
  const queries = useQueries<TNewsAPIArticle[]>({
    queries: [
      {
        queryKey: ['sectionNewsApi', params.pageSize, params.page, params.category],
        queryFn: () => fetchNewsApiTopHeadlines(params),
        select: (data) => createNewsDataForNewsApi((data as { data: TNewsAPIResponse }).data),
        enabled: options?.enabled,
      },
      {
        queryKey: ['guardianNews', params.category],
        queryFn: () => fetchGuardianNewsForSearch({
          section: GUARDIAN_CATEGORY_PARAM_MAPS[params.category],
        }),
        select: (data) =>
          createNewsDataForGuardian((data as { data: TGuardianResponse }).data),
        enabled: options?.enabled,
      },
      {
        queryKey: ['nytNews', params.category],
        queryFn: () => fetchNytNewsForSearch({
          fq: `news_desk.contains:(${params.category})`,
        }),
        select: (data) =>
          createNewsDataForNyt((data as { data: TNytResponse }).data),
        enabled: options?.enabled,
      },
    ],
  });

  const [newsApiResult, guardianResult, nytResult] = queries;
  const isLoading = queries.some((q) => q.isLoading);
  const isError = queries.every((q) => q.isError);
  const data: TNewsAPIArticle[] = [
    ...((newsApiResult.data as TNewsAPIArticle[]) ?? []),
    ...((guardianResult.data as TNewsAPIArticle[]) ?? []),
    ...((nytResult.data as TNewsAPIArticle[]) ?? []),
  ];
  return { data, isLoading, isError };
};