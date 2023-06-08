/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        ubuntu: ['Ubuntu', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif']
      }
    },
  },
  plugins: [],
}

