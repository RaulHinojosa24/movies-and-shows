/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      margin: {
        'app-space': '2rem'
      },
      borderWidth: {
        1: '1px'
      },
      padding: {
        'app-space': '2rem'
      },
      animation: {
        fade: 'fadeIn .5s ease-in-out',
        'fade-up': 'fadeUp .5s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        fadeUp: {
          from: {
            opacity: 0,
            transform: 'translateY(3rem)'
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)'
          }
        }
      }
    }
  },
  plugins: []
}
