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
}

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
