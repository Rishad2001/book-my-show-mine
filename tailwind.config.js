module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pavan: {
  50: '#ffeae4',
  100: '#f7c9bc',
  200: '#eba693',
  300: '#e28369',
  400: '#d96040',
  500: '#bf4726',
  600: '#96361d',
  700: '#6c2614',
  800: '#421509',
  900: '#1c0500',
},
bms: {
  50: '#edf1fc',
  100: '#d3d4e1',
  200: '#b6b8c9',
  300: '#989bb2',
  400: '#7c7f9b',
  500: '#636582',
  600: '#4c4f66',
  700: '#363849',
  800: '#21222e',
  900: '#0a0a16',
},

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
