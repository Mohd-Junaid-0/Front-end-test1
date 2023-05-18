/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx, ts, js, tsx}"],
  theme: {
    screens: {
      'desktop': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'laptop': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'ipad': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'tablate': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'mobile': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    plugins: [],
  },
};