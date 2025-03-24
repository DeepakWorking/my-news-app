import { fetchGuardianNewsForSearch } from '@services/guardianNews.service';
import { fetchNewsApiNews } from '@services/newsApi.service';
import { fetchNytNewsForSearch } from '@services/nytNews.service';
import { TGuardianResponse, TNewsAPIArticle, TNytResponse, TUseSearchNewsQueryParamas } from '@types/newApi.types';
import { createNewsDataForGuardian, createNewsDataForNewsApi, createNewsDataForNyt } from '@utils/newsFeed.utils';
import { useQueries } from './index';



export const useSearchNewQuery = (
  params: TUseSearchNewsQueryParamas,
  options?: { enabled?: boolean }
) => {
  const queries = useQueries<TNewsAPIArticle[]>({
    queries: [
      {
        queryKey: ["searchNewsApi", params.pageSize, params.page, params.q],
        queryFn: () => fetchNewsApiNews(params),
        select: (data) => createNewsDataForNewsApi(data),
        enabled: options?.enabled,
      },
      {
        queryKey: ["guardianNews", params.pageSize, params.page, params.q],
        queryFn: () => fetchGuardianNewsForSearch(params),
        select: (data) => createNewsDataForGuardian((data as { data: TGuardianResponse }).data),
        enabled: options?.enabled,
      },
      {
        queryKey: ["nytNews", params.pageSize, params.page, params.q],
        queryFn: () => fetchNytNewsForSearch({ q: params.q }),
        select: (data) => createNewsDataForNyt((data as { data: TNytResponse }).data),
        enabled: options?.enabled,
      },
    ],
  });

  const [newsApiResult, guardianResult, nytResult] = queries;
  const isLoading = queries.some((q) => q.isLoading);
  const isError = queries.some((q) => q.isError);

  const data: TNewsAPIArticle[] = [
    ...(newsApiResult.data as TNewsAPIArticle[] ?? []),
    ...(guardianResult.data as TNewsAPIArticle[] ?? []),
    ...(nytResult.data as TNewsAPIArticle[] ?? []),
  ];
  return { data, isLoading, isError };
};