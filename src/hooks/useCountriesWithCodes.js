import { useQuery } from '@tanstack/react-query';

const getCountriesWithCodes = async (codes, signal) => {
  const res = await fetch(`https://restcountries.com/v2/alpha?codes=${codes}`); // Comma separated
  if (!res.ok) {
    throw new Error('Error: Something went wrong while fetching data');
  }
  const data = await res.json();
  return data;
};

export default function useCountriesWithCodes(codes, countryCode) {
  return useQuery(
    ['countriesWithCodes', countryCode],
    async ({ signal }) => await getCountriesWithCodes(codes, signal),
    {
      retry: false,
      refetchOnWindowFocus: false,
      refetchInterval: false,
      useErrorBoundary: true,
      enabled: !!codes,
    }
  );
}
