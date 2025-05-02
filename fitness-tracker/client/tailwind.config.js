/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./client/src/**/*.{vue,js,ts,jsx,tsx}",
    "./client/public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',  // Indigo
        secondary: '#22D3EE', // Cyan
        accent: '#F59E0B',    // Amber
        background: '#F9FAFB', // Light Gray
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};