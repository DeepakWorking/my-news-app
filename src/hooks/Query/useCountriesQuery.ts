import { useQuery } from '@hooks/Query/index';
import { fetchCountries } from '@services/countries.service';

const supportedCountries = [
  'Argentina',
  'Australia',
  'Austria',
  'Belgium',
  'Brazil',
  'Bulgaria',
  'Canada',
  'China',
  'Colombia',
  'Cuba',
  'Czech Republic',
  'Egypt',
  'France',
  'Germany',
  'Greece',
  'Hong Kong',
  'Hungary',
  'India',
  'Indonesia',
  'Ireland',
  'Israel',
  'Italy',
  'Japan',
  'Latvia',
  'Lithuania',
  'Malaysia',
  'Mexico',
  'Morocco',
  'Netherlands',
  'New Zealand',
  'Nigeria',
  'Norway',
  'Philippines',
  'Poland',
  'Portugal',
  'Romania',
  'Russia',
  'Saudi Arabia',
  'Serbia',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'South Africa',
  'South Korea',
  'Sweden',
  'Switzerland',
  'Taiwan',
  'Thailand',
  'Turkey',
  'UAE',
  'Ukraine',
  'United Kingdom',
  'United States',
  'Venezuela',
];
export const useGetCountries = (options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: ['countriesList'],
    queryFn: async () => {
      const response = await fetchCountries();
      return response.data
        .filter((country: any) =>
          supportedCountries.includes(country.name.common),
        )
        .map((country: any) => ({
          name: country.name.common,
          code: country.cca2,
          flag: country.flags.svg,
        }));
    },
    ...options,
  });
};
