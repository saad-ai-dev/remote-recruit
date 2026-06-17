/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#11142D",
        muted: "#7B8095",
        brand: {
          50: "#EEF8FD",
          100: "#DDF2FA",
          300: "#8ED9F0",
          400: "#52B4DA",
          500: "#3B92C7",
          700: "#1E4E93",
          800: "#1E3E85"
        }
      },
      boxShadow: {
        soft: "0 22px 60px rgba(30, 62, 133, 0.12)",
        card: "0 18px 44px rgba(30, 62, 133, 0.13)",
        glow: "0 18px 70px rgba(82, 180, 218, 0.22)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "Avenir Next",
          "Segoe UI",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};
