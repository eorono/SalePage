/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0A0A0A',
          card: '#141414',
          primary: '#6366F1',
          secondary: '#A855F7',
        }
      }
    },
  },
  plugins: [],
}