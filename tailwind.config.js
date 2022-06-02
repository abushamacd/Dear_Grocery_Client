module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#26ae60",
          secondary: "#FF5C00",
          accent: "#ebfaeb",
          neutral: "#18182F",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#65a30d",
          warning: "#f59e0b",
          error: "#e11d48",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
