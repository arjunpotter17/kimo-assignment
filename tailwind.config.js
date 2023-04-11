/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'IBM-Plexo': ['IBM Plex Mono', 'serif']
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
}
