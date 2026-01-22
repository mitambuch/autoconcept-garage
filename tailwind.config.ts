import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs Autoconcept
        primary: {
          DEFAULT: '#e0001a',  // Rouge Autoconcept
          light: '#ff1a35',
          dark: '#b00015',
        },
        secondary: {
          DEFAULT: '#dc2626',  // Rouge dynamique
          light: '#ef4444',
          dark: '#991b1b',
        },
        accent: {
          DEFAULT: '#f59e0b',  // Orange/Jaune attention
          light: '#fbbf24',
          dark: '#d97706',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        // À personnaliser selon le branding
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  plugins: [],
}

export default config
