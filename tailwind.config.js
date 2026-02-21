/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0d9488',
        'primary-hover': '#0f766e',
        'background-light': '#f8f9fa',
        'background-dark': '#0f1419',
        'surface-light': '#FFFFFF',
        'surface-dark': '#1F2937',
        'text-light': '#334155',
        'text-dark': '#F3F4F6',
        'accent-dark': '#334155',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'accent': '0.1em',
      },
      lineHeight: {
        'relaxed-reading': '1.7',
      },
      fontSize: {
        'body': ['17px', { lineHeight: '1.7' }],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
}
