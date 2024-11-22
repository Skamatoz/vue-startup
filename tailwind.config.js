/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {

    extend: {
      colors: {
        PoscetFon: '#F8F9FA',
        PoscetHover: '#E5E9EC',

      }
    },
  },
  plugins: [],
}
