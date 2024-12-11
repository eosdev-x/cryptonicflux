/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#0f1729',
          800: '#1a1f2e',
          700: '#2d3748',
        },
      },
    },
  },
  plugins: [],
};