module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        gray: {
          bgLight: '#F4F4F4'
        },
        purpe: {
          text: '#A666EA'
        },
        'background': 'rgba(0,0,0,.8)',
        'bgButton': 'rgba(0,0,0, 0.7)'
          
      },
      transitionProprety: {
        'transitionBackground': '.8s cubic-bezier(.2,.8,.2,1)'
      },
      height:{
        md: '900px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
