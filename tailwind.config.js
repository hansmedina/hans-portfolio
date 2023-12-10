/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
        'ocean': {
          '50': '#effcfb',
          '100': '#d6f7f7',
          '200': '#b1edf0',
          '300': '#6edbe2',
          '400': '#3ec6d2',
          '500': '#23aab7',
          '600': '#208a9a',
          '700': '#206f7e',
          '800': '#225b68',
          '900': '#214c58',
          '950': '#10313c',
      },
    },    
  },
  darkMode: 'class',
  plugins: [],
  
}


