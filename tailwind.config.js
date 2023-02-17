/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './public/**/*.{js,ts,jx,tsx,html}'
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ["Sans-Variable", "sans-serif"],
        reckless: ["RecklessRegular", "sans-serif"],
        cotta: ["Cotta", "sans-serif"]
      },
      colors:{
        gold: '#FFD484',
        pine: '#082115',
      }
    }
  }
}
