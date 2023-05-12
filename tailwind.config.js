const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",

    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      borderRadius: {
        middle: "0.1875rem",
      },

      colors: {
        primary: "#7CC6FE",

        active: "#3BA55D",

        "dark-primary": "#949CF7",

        "dark-secondary": "#4752C4",

        danger: {
          100: "#D83C3E",
          200: "#ED4245",
          300: "#A12D2F",
        },

        dark: {
          50: "#4F545C",
          100: "#36393F",
          150: "#04040512",
          200: "#2F3136",
          300: "#292B2F",
          400: "#202225",
          500: "#050506",
          600: "#18191C",
        },

        text: {
          primary: "#B9BBBE",
          secondary: "#96989D",
          tertiary: "#DCDDDE",
          quaternary: "#A3A6AA",
          quinary: "#4F5660",
          senary: "#060607",
          septenary: "#2E3338",

          muted: "#5E6772",
        },

        "url-link": "#0068E0",

        "url-link-dark": "#00AFF4",

        "channel-link": "#5865F2",

        "channel-link-dark": "#C9CDFB",
      },

      fontFamily: {
        sans: ["PT Sans", ...defaultTheme.fontFamily.sans],
      },

      fontSize: {
        double: ["2rem", "2.5rem"],
      },

      spacing: {
        1.25: "0.3125rem",

        7.5: "1.875rem",

        9.5: "2.375rem",

        15: "3.75rem",

        17.5: "4.375rem",

        18: "4.5rem",

        18.5: "4.625rem",

        19: "4.75rem",

        19.5: "4.875rem",

        20.5: "5.125rem",

        21: "5.25rem",

        25: "6.25rem",

        30: "7.5rem",

        50: "12.5rem",

        56.5: "14.125rem",

        102: "25.5rem",

        110: "27.5rem",

        115: "28.75rem",

        120: "30rem",

        140.5: "35.125rem",

        165: "41.25rem",

        196: "49rem",
      },
    },
  },

  plugins: [],

  safelist: [
    "text-url-link",
    "text-channel-link",
    "bg-channel-link/[.15]",
    "hover:bg-channel-link",
    "dark:text-url-link-dark",
    "dark:text-channel-link-dark",
    "dark:bg-channel-link/[.3]",
    "dark:hover:bg-channel-link",
  ],
};
