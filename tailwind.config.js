/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mon': ['Montserrat'],
        'int': ['Inter'],
      },
      colors:{
        third:"#222222"
      },
       spacing: {
        'h47': '47%',
        'h95': '95%',
      }
    },
  },
  plugins: [],
}

