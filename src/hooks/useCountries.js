import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';

const getCountries = async (signal) => {
  const res = await fetch('https://restcountries.com/v2/all', {
    signal,
  });

  if (!res.ok) {
    throw new Error('Error: Something went wrong while fetching data');
  }
  const data = await res.json();
  return data;
};

const filterCountries = (country, filters) => {
  let filtered = false;
  for (const key in filters) {
    if (country[key].toLowerCase().includes(filters[key].toLowerCase())) {
      filtered = true;
    } else {
      filtered = false;
      return filtered;
    }
  }
  return filtered;
};

const applyFilters = (countries, filters) => {
  const isFiltersEmpty = Object.keys(filters).length === 0;
  if (isFiltersEmpty) {
    return countries;
  }
  return countries.filter((country) => filterCountries(country, filters));
};

export default function useCountries(filters) {
  return useQuery(
    ['allCountries'],
    async ({ signal }) => await getCountries(signal),
    {
      retry: false,
      refetchOnWindowFocus: false,
      refetchInterval: false,
      useErrorBoundary: true,
      select: useCallback(
        (countries) => applyFilters(countries, filters),
        [filters]
      ),
    }
  );
}
