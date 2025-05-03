module.exports = {
  content: [
    './client/src/**/*.{vue,js,ts,jsx,tsx}',
    './client/public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        secondary: '#22D3EE',
        accent: '#F59E0B',
        background: '#F9FAFB',
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