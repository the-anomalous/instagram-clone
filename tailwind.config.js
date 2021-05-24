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
      padding: {
        '5px' : '5px'
      },
      width: {
        '81' : '21rem'
      }
    },
    fill: (theme) => ({
      red: theme('colors.red.primary')
    }),
    colors: {
      white: '#ffffff',
      blue: {
        medium: '#005c98',
        light: '#0095f6'
      },
      black: {
        light: '#262626',
        faded: '#00000059'
      },
      gray: {
        base: '#616161',
        background: '#fafafa',
        primary: '#dbdbdb'
      },
      red: {
        primary: '#ed4956'
      }
    },
    screens: {
      'sm': { 'max': '500px' },
      'md': { 'min': '501px', 'max': '767px' },
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
