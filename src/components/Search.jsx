import React from 'react';
import { SearchIcon } from './Icons';

export default function Search({ isLoading, handleSearch }) {
  return (
    <div className="flex items-center shadow-md rounded-md relative  md:w-96">
      <label id="search-label" className="pl-8 sr-only">
        Search for a country
      </label>
      <SearchIcon />
      <input
        id="search"
        type="search"
        aria-labelledby="search-label"
        className={`py-5 px-4 border-0  bg-white dark:bg-darkblue-1 text-darkblue-3 dark:text-lightgray rounded-md pl-[72px] min-w-full font-semibold placeholder:text-sm placeholder:text-gray-400 dark:placeholder:text-gray-300  ${
          isLoading ? 'cursor-not-allowed bg-slate-200' : 'cursor-default'
        }`}
        placeholder={!isLoading ? 'Search for a country...' : null}
        onChange={handleSearch}
        disabled={isLoading}
      ></input>
    </div>
  );
}
