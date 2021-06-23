module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  purge: {
    content: ['./src/**/*.js', './src/**/**/*.js']
  },
  theme: {
    extend: {
      spacing: {
        '65': '17rem'
      },
      stroke: {
        white: '#fff'
      },
      padding: {
        '5px': '5px',
        '10px':'10px'
      },
      width: {
        '81': '21rem',
        'lg': '614px',
        'md': '350px',
        'sm': '300px',
        'sidebar': '23.3%',
        '120px': '120px'
      },
      height: {
        'lg': '614px',
        'md': '580px',
        'sm': '500px',
        '120px': '120px'
      },
      animation: {
        "zoom-in": "zoom-in .3s linear",
        "zoom-out": "zoom-out .3s linear"
      },
      keyframes: {
        "zoom-in": {
          '0%': {
            opacity: '0',
            transform: 'translate(-50% , -50%) scale(.8)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50% , -50%) scale(1)'
          }
        },
        "zoom-out": {
          '100%': {
            opacity: '0',
            transform: 'translate(-50 % , -50 %) scale(.8)',
          },
          '0%': {
            opacity: '1',
            transform: 'translate(-50% , -50%) scale(1)'
          }
        }
      }
    },
    fill: (theme) => ({
      red: theme('colors.red.primary'),
      white: theme('colors.white'),
      black: theme('colors.black.primary')
    }),
    colors: {
      white: '#ffffff',
      blue: {
        medium: '#005c98',
        light: '#0095f6'
      },
      black: {
        light: '#262626',
        faded: '#00000059',
        primary: '#000'
      },
      gray: {
        base: '#616161',
        background: '#fafafa',
        primary: '#dbdbdb'
      },
      red: {
        primary: '#ed4956'
      },
      failure: '#F32013',
      success: '#4BB543'
    },
    screens: {
      'mobile-sm':{ 'max': '380px' }, 
      'sm': { 'max': '500px'} ,
      'md': { 'min': '501px', 'max': '800px' },
      'lg': {'min': '768px'}
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      opacity: ['disabled']
    }
  }
};
