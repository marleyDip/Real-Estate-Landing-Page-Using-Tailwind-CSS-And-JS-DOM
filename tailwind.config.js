/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px",
    },
    extend: {
      colors: {
        firstColor: "#A02334",
        secondColor: "#000",
        secondColorLight: "#0c0c0c",
        whiteColor: "#fff",
        blackColor: "#000",
        grayColor: "#c4c4c450",
        paragraphColor: "#000000B3",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "24px",
      },
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
