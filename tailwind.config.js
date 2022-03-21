module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#5540af",
        secondary: "#252426",
        white: "#ffffff",
        black: "#000000",
        yellow: "#f9e71c",
        lila: "#e6e5ec",
        "grey-10": "#6c6b6d",
        "grey-20": "#7c7c7c",
        "grey-30": "#919091",
        "grey-40": "#929293",
        "grey-50": "#f4f3f8",
        "grey-60": "#edebf6",
        "grey-70": "#d8d8d8",
        "hero-gradient-from": "rgba(85, 64, 174, 0.95)",
        "hero-gradient-to": "rgba(65, 47, 144, 0.93)",
        "blog-gradient-from": "#8f9098",
        "blog-gradient-to": "#222222",
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
  },
  plugins: [],
};
