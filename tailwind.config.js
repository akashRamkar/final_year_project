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
        bckg:"#F0F7FF",
        richblack: {
          5: "#F1F2FF",
          25: "#DBDDEA",
          100: "#AFB2BF",
          200: "#999DAA",
          700: "#2C333F",
          800: "#161D29",
          900: "#000814",
        }
      },
      fontFamily:{
        Mulish:['Mulish', 'sans-serif'],
        Heebo:['Heebo', 'sans-serif'],
      }
    },
  },
  plugins: [],
}