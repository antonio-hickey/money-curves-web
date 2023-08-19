/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-light': '#0a1009',
        'text-dark': '#e4eee2',
        'background-light': '#e4eee2',
        'background-dark': '#0a1009',
        'primary': '#a7caa0',
        'secondary-light': '#e4efe1',
        'secondary-dark': '#172514',
        'accent-light': '#2c4527',
        'accent-dark': '#6ba560',
      },
    },
  },
  plugins: [],
}
