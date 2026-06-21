/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        // High-end minimalist renk paleti (Karanlık ve Aydınlık mod uyumlu)
        brand: {
          slate: {
            50: '#f8fafc',
            100: '#f1f5f9',
            800: '#1e293b',
            900: '#0f172a',
            950: '#030712', // Derin Apple-esque arka plan rengi
          },
          emerald: {
            400: '#34d399',
            500: '#10b981',
          }
        }
      },
      fontFamily: {
        // Sistem fontlarını kullanarak en pürüzsüz render performansını yakalıyoruz
        sans: [
          'SF Pro Display',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ],
      },
      animation: {
        // Micro-interaction'lar ve pürüzsüz giriş efektleri için özel animasyonlar
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
        }
      }
    },
  },
  plugins: [],
}