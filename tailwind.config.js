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
        navy: { DEFAULT: '#F8FAFC', 800: '#E2E8F0', 900: '#CBD5E1', 950: '#060A12' },
        brand: { DEFAULT: '#D9232D', dark: '#B91A22', light: 'rgba(217, 35, 45, 0.15)' },
        paper: '#121B2D',
        line: '#1E293B',
        muted: '#94A3B8',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
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
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(0, 0, 0, 0.5)',
        card: '0 8px 24px -10px rgba(0, 0, 0, 0.4)',
        lift: '0 18px 44px -14px rgba(0, 0, 0, 0.6)',
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
        sans: ['Inter', 'var(--font-plus-jakarta-sans)', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};