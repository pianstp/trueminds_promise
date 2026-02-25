export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        orangeMain: "#F15A24",
        brownFooter: "#4B2E1E",
        pageBg: "#FFFFFF",
        cardBg: "#FFFFFF",
        borderLight: "#E5E5E5",
        textDark: "#1A1A1A",
        textMuted: "#6B6B6B",
      },
      borderRadius: {
        card: "16px",
        button: "12px",
        input: "10px",
      },
    },
  },
  plugins: [],
}
