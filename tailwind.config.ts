import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontSize: {
        sm: ['0.875rem', '21px'],
        ms: ['0.8125rem', '19.5px'],
        xs: ['0.75rem', '18px'],
      },
      dropShadow: {
        card: '0px 15px 24px #0000001F',
      },
      animation: {
        fadeInUp: 'fadeInUp 0.5s ease-in-out',
        fadeInDelay: 'fadeIn 0.5s ease-in-out 300ms forwards',
        fadeIn: 'fadeIn 0.5s ease-in-out',
        stepScroll: 'stepScroll 30s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        stepScroll: {
          '0%': { transform: 'translateX(0)' },
          '16.6%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-342px)' },
          '36.6%': { transform: 'translateX(-342px)' },
          '40%': { transform: 'translateX(-684px)' },
          '56.6%': { transform: 'translateX(-684px)' },
          '60%': { transform: 'translateX(-1026px)' },
          '76.6%': { transform: 'translateX(-1026px)' },
          '80%': { transform: 'translateX(-1368px)' },
          '96.6%': { transform: 'translateX(-1368px)' },
          '100%': { transform: 'translateX(-1710px)' },
        },
        stepScroll2: {
          '0%': { transform: 'translateX(0)' },
          '16.6%': { transform: 'translateX(0)' },
          '33.3%': { transform: 'translateX(-342px)' },
          '50%': { transform: 'translateX(-684px)' },
          '66.6%': { transform: 'translateX(-1026px)' },
          '83.3%': { transform: 'translateX(-1368px)' },
          '100%': { transform: 'translateX(-1710px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
