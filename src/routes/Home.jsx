import React, { useState } from 'react';
import useCountries from '../hooks/useCountries';
import CountryCard from '../components/CountryCard';
import Select from '../components/Select';
import { Link } from 'react-router-dom';
import Search from '../components/Search';

const SKELETON_CARDS_COUNT = 16;

const skeletonCards = Array.from({ length: SKELETON_CARDS_COUNT }, (_, ind) => {
  return {
    id: ind + 1,
  };
});

export default function Home() {
  const [filters, setFilters] = useState({});
  const { data, isLoading } = useCountries(filters);

  const handleSearch = (e) => {
    setFilters({ ...filters, name: e.target.value });
  };

  return (
    <>
      <section className="flex flex-col md:flex-row md:justify-between md:items-center mt-8 md:mt-16">
        <Search isLoading={isLoading} handleSearch={handleSearch} />
        <Select
          isLoading={isLoading}
          filters={filters}
          setFilters={setFilters}
        />
      </section>
      {data?.length === 0 ? (
        <p className="mt-16 text-center italic font-semibold dark:text-lightgray">
          Couldn't find any country satisfying your filters.
        </p>
      ) : null}
      <section className="grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mt-8 md:mt-16">
        {isLoading
          ? skeletonCards.map((skeleton) => {
              return <CountryCard key={skeleton.id} isLoading={true} />;
            })
          : null}
        {data?.map((country) => {
          return (
            <Link
              to={country?.alpha3Code?.toLowerCase()}
              key={country?.alpha3Code}
            >
              <CountryCard
                flagUrl={country?.flag}
                name={country?.name}
                population={country?.population}
                region={country?.region}
                capital={country?.capital}
                isLoading={false}
              />
            </Link>
          );
        })}
      </section>
    </>
  );
}
