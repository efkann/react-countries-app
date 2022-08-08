import React, { useState } from 'react';
import { MoonFilledIcon, MoonIcon } from './Icons';

function handleDarkMode() {
  const selectedTheme = localStorage.getItem('theme');
  if (selectedTheme === 'dark') {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}

export default function Header() {
  const [isDarkTheme, setIsDarkTheme] = useState(
    document.documentElement.classList.contains('dark')
  );
  return (
    <header className="py-8 bg-white dark:bg-darkblue-1 text-darkblue-3 dark:text-lightgray  shadow-md">
      <div className=" max-w-[1920px] mx-auto flex gap-2 justify-between items-center px-8 md:px-16">
        <h1 className="text-base sm:text-xl font-extrabold">
          Where in the world ?
        </h1>
        <button
          className="flex items-center gap-1 sm:gap-2"
          onClick={() => {
            handleDarkMode();
            setIsDarkTheme(!isDarkTheme);
          }}
        >
          {isDarkTheme ? <MoonFilledIcon /> : <MoonIcon />}

          <span className="font-semibold text-sm lg:text-base">Dark Mode</span>
        </button>
      </div>
    </header>
  );
}
