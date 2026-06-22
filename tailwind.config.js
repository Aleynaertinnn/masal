/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: {
            50: '#fff1f2',
            light: '#EDB6D4',
            DEFAULT: '#e5629d',
          },
          blue: {
            DEFAULT: '#0ea5e9',
          },
          yellow: {
            DEFAULT: '#FFD464',
          },
          purple: {
            DEFAULT: '#a855f7',
          },
          dark: '#272727',
        },
      },
      fontFamily: {
        heading: ['Bricolage Grotesque', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
