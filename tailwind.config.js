const defaultTheme = require("tailwindcss/defaultTheme");
const eggshellDelightsTheme = require("tailwind-saasblocks/themes/eggshell-delights.theme");

module.exports = {
  // ...
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      backgroundColor: {
        body: "your-color-value",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("tailwind-children"),
    require("tailwind-saasblocks")({
      themes: {
        light: eggshellDelightsTheme,
      },
    }),
    function ({ addVariant, e }) {
      addVariant("responsive", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.container .${e(`responsive${separator}${className}`)}`;
        });
      });
    },
  ],
};
