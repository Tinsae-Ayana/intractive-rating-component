/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            orange: "hsl(25, 97%, 53%)",
            proWhite: "hsl(0, 0%, 100%)",
            ligthGray: " hsl(217, 12%, 63%)",
            mediumGray: " hsl(216, 12%, 54%)",
            darkBlue: " hsl(213, 19%, 18%)",
            veryDarkBlue: "hsl(216, 12%, 8%)",
         },
      },
   },
   plugins: [],
};
