/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-cyan": "hsl(179deg, 81%, 29%)",
        "dark-grey-blue": "hsl(215deg, 19%, 25%)",
        "pale-orange": "hsl(25deg, 94%, 86%)",
        "light-cream": "hsl(43deg, 78%, 98%)",
        "light-cream-transparent": "hsl(43deg, 78%, 98%, 50%)",
        grey: "hsl(215deg, 5%, 54%)",
        "light-gray": "hsl(43deg, 30%, 94%)",
      },
    },
  },
  plugins: [],
};
