/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens:{
        'sm': '375px',
        'lg':'1440px',

      },
      fontFamily:{
        barlow: ['Barlow', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
      },
      colors:{
        // primary

        primarySoftRed: "hsl(7, 99%, 70%) ",
primaryYellow: "hsl(51, 100%, 49%)",
primaryDarkDesaturatedcyanGraphicDesignText: "hsl(167, 40%, 24%)",
 primaryDarkBluePhotographyText: "hsl(198, 62%, 26%)",
primaryDarkModerateCyanFooter: "hsl(168, 34%, 41%)",

// Neutral

neutralVeryDarkDesaturatedBlue:" hsl(212, 27%, 19%)",
neutralVeryDarkGrayishBlue: "hsl(213, 9%, 39%)",
neutralDarkGrayishBlue: "hsl(232, 10%, 55%)",
neutralGrayishBlue: "hsl(210, 4%, 67%)",
neutralWhite: "hsl(0, 0%, 100%)"


      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.hover\:fill-white:hover': {
          fill: 'white',
        },
      };
      addUtilities(newUtilities, ['hover']);
    },
  ],
}

