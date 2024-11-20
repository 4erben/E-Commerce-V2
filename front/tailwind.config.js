/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['[data-theme="dark"]', '[data-theme="light"]'], // You can control dark mode via this attribute
  theme: {
    extend: {
      fontFamily:{
        josefin: ["Josefin Sans", "sans-serif"],
        lato:["Lato", "sans-serif"]
      }
      ,
/*       colors: {
        pink: "rgba(var(--pink))",
        red: "rgba(var(--red))",
        blue: "rgba(var(--blue))",
        offNavy: "rgba(var(--offNavy))",
        navy: "rgba(var(--navy))",
        skyBlue: "rgba(var(--skyBlue))",
        pantone: "rgba(var(--pantone))",
        purple: "rgba(var(--purple))",
        offPurple: "rgba(var(--offPurple))",
        offBlue: "rgba(var(--offBlue))",
        light:"rgba(var(--light))",
        white:"rgba(var(--white))",
        shade:"rgba(var(--shade))",
        bgFooter:"rgba(var(--footer-bg))",
        bgBottom:"rgba(var(--footer-bottom))", 
      }, */
      colors: {
        primaryA0: "rgba(var(--primary-a0))", // 47, 26, 196
        primaryA10: "rgba(var(--primary-a10))", // 13, 14, 67
        primaryA20: "rgba(var(--primary-a20))", // 21, 24, 117
        primaryA30: "rgba(var(--primary-a30))", // 63, 80, 158
        primaryA40: "rgba(var(--primary-a40))", // 241, 240, 255
        primaryA50: "rgba(var(--primary-a50))", // 138, 143, 185
        secondaryA0: "rgba(var(--secondary-a0))", // 126, 51, 224
        secondaryA10: "rgba(var(--secondary-a10))", // 144, 76, 228
        secondaryA20: "rgba(var(--secondary-a20))", // 160, 99, 232
        secondaryA30: "rgba(var(--secondary-a30))", // 175, 121, 236
        secondaryA40: "rgba(var(--secondary-a40))", // 224, 211, 245
        secondaryA50: "rgba(var(--secondary-a50))", // 204, 165, 243
        surfaceA0: "rgba(var(--surface-a0))", // 126, 51, 224
        surfaceA10: "rgba(var(--surface-a10))", // 241, 240, 255
        surfaceA20: "rgba(var(--surface-a20))", // 255, 255, 255
        surfaceA30: "rgba(var(--surface-a30))", // 238, 239, 251
        surfaceA40: "rgba(var(--surface-a40))", // 231, 228, 248
        surfaceA50: "rgba(var(--surface-a50))", // 251, 46, 134
      }
      
      
    },
  },
  plugins: [],
}
