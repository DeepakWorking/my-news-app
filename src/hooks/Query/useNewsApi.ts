import {
  fetchNewsApiNews,
  fetchNewsApiTopHeadlines,
} from '@services/newsApi.service';
import { TNewAPIParams, TNewsAPIResponse } from 'types/newApi.types';
import { useQuery } from './index';

type TUseGetNewsForCategory = Omit<TNewAPIParams, 'sources'>;
export const useGetNewsForSections = (
  params: TUseGetNewsForCategory,
  options?: { enabled?: boolean },
) => {
  return useQuery({
    queryKey: [
      'sectionNewsApi',
      params.category,
      params.pageSize,
      params.page,
      params.q,
    ],
    queryFn: () => {
      return fetchNewsApiTopHeadlines(params);
    },
    select: (data) => data.data as TNewsAPIResponse,
    ...options,
  });
};
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
