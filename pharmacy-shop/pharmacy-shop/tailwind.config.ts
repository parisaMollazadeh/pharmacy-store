import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5F259F',
        secondary: '#F5F5F5',
        accent: '#9B51E0',
      },
      fontFamily: {
        iran: ['IRANSans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
