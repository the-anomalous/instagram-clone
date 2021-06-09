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
        '81': '21rem',
        'lg': '614px',
        'md': '350px',
        'sm': '300px',
        'sidebar': '23.3%'
      },
      height: {
        'lg': '614px',
        'md': '580px',
        'sm': '500px'
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
