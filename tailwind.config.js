module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      spacing:{
        '46':'10.6rem',
        'xl':'45rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  
}