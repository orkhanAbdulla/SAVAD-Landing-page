/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",            // src klasöründeki tüm HTML dosyalarını tarar.
    "./src/**/*.{js,jsx,ts,tsx}"  // src klasöründeki tüm JS/TS/JSX/TSX dosyalarını tarar.
  ],
  theme: {
    colors:{
      primary:{
        900:"#3F50BB",
        400:"#EAECF6"
      },
      white:"#F7F7F7"
    },
    extend: {},
    fontFamily: {
      TTHovesBold: ['TTHoves-Bold', 'sans-serif'], 
      TTHovesDemiBold:['TTHoves-DemiBold', 'sans-serif'],
      TTHovesMedium:['TTHoves-Meduim', 'sans-serif'],
      RFDewiExpandedBold: ['RFDewiExpanded-Bold', 'sans-serif'],
      TTHovesLight
      : ['TTHoves-Light', 'sans-serif'], 
      PoppionsBold
      : ['Poppions-Bold', 'sans-serif'],
      PoppionsSemiBold
      : ['Poppions-SemiBold', 'sans-serif'],
      PoppionsMedium
      : ['Poppions-Medium', 'sans-serif'], 
    },
  },
  plugins: [],
}
