/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background_color:"#F0F7FF",
        Hero_section:"#9272E4",
        Heading_tag:"#7145C9",
        box_inside:"#F0ECF9",
        card_background:"F0ECF9",
        para1:"#000000",
        para2:"#666B6E",
        bckg:"#F0F7FF"
      },
      fontFamily:{
        Mulish:['Mulish', 'sans-serif'],
        Heebo:['Heebo', 'sans-serif'],
      }
    },
  },
  plugins: [],
}