import { GUARDIAN_CATEGORY_PARAM_MAPS } from '@constants/feed.constants';
import { fetchGuardianNewsForSearch } from '@services/guardianNews.service';
import { fetchNewsApiTopHeadlines } from '@services/newsApi.service';
import { fetchNytNewsForSearch } from '@services/nytNews.service';
import userPreference from '@services/userPreference.service';
import {
  createNewsDataForGuardian,
  createNewsDataForNewsApi,
  createNewsDataForNyt,
} from '@utils/newsFeed.utils';
import { TNewsSourceKey } from 'types/feed.types';
import {
  TGuardianResponse,
  TNewsAPIArticle,
  TNewsAPIResponse,
  TNytResponse,
  TUseSearchNewsQueryParamas,
} from 'types/newApi.types';
import { useQueries } from './index';

export const useUserNewsQuery = (
  params: TUseSearchNewsQueryParamas,
  options?: { enabled?: boolean },
) => {
  const { sources, categories, countryCode, countryName } =
    userPreference.get();
  const reqQueries = [];
  if (sources.includes(TNewsSourceKey.NEWS_API)) {
    categories.forEach((category) => {
      reqQueries.push({
        queryKey: [
          'sectionNewsApi',
          category,
          params.pageSize,
          params.page,
          countryCode,
        ],
        queryFn: () => {
          return fetchNewsApiTopHeadlines({
            ...params,
            category,
            country: countryCode,
          });
        },
        select: (data: unknown) => createNewsDataForNewsApi((data as { data: TNewsAPIResponse }).data),
        enabled: options?.enabled,
      });
    });
  }
  if (sources.includes(TNewsSourceKey.NYT)) {
    reqQueries.push({
      queryKey: ['nytNews', ...categories],
      queryFn: () =>
        fetchNytNewsForSearch({
          fq: `news_desk.contains:(${categories.join(',')})AND20glocations:(${countryName})`,
        }),
      select: (data: unknown) =>
        createNewsDataForNyt((data as { data: TNytResponse }).data),
      enabled: options?.enabled,
    });
  }
  if (sources.includes(TNewsSourceKey.GUARDIAN)) {
    categories.forEach((category) => {
      reqQueries.push({
        queryKey: ['guardianNews', category],
        queryFn: () =>
          fetchGuardianNewsForSearch({
            section: GUARDIAN_CATEGORY_PARAM_MAPS[category],
          }),
        select: (data: unknown) =>
          createNewsDataForGuardian((data as { data: TGuardianResponse }).data),
        enabled: options?.enabled,
      });
    });
  }
  const queries = useQueries<TNewsAPIArticle[]>({
    queries: reqQueries,
  });

  const isLoading = queries.some((q) => q.isLoading);
  const isError = queries.every((q) => q.isError);
  let data: TNewsAPIArticle[] = [];
  queries.forEach((query) =>
    data.push(...((query.data as TNewsAPIArticle[]) ?? [])),
  );

  return { data, isLoading, isError };
};
