module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      'nav': ['Quicksand', 'sans-serif'],
      'body': ['Sarabun', 'sans-serif']
    },

    
    extend: {},
  },
  variants: { 
    textColor: ['responsive','hover', 'focus', 'active'],
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],  
    transitionDuration: ['responsive', 'hover', 'focus'],
    
  },
  plugins: [],
}
