/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      width: {
        app: '1536px',
        'small-content': '1280px',
        aside: '14rem',
        68: '17rem'
      },
      maxWidth: {
        app: '1536px',
        'small-content': '1280px',
        aside: '14rem',
        68: '17rem'
      },
      margin: {
        'app-space': '2rem'
      },
      padding: {
        'app-space': '2rem'
      },
      borderWidth: {
        1: '1px'
      },
      animation: {
        fade: 'fadeIn .1s ease-in-out',
        'fade-up': 'fadeUp .1s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        fadeUp: {
          from: {
            opacity: 0,
            transform: 'translateY(5rem)'
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)'
          }
        }
      }
    }
  },
  plugins: [],
  darkMode: 'media'
}
