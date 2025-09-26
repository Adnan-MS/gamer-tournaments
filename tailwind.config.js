/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        electricBlue: "#007BFF",
        neonGreen: "#39FF14",
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(135deg, #0a0f2a, #1b1f4b)',
      },
    },
  },
  plugins: [],
};
