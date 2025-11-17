/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        archer: {
          dark: '#080612',
          mid: '#141129',
          purple: '#8b63ff',
          lilac: '#b19cff',
          gray: '#b6bacb',
          white: '#f6f5ff',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        card: '0 20px 40px rgba(11, 6, 34, 0.35)',
      },
      backgroundImage: {
        'archer-hero': 'radial-gradient(circle at top right, #271f56, #080612 60%)',
      },
    },
  },
  plugins: [],
};
