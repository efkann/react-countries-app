/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,jsx,ts,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'darkblue-1': 'hsl(209, 23%, 22%)',
        'darkblue-2': 'hsl(207, 26%, 17%)',
        'darkblue-3': 'hsl(200, 15%, 8%)',
        darkgray: 'hsl(0, 0%, 52%)',
        lightgray: 'hsl(0, 0%, 98%)',
        white: 'hsl(0, 0%, 100%)',
      },
      aspectRatio: {
        '8/5': '8 / 5',
      },
    },
  },
  plugins: [],
};
