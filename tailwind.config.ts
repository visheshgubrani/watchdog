import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)', ...fontFamily.sans],
      },
      colors: {
        brand: {
          '25': '#F8F9FD',
          '50': '#F0F4FA',
          '100': '#E1E9F6',
          '200': '#C3D3ED',
          '300': '#A5BDE4',
          '400': '#87A7DB',
          '500': '#6991D2',
          '600': '#4B76C9',
          '700': '#3659B1',
          '800': '#284189',
          '900': '#1B2A61',
          '950': '#111A3E',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
