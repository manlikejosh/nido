const { url } = require("inspector");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        tan: "#b57047",

        mocha: "#563829",
        offWhite: "#fcf2eb",
        terracota: "#b57047",
        offBrown: "b58c69",
      },
      fontFamily: {
        abeezee: ["ABeeZee", "sans-serif"],
        teko: ["Teko", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        archivo: ["Archivo", "sans-serif"],
        syne: ["Syne", "sans-serif"],
        oi: ["Oi", "serif"],
      },
      backgroundImage: {
        hero: "url('./dist/images/baked goods.webp')",
        gradient:
          "radial-gradient(circle, rgba(111,115,210,1) 0%, rgba(255,122,112,1) 82%, rgba(252,175,69,1) 100%)",
        peak43: "url('./images/stacked-peaks-haikei.svg')",
        scatter43: "url(./images/blobscatter43.svg)",
      },
      screens: {
        xs: "475px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
