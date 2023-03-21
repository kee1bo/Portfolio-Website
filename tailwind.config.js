/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  './pages/**/*.{html,js}',
  './components/**/*.{html,js}',],
  theme: {
    fontFamily:{
      tangerine: ['Tangerine', 'cursive'],
      bakbakone:['Bakbak One','cursive'],
      raleway: ['Raleway Dots','cursive']
    },
    extend: {
      colors:{
        cyanBlue:"#4B8BBE",
        sunGlow:"#FFD43B",
        ghostWhite:"#F8F8FF",
        lightBlue:"#ADD8E6",
        babyBlue:"#89CFF0",
        jetBlack:"#0A0A0A",
        blueGray:"#90ADC6",
        charCoal:"#36454F",
        serenity:"#D0E6F0",

      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      }
    },
  },
  plugins: [],
}
