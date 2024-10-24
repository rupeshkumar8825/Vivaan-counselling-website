/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}", 
    "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        // Configure your colors here
        blue: {
          DEFAULT : "#0f1825", 
          forComponentBg : "#1a2438", 
          
        }
      }
    },
    
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

