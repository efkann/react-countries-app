import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { SelectorIcon } from './Icons';

const defaultSelectValue = { id: -1, name: 'Filter by Region' };

const regions = [
  { id: 0, name: 'All Regions' },
  { id: 1, name: 'Africa' },
  { id: 2, name: 'America' },
  { id: 3, name: 'Asia' },
  { id: 4, name: 'Europe' },
  { id: 5, name: 'Oceania' },
];

export default function Select({ isLoading, filters, setFilters }) {
  const [selected, setSelected] = useState(defaultSelectValue);

  return (
    <div className="w-56 mt-8 md:mt-0">
      <Listbox
        value={selected}
        onChange={(value) => {
          setSelected(value);
          setFilters({
            ...filters,
            region: value.id === 0 ? '' : value.name,
          });
        }}
        disabled={isLoading}
      >
        <div className="relative mt-1">
          <Listbox.Button
            className={`relative w-full cursor-default rounded-lg bg-white text-darkblue-3 dark:text-lightgray dark:bg-darkblue-1 py-5 pl-6 font-medium pr-8   text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 sm:text-sm ${
              isLoading ? 'bg-slate-100 cursor-not-allowed' : ''
            } `}
          >
            <span className="block truncate font-semibold">
              {selected.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
              <SelectorIcon aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-darkblue-1 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {regions.map((region) => (
                <Listbox.Option
                  key={region.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-6 pr-4 ${
                      active
                        ? 'bg-blue-100 dark:bg-slate-100'
                        : 'text-darkblue-3 dark:text-lightgray'
                    }`
                  }
                  value={region}
                >
                  {() => (
                    <>
                      <span className={'block truncate font-semibold '}>
                        {region.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
