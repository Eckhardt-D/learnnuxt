/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.vue",
    "./layouts/**/*.vue",
    "./components/**/*.vue",
    "./context/guide/**/*.md",
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
  theme: {
    fontFamily: {
      'sans': ['Roboto\\ Condensed', 'Roboto\\ Condensed\\ override'],
    }
  }
}

