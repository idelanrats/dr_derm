
import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      fontSize: {
        'body': ['16px', { lineHeight: '1.6' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
      },
      colors: {
        'warm-gold': '#CBA659',
        'mint-green': '#A7D8C0',
        'blush-pink': '#F4D8D8',
        'dark-charcoal': '#1E1E1E',
        'light-grey': '#F9F9F9',
        'divider-100': '#E5E7EB',
        'mint-600': '#059669',
      },
      spacing: {
        'section-y': '60px',
        'section-y-mobile': '30px',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'warm-gold': '0 4px 14px 0 rgba(203, 166, 89, 0.39)',
        'warm-gold-lg': '0 8px 25px 0 rgba(203, 166, 89, 0.5)',
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.6s ease-out',
        'slideInLeft': 'slideInLeft 0.8s ease-out',
        'slideInRight': 'slideInRight 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
