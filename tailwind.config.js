module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
      extend: {
        colors: {
          indigo: {
            800: '#4f46e5',
            900: '#4338ca',
          }
        }
      }
    },
    plugins: [require('@tailwindcss/typography')]
  }