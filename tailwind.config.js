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
      padding: {
        'app-space': '2rem'
      }
    }
  },
  plugins: []
}
