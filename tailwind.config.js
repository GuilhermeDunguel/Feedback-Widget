module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          default: '#8257e6',
          hover: '#996dff'
        },
        textBrand: {
          default: '#FFFFFF'
        },

        /* Dark Theme */

        surfaceDark: {
          primary: '#18181B',
          secondary: '#27272A',
          secondaryHover: '#3F3F46'
        },
        strokeDark: {
          default: '#52525B'
        },
        tooltipDark: {
          default: '#F4F4F5',
          textOn: '#27272A'
        },
        textDark: {
          primary: '#F4F4F5',
          secondary: '#A1A1AA'
        },
        backgroundDark: {
          default: '#09090A'
        },

        /* Light Theme */

        surfaceLight: {
          primary: '#FFFFFF',
          secondary: '#F4F4F5',
          secondaryHover: '#E4E4E7'
        },
        strokeLight: {
          default: '#D4D4D8'
        },
        tooltipLight: {
          default: '#27272A',
          textOn: '#F4F4F5'
        },
        textLight: {
          primary: '#27272A',
          secondary: '#71717A'
        },
        backgroundLight: {
          default: '#FFFFFF'
        }
      },
      borderRadius: {
        four: '4px'
      }
      
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
}
