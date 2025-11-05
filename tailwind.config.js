/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          background: "#4991a5",
          foreground: "#ffffff",
          light: "#c8dee4",
          dark: "#4991a5",
        },
        secondary: {
          background: "#ffffff",
          foreground: "#000000",
          light: "#fafafa",
          dark: "#101828",
        },
        accent: {
          color: "#ff7819",
          foreground: "#ffffff",
          light: "#ff7819",
          dark: "#ff7819",
        },
        text: {
          primary: "#000000",
          secondary: "#0000007f",
          muted: "#00000099",
          accent: "#4991a5",
          light: "#0000004c",
        },
        background: {
          main: "#fafafa",
          card: "#ffffff",
          overlay: "#00000019",
          accent: "#4991a54c",
          dark: "#000000",
        },
        border: {
          primary: "#00000033",
          secondary: "#10182819",
          light: "#4991a5",
          dark: "#000000",
        },
      },
      lineHeight: {
        '6xl': '40px',
        '7xl': '57px',
        '8xl': '58px',
        '9xl': '60px',
        '10xl': '64px',
        '11xl': '72px',
        '12xl': '77px',
      },
      borderRadius: {
        base: '10px',
      },
    },
  },
  plugins: [],
};