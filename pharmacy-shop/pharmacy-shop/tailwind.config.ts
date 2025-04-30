import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}', '../../'],
  theme: {
    extend: {
      colors: {
        primary: '#5C00B8',
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
