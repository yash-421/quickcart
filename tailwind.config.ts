import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FEFAE0',    // Light Beige
        secondary: '#DDA15E',  // Sandy Brown
        text: '#606C38',       // Olive Green (Text Color)
        background: '#283618', // Dark Olive Green (Background Color)
        accent: '#BC6C25',     // Rusty Orange (Accent Color)
      },
      backgroundColor: {
        primary: '#CCD5AE',    // Light Olive Green (Background Color)
        secondary: '#D4A373',  // Light Sandy Brown (Background Color)
      },
    },
  },
  plugins: [],
};

export default config;
