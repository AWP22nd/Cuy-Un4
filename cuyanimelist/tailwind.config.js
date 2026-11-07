/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImages: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      // Top-level colors for direct use
      "warna-primary": "#eeeeee",
      "warna-accent": "#3c00ff",
      "warna-secondary": "#393e46",
      "warna-dark": "#222831",
      "warna-warning": "#c41919"
    }
  },
  plugins: [],
}
