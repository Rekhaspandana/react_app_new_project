module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 50: "#fafaf5", 300: "#e6e6e6", 400: "#c2c2c2", 600: "#6d6d6d" },
        red: { A100: "#ff8577" },
        black: { 900: "#000000", "900_0f": "#0000000f", "900_3f": "#0000003f" },
        amber: { A400: "#ffc600" },
        light_green: { 900: "#426b1f" },
        green: { A700: "#0fa958" },
        deep_orange: { 600: "#f24e1e" },
        indigo: { A400: "#5551ff" },
        blue: { 300: "#699bf7" },
        deep_purple: { A200: "#a259ff" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        inter: "Inter",
        whyte: "Whyte",
        newsreader: "Newsreader",
        whyteinktrap: "Whyte Inktrap",
      },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
