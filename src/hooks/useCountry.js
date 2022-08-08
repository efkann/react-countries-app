import { useQuery } from '@tanstack/react-query';

const getCountry = async (countryCode, signal) => {
  const res = await fetch(`https://restcountries.com/v2/alpha/${countryCode}`, {
    signal,
  });

  if (!res.ok) {
    throw new Error('Error: Something went wrong while fetching data');
  }
  const data = await res.json();
  return data;
};

export default function useCountry(countryCode) {
  return useQuery(
    ['country', countryCode],
    async ({ signal }) => await getCountry(countryCode, signal),
    {
      retry: false,
      refetchOnWindowFocus: false,
      refetchInterval: false,
      useErrorBoundary: true,
    }
  );
}
