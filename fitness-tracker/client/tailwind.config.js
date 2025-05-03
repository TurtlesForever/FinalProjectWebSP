module.exports = {
  content: [
    './client/src/**/*.{vue,js,ts,jsx,tsx}',  // Ensure all your components are included
    './client/public/index.html',            // Include the public index.html file
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',    // Primary color
        secondary: '#22D3EE',  // Secondary color
        accent: '#F59E0B',     // Accent color
        background: '#F9FAFB', // Background color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Make sure you have Inter font installed
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),      // Tailwind forms plugin
    require('@tailwindcss/typography'), // Tailwind typography plugin
  ],
  // Purge unused CSS in production
  purge: {
    enabled: process.env.NODE_ENV === 'production', // Purge unused classes in production
    content: [
      './client/src/**/*.{vue,js,ts,jsx,tsx}',  // Make sure all files are covered
      './client/public/index.html',            // Include the public index.html file
    ],
  },
};