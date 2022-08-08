import React from 'react';
import { Link } from 'react-router-dom';

export default function CountryCard({
  isLoading,
  flagUrl,
  name,
  population,
  region,
  capital,
}) {
  return (
    <article className="flex flex-col bg-white dark:bg-darkblue-1 text-darkblue-3 dark:text-lightgray rounded-lg shadow-md">
      <div
        aria-hidden={!isLoading}
        className={`${isLoading ? 'block' : 'hidden'}`}
      >
        <div
          aria-hidden="true"
          className="rounded-t-lg aspect-8/5 bg-slate-200 dark:bg-slate-600"
        ></div>
        <div aria-hidden="true" className="px-8 pt-4 pb-12 flex flex-col">
          <header>
            <div className="mt-2 h-7"></div>
          </header>
          <dl className="mt-4 flex flex-col text-base">
            <div className="flex">
              <dt className="font-semibold">Population:</dt>
            </div>
            <div className="flex">
              <dt className="font-semibold">Region:</dt>
            </div>
            <div className="flex">
              <dt className="font-semibold">Capital:</dt>
            </div>
          </dl>
        </div>
        <span className="sr-only">Loading</span>
      </div>
      <div
        to={name}
        aria-busy={isLoading}
        className={`${isLoading ? 'hidden' : 'block'}`}
      >
        <img
          src={flagUrl}
          width={800}
          height={500}
          alt={`${name} flag`}
          className="rounded-t-lg object-cover aspect-8/5 bg-slate-100 dark:bg-slate-600"
        ></img>
        <div className="px-8 pt-4 pb-12 flex flex-col">
          <header>
            <h2 className="mt-2 font-bold text-xl truncate">{name}</h2>
          </header>
          <dl className="mt-4 flex flex-col text-base">
            <div className="flex">
              <dt className="font-semibold">Population:</dt>
              <dd className="ml-2 truncate font-light">
                {population?.toLocaleString()}
              </dd>
            </div>
            <div className="flex">
              <dt className="font-semibold">Region:</dt>
              <dd className="ml-2 truncate font-light">{region}</dd>
            </div>
            <div className="flex">
              <dt className="font-semibold">Capital:</dt>
              <dd className="ml-2 truncate font-light">{capital}</dd>
            </div>
          </dl>
        </div>
      </div>
    </article>
  );
}
