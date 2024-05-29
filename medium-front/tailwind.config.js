/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        "bg-art": "url('/bgart.png')"
      },
      fontFamily:{
        lobster: ["Lobster", 'sans-serif'],
        kanit: ["Kanit", "sans-serif"],
        athiti: ["Athiti", "sans-serif"]
      },
      backgroundColor: ['hover', 'focus', 'active', 'group-hover'],
      // Ensure opacity utilities are enabled
      backgroundOpacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    },
  },
  plugins: [],
}

