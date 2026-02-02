export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        'condensed': ['Anton', 'Impact', 'Arial Black', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'Courier New', 'monospace'],
      },
      colors: {
        'mint': '#00D9B5',
        'mint-bright': '#1DE9B6',
      },
    },
  },
  plugins: [],
}