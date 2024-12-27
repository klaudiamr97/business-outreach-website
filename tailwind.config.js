/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        fadeInOut: 'fadeInOut 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInOut: {
          '0%': { opacity: '0.1' },
          '50%': { opacity: '1' },
          '60%': { opacity: '1' },
          '100%': { opacity: '0.1' },
        },
      },
      height: {
        128: '32rem',
      },
      fontFamily: {
        sans: [
          '"Source Sans Pro", "SF Pro Text", Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif',
        ],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'button-bg': '#f5394e',
        button: '#ffffff',
        'button-hover': '#f5394e',
        'hero-color': '#ffff',
        'veganic-gold': '#c59d5f',
        digivate: '#ff4449',
      },
      fontSize: {
        h1: [
          '2.9375rem',
          {
            lineHeight: '3rem',
            letterSpacing: '0.1em',
            fontWeight: '700',
          },
        ],
        h2: [
          '1.875rem',
          {
            lineHeight: '2.25rem',
            letterSpacing: '-0.015em',
            fontWeight: '600',
          },
        ],
        h3: [
          '1.5rem',
          {
            lineHeight: '2rem',
            letterSpacing: '-0.01em',
            fontWeight: '500',
          },
        ],
        h4: [
          '1.25rem',
          {
            lineHeight: '1.75rem',
            letterSpacing: '-0.005em',
            fontWeight: '400',
          },
        ],
        h5: [
          '1.125rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '0',
            fontWeight: '400',
          },
        ],
        h6: [
          '1rem',
          {
            lineHeight: '1.75rem',
            letterSpacing: '0',
            fontWeight: '400',
          },
        ],
        p: [
          '1rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '0',
            fontWeight: '200',
          },
        ],
        button: [
          '1rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '0',
            fontWeight: '400',
          },
        ],
      },
    },
  },
  plugins: [],
};
