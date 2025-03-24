import Dropdown from "@components/shared/ui/Dropdown";
import { useGetCountries } from "@hooks/Query/useCountriesQuery";
import userPreference from "@services/userPreference.service";
import { useMemo, useState } from "react";

type TCountryOption = {
    label: string,
    value: string
}
const CountriesDropdown = () => {
    const { data: countryData, isLoading: isLoadingCountryData } = useGetCountries();

    const initialCountry = userPreference.get().countryCode;

    const [selectedCountry, setSelectedCountry] = useState(initialCountry);

    const countryOptions: TCountryOption[] = useMemo(() =>
        countryData?.map((country: any) => ({
            value: country.code,
            label: (
                <div className="flex items-center gap-2">
                    <img src={country.flag} alt={country.cca2} className="w-5 h-5 rounded-full" />
                    <span>{country.name} ({country.code})</span>
                </div>
            ),
            name: country.name
        })) || [],
        [countryData]);

    const selectedCountryOption = useMemo(() =>
        countryOptions.find(option => option.value === selectedCountry) || null,
        [selectedCountry, countryOptions]);

    const handleCountryChange = (newSelection: { value: string, name: string }) => {
        setSelectedCountry(newSelection.value as string);
        userPreference.set({
            countryName: newSelection.name,
            countryCode: newSelection.value
        });
    };

    return (
        <div className="flex gap-8 items-center">
            <label htmlFor="country-dropdown" className="text-textPrimary dark:text-textPrimary-dark">
                Choose Country
            </label>
            <Dropdown
                className="w-52"
                id="country-dropdown"
                value={selectedCountryOption}
                onChange={handleCountryChange}
                disabled={isLoadingCountryData}
                options={countryOptions}
                placeholder="Select a country"
                aria-describedby="country-loading-status"
                aria-invalid={isLoadingCountryData ? "true" : "false"}
            />
        </div>
    );
};

export default CountriesDropdown;
