/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}', './index.html'], 
  theme: {
    extend: {
      // we can add boxShadow here
      boxShadow: {
        custom: '0px 0px 10px 0px #222222', 
      },
    },
  },
  plugins: [],
};