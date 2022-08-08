import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { BackIcon } from '../components/Icons';
import useCountriesWithCodes from '../hooks/useCountriesWithCodes';
import useCountry from '../hooks/useCountry';

export default function Details() {
  const { countryCode } = useParams();
  const { data, isSuccess, isLoading } = useCountry(countryCode);
  const bordersCodes = data?.borders?.join(',');
  const { data: bordersData } = useCountriesWithCodes(
    bordersCodes,
    countryCode
  );

  const hasNoBorders = isSuccess === true && !(bordersCodes?.length > 0);

  return (
    <section className=" mt-12 lg:mt-20 pb-16 text-darkblue-3 dark:text-lightgray">
      <Link
        to="../"
        className="px-8 py-2 flex max-w-fit bg-white dark:bg-darkblue-1 rounded-md shadow-btn-back items-center font-semibold"
      >
        <BackIcon />
        <span className="ml-2">
          <span className="sr-only">Go</span>Back
        </span>
      </Link>
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-32 mt-16 lg:items-center">
        {isLoading ? (
          <div className="bg-slate-200 dark:bg-slate-600 aspect-8/5 max-w-[800px] max-h-[500px]"></div>
        ) : (
          <img
            className="object-cover bg-slate-200 dark:bg-slate-600 aspect-8/5"
            width={800}
            height={500}
            src={data?.flag || undefined}
            alt={`${data?.name} flag`}
          ></img>
        )}
        <div className="flex flex-col">
          <h2 className="text-2xl lg:text-3xl font-extrabold min-h-[36px]">
            {data?.name}
          </h2>
          <dl className="mt-4 flex justify-between flex-wrap gap-8">
            <div>
              <div className="flex mt-2">
                <dt className="font-semibold">Native Name:</dt>
                <dd className="ml-1 font-light">{data?.nativeName}</dd>
              </div>
              <div className="flex mt-2">
                <dt className="font-semibold">Population:</dt>
                <dd className="ml-1 font-light">
                  {data?.population?.toLocaleString()}
                </dd>
              </div>
              <div className="flex mt-2">
                <dt className="font-semibold">Region:</dt>
                <dd className="ml-1 font-light">{data?.region}</dd>
              </div>
              <div className="flex mt-2">
                <dt className="font-semibold">Sub Region:</dt>
                <dd className="ml-1 font-light">{data?.subregion}</dd>
              </div>
              <div className="flex mt-2">
                <dt className="font-semibold">Capital:</dt>
                <dd className="ml-1 font-light">{data?.capital}</dd>
              </div>
            </div>
            <div>
              <div className="flex mt-2">
                <dt className="font-semibold">Top Level Domain:</dt>
                <dd className="ml-1 font-light">{data?.topLevelDomain}</dd>
              </div>
              <div className="flex mt-2">
                <dt className="font-semibold">Currencies:</dt>
                <dd className="ml-1 font-light">
                  {data?.currencies?.map((currency, ind, currencies) => (
                    <span key={currency.code}>
                      {currency.name}
                      {ind === currencies.length - 1 ? '' : ', '}
                    </span>
                  ))}
                </dd>
              </div>
              <div className="flex mt-2">
                <dt className="font-semibold">Languages:</dt>
                <dd className="ml-1 font-light flex flex-wrap">
                  {data?.languages.map((language, ind, languages) => (
                    <span key={language.name}>
                      {language.name}
                      {ind === languages.length - 1 ? '' : ', '}
                    </span>
                  ))}
                </dd>
              </div>
            </div>
          </dl>
          <div className="mt-16 items-center flex flex-wrap gap-4 min-h-[36px]">
            <span className="font-semibold">Border Countries:</span>
            {hasNoBorders ? <span className="font-light">None</span> : null}
            {bordersData?.map((border) => (
              <Link
                key={border?.alpha2Code}
                to={`/${border?.alpha2Code}`}
                className="px-6 py-1 shadow-btn dark:bg-darkblue-1 rounded-sm text-sm font-light"
              >
                {border?.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
