/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oro: '#e6c682',
        cafe: '#5c3a21',
        negro: '#0a0705',
        gris: '#1a1410',
        gris2: '#2a1f14',
        blanco: '#f5efe6',
        rojo: '#c0392b'
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out both',
        slideUp: 'slideUp 1s ease-in-out both',
        scrollAnim: 'scrollAnim 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollAnim: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '50.1%': { transform: 'scaleY(1)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        }
      }
    },
  },
  plugins: [],
}
