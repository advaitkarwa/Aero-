/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./services/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        aero: {
          900: '#0a0a0b',
          800: '#121214',
          700: '#1c1c1f',
          accent: '#00f0ff',
          success: '#00ff9d',
          warning: '#ffb800',
          danger: '#ff4d4d',
        }
      }
    },
  },
  plugins: [],
}
