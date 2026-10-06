/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["DM Sans", "Manrope", "sans-serif"]
      },
      colors: {
        ink: "#101513",
        paper: "#F3F1EA",
        moss: "#17352B",
        lime: "#B9FF55",
        mist: "#D9DED6"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(16,21,19,.12)",
        deep: "0 28px 90px rgba(16,21,19,.24)",
        lime: "0 14px 40px rgba(185,255,85,.22)"
      },
      borderRadius: {
        "4xl": "2rem"
      }
    }
  },
  plugins: []
};