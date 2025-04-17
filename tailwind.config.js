/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // colors: {
    //   primaryBg: '#2196F3', 
    //   whiteText: '#FFFFFF',  
    // },
    fontSize : {
      'header': '32px'
    }
  },
  plugins: [],
}

