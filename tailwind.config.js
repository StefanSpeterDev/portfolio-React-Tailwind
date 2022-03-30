module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#0A0C29",
        secondary: "#000003",
        white: "#ffffff",
        black: "#000000",
        yellow: "#f9e71c",
        lila: "#e6e5ec",
        "grey-10": "#6c6b6d",
        "grey-20": "#7c7c7c",
        "grey-30": "#919091",
        "grey-40": "#929293",
        "grey-50": "#3fada8",
        "grey-60": "#edebf6",
        "grey-70": "#d8d8d8",
        "hero-gradient-from": "rgba(20, 30, 48, 0.95)",
        "hero-gradient-to": "rgba(36, 59, 85, 0.93)",
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
    shadows: {
      default: "0 2px 18px rgba(0, 0, 0, 0.06)",
      md: "0 -3px 36px rgba(0, 0, 0, 0.12)",
    },
    zIndex: {
      "-1": "-1",
      60: "60",
      70: "70",
    },
    /* inset: {
      "2/5": "40%",
    }, */
  },
  plugins: [],
};
