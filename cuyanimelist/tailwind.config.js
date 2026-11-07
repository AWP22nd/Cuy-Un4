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
      warna:{
        primary: '#c05d5d',
        accent: '#ffc639',
        secondary: '#393e46',
        dark: '#222831'
      },
      // Top-level colors for direct use
      "warna-primary": "#c05d5d",
      "warna-accent": "#ffc639",
      "warna-secondary": "#393e46",
      "warna-dark": "#222831"
    }
  },
  plugins: [],
}
