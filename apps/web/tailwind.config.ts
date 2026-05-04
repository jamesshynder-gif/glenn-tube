import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-orange-400': '#fb923c',
        'brand-orange-500': '#f97316',
        'brand-orange-600': '#ea580c',
        'brand-black': '#0a0a0a',
        'brand-surface': '#171717',
        'brand-muted': '#737373',
      },
      boxShadow: {
        focus: '0 0 0 2px rgba(249, 115, 22, 0.55)',
      },
    },
  },
  plugins: [],
};

export default config;
