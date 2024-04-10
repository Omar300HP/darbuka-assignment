/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.tsx', './src/**/*.css'],
  important: true,
  // theme: {
  //   extend: {},
  //   colors: {}
  // },
  plugins: [
    require('@tailwindcss/forms'),
    // https://github.com/tailwindlabs/tailwindcss/issues/5989
    plugin(function ({ addComponents }) {
      addComponents({
        '.gradient': {
          background:
            'linear-gradient(90deg, #0264ff 0%, #6748dd 100%) !important'
        },
        '.btn-linear-gradient': {
          position: 'relative !important',
          background:
            'linear-gradient(90deg, #0264ff 0%, #6748dd 100%) !important',
          border: 'none !important',
          boxShadow: 'none !important',
          zIndex: '1 !important'
        },
        '.btn-linear-gradient::before': {
          position: 'absolute !important',
          content: '""',
          top: '0 !important',
          right: '0 !important',
          bottom: '0 !important',
          left: '0 !important',
          background:
            'linear-gradient(94.07deg, #0264ff -30.8%, #6748dd 46.55%) !important',
          zIndex: '-1 !important',
          transition: 'opacity 0.3s linear !important',
          opacity: '0 !important',
          borderRadius: '8px !important'
        },
        '.btn-linear-gradient:hover::before': {
          opacity: '1 !important'
        },
        '.btn-outline': {
          'background-color': 'transparent !important',
          border: '1.5px solid #82A4FF !important',
          color: '#82A4FF !important',
          fill: '#82A4FF !important',
          '&:hover': {
            'background-color': '#82A4FF !important',
            color: '#fff !important',
            fill: '#fff !important'
          },
          '&:disabled': {
            color: '#838587 !important',
            fill: '#838587 !important',
            borderColor: '#838587 !important',
            '&:hover': {
              backgroundColor: 'transparent !important',
              color: '#838587 !important',
              fill: '#838587 !important'
            }
          }
        },
        '.debug-with-outline': {
          '@apply outline outline-4 outline-offset-2 !important': {}
        }
      });
    })
  ]
};
