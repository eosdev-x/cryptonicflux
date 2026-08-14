/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: '#f0ebe1',
        mute: '#9a9488',
        paper: '#1a1915',
        line: '#2a2822',
        accent: '#d6f25c',
      },
    },
  },
  plugins: [],
};
