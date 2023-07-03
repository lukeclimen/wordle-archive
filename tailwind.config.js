/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue, js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        15: '58px'
      },
      height: {
        15: '58px'
      },
      maxWidth: {
        11: '44px',
        12: '48px',
        16: '64px',
        17: '68px'
      }
    }
  },
  plugins: []
}
