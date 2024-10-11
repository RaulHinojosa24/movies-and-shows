/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        accent: '#facc15',
        light: '#fff',
        'light-1': '#fafafa',
        'light-2': '#f5f5f5',
        'light-3': '#e5e5e5',
        'light-4': '#d4d4d4',
        'light-5': '#a3a3a3',
        medium: '#737373',
        'dark-5': '#525252',
        'dark-4': '#404040',
        'dark-3': '#262626',
        'dark-2': '#171717',
        'dark-1': '#0a0a0a',
        dark: '#000'
      },
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
      },
      backgroundSize: {
        'size-200': '200% 200%'
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%'
      },
      boxShadow: {
        wide: '20px -15px 20px var(--tw-shadow-color), -20px -15px 20px var(--tw-shadow-color)'
      }
    }
  },
  plugins: [],
  darkMode: 'media'
}
