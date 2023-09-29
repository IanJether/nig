/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        'primary1' : '#007EAA',
        'primary2' : '#00BDFF',
        'primary3' : '#ABE9FF',
        'sec1' : '#D21D02',
        'sec2' : '#FF1212',
        'sec3' : '#FFAEAE',
        'tet1': '#2D2E2E',
        'tet2': '#8A8B8B',
        'tet3': '#D0D1D1',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
