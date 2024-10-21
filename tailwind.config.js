/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Configure your colors here
        blue: {
          DEFAULT : "#0f1825"
        }
      }
    },
    
  },
  plugins: [],
}

