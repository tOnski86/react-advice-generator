/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      white: 'hsl(193, 38%, 86%)',
      green: 'hsl(150, 100%, 66%)',
      blue: 'hsl(217, 19%, 38%)',
      grey: 'hsl(217, 19%, 24%)',
      black: 'hsl(218, 23%, 16%)',
    },
    fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
    },
  },
  plugins: [],
};

/*
- Mobile: 375px
- Desktop: 1440px

- Font size (quote): 28px
- Weights: 800
*/
