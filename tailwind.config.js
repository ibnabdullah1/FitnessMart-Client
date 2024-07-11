const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Nunito: "nunito, sans-serif",
      },
      colors: {
        primary: "#79C044",
        secondary: "#393b3d",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
});
