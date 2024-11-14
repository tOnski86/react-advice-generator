/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        glowBig: [
          '0 0px 20px rgba(82,255, 168, 0.9)',
          '0 0px 65px rgba(82,255, 168, 0.4)',
        ],
        glowSmall: [
          '0 0px 20px rgba(82,255, 168, 0.7)',
          '0 0px 65px rgba(82,255, 168, 0.2)',
        ],
      },
      keyframes: {
        moveUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '80%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)', opacity: '100%' },
        },
        expand: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '80%': { transform: 'scale(1.04)' },
          '100%': { transform: 'scale(1)', opacity: '100%' },
        },
      },
      animation: {
        moveUp: 'moveUp .5s ease-in-out',
        expand: 'expand .5s ease-in-out',
      },
    },
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
