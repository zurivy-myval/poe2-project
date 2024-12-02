/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#1C1C1C', // Dark background
          accent: '#272727',  // Slightly lighter sections
        },
        primary: {
          DEFAULT: '#B88742', // Golden hues for highlights
          dark: '#8C6A30',    // Darker gold for accents
        },
        secondary: {
          DEFAULT: '#9E534E', // Red-brown hues for buttons and danger
          dark: '#703834',    // Darker variant
        },
        mystical: {
          DEFAULT: '#4E88A1', // Cool blue for magical effects
          dark: '#39667A',    // Darker mystical blue
        },
        text: {
          light: '#E2E2E2',    // Light text for contrast
          muted: '#A8A8A8',    // Muted for less emphasis
        },
      },
      fontFamily: {
        body: ['"Cinzel Decorative"', ...fontFamily.mono], // PoE-style font for headers
        display: ['"Cinzel"', ...fontFamily.sans],
      },
      boxShadow: {
        'glow-gold': '0 0 15px 2px rgba(184, 135, 66, 0.6)', // Glowing golden effects
        'glow-blue': '0 0 15px 2px rgba(78, 136, 161, 0.6)', // Glowing blue effects
      },
      backgroundImage: {
        'texture-dark': "url('/path/to/poe-texture.jpg')", // Add a gritty dark texture
        'texture-gold': "url('/path/to/poe-gold.jpg')",    // Optional golden theme
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

