/** @type {import('tailwindcss').Config} */
// const flowbite = require("flowbite-react/tailwind");
import flowbite from "flowbite-react/tailwind";

export default {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}", 
    "./node_modules/flowbite/**/*.js"],

    safelist: [
      'bg-blue-forComponentBg', // Add any other classes you want to safelist
      'hover:bg-blue-800',
      'focus:ring-4',
      'focus:outline-none',
      'focus:ring-blue-300',
      'dark:bg-blue-600',
      'dark:hover:bg-blue-700',
      'dark:focus:ring-blue-800',
      // Add more classes as needed
    ],
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

