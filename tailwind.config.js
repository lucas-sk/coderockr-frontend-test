/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"]
      },
      colors: {
        shaft: {
          950: "#2d2d2d"
        },
        gamboge: {
          500: "#f1a10a"
        },
        tumbleweed: {
          950: "#342303"
        },
        daintree: {
          950: "#032937"
        }
      }
    },
  },
  plugins: [],
}

