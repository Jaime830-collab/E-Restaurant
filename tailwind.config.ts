/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F23124',
        secondary: '#F37500',
        light: '#E6E6E6',
        bg: '#1B1B1B'
      },

      backgroundImage: {
        "home":"url('/assets/header.jpg')"
      }
    },
  },
  plugins: [],
}

