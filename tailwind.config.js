const colors = require("tailwindcss/colors");
module.exports = {
  darkMode: false,
  content: [],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#da463a",
      secondary: "",
      dark: {
        10: "rgba(0,0,0,.1)",
        20: "rgba(0,0,0,.2)",
        100: "#363940",
        200: "#25272B",
        300: "#24252A",
        400: "#808080",
      },
      black: { ...colors.black, 200: "#232323" },
      white: colors.white,
      gray: {
        ...colors.gray,
        50: "rgba(57,48,48,.1)",
        70: "rgba(57,48,48,.5)",
        100: "#F0F0F0",
        200: "rgba(249, 249, 249, 0.7)",
        400: "#444444",
        900: "#9b9b9b",
      },
      blue: { 100: "#607ec7" },
      green: { 50: "#46c49c", 100: "#61c436" },
      pink: { 100: "#e54e7e" },
      purple: { 100: "#ca85ca" },
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: { ...colors.yellow, 100: "#f4b23f" },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    spacing: {
      px: "1px",
      0: "0",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },
    opacity: {
      0: "0",
      20: "0.2",
      40: "0.4",
      60: "0.6",
      80: "0.8",
      100: "1",
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
