import Dropdown from '@components/shared/ui/Dropdown';
import { NEWS_API_ORG_SOURCES } from '@constants/feed.constants';
import { useFeedFilters } from '@contexts/feedFilterContext';
import { TNewsSourceKey } from '@types/feed.types';
import { useMemo } from 'react';
type TDropdownOption<T> = { label: string; value: T };
const NewsFeedFilters = () => {
  const { setSelectedSources } = useFeedFilters();
  const sourcesOptions: TDropdownOption<TNewsSourceKey>[] = useMemo(
    () =>
      Object.values(NEWS_API_ORG_SOURCES).map((item) => ({
        label: item.name,
        value: item.id,
      })),
    [],
  );
  return (
    <div className="mx-auto flex max-w-screen-2xl flex-wrap items-end justify-between">
      <div className="flex items-end gap-4">
        <Dropdown
          isMulti
          options={sourcesOptions}
          label="Sources"
          placeholder="Select Sources"
          className="w-60"
          onChange={(values) => {
            setSelectedSources(
              values.map((item: TDropdownOption<TNewsSourceKey>) => item.value),
            );
          }}
        />
        {/* <DatePicker maxDate={getFormattedDate(new Date(), 'YYYY-MM-DD')} /> */}
      </div>
    </div>
  );
};
export default NewsFeedFilters;
