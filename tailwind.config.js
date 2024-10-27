module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
};