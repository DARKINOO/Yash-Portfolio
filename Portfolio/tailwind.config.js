/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle, rgba(178, 19, 202, 0.2), transparent 70%)',
      },
      glow: [
        "0 0px 20px rgba(255, 255, 255, 0.35)",
        "0 0px 65px rgba(255, 255, 255, 0.2)",
      ]
    },
  },
  plugins: [],
}

