/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        BottomBackground:"#23EA76"
       
       },
       fontFamily :{
        sans: ['Work Sans','sans-serif'],
        // sans:['Space Grotesk','sans-serif']

       
       },
       fontSize :{
        p_size:"18px",
        
       },
       boxShadow: {
        'bottomShadow': '-5px 10px 10px gray',
      },
  
    },
  },
  plugins: [],
}
