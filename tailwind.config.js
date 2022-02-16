module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen xl': {
            maxWidth: '1280px',
          },
        }
      })
    }
  ]
};
