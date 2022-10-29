/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#3A66F9"
      },
      screens : {
        navBreakpoint : '1024px'
      },
      fontFamily : {
        primary : ['Montserrat', 'sans-serif'],
        secondary : ['Nunito', 'sans-serif'],
        tertiary : ['din']
      },
      gridTemplateColumns : {
        withDevider : '1fr 4px 1fr',
        scheduleTable : '1fr 25% 25%'
      }
    },
  },
  plugins: [],
}
