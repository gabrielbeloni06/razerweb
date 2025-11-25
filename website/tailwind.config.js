/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
        sans: ['"Chakra Petch"', 'sans-serif'],
        },
      colors: {
        'razer-green': '#44d62c',
      }
    },
  },
  plugins: [],
}