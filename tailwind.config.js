/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-background1': "url('/Discover.svg')",
        'custom-background2': "url('/immobiliare.svg')",
        'custom-background3': "url('/hero-attach.png')",
      },
    },
  },
  plugins: [],
};
