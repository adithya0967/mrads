/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        ink: '#080808',
        graphite: '#0D0D0D',
        slate: '#141414',
        line: 'rgba(255, 255, 255, 0.10)',
        'line-soft': 'rgba(255, 255, 255, 0.06)',
        paper: '#F4F1EC',
        mute: '#929292',
        'mute-2': '#666666',
        'mute-dark': '#666666',
        navy: { DEFAULT: '#F8FAFC', 800: '#E2E8F0', 900: '#CBD5E1', 950: '#060A12' },
        brand: { 
          DEFAULT: '#D81F42', 
          hover: '#ED3153', 
          dark: '#B91A22', 
          light: 'rgba(216, 31, 66, 0.15)',
          glow: 'rgba(216, 31, 66, 0.35)',
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          hover: 'var(--primary-hover)',
          foreground: 'var(--primary-foreground)',
        },
        headline: {
          accent: 'var(--headline-accent)',
        },
        subtle: {
          accent: 'var(--subtle-accent)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        emerald: {
          status: '#16C784',
        },
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(0, 0, 0, 0.5)',
        card: '0 8px 24px -10px rgba(0, 0, 0, 0.4)',
        lift: '0 18px 44px -14px rgba(0, 0, 0, 0.6)',
        crimson: '0 0 35px -5px rgba(216, 31, 66, 0.45)',
        'crimson-subtle': '0 0 50px -10px rgba(216, 31, 66, 0.25)',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        sm: 'calc(var(--radius) * 0.5)',
        md: 'var(--radius)',
        lg: 'calc(var(--radius) * 1.5)',
        xl: 'calc(var(--radius) * 2)',
        '2xl': 'calc(var(--radius) * 3)',
        '3xl': 'calc(var(--radius) * 4)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Instrument Serif', 'DM Serif Display', 'Fraunces', 'Georgia', 'serif'],
        editorial: ['Cormorant Garamond', 'Instrument Serif', 'DM Serif Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};