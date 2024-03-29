/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {}
  },
  plugins: [],
  variants: {
    extend: {
      // Add 'display' variant to allow toggling visibility
      display: ['group-hover']
    }
  }
}
