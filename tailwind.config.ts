import type { Config } from 'tailwindcss';

const config: Config = {
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3bb77e',
        secondary: '#fdc040',
        text: '#253d4e',
        secondary_text: '#7e7e7e',
        color_1: "#fddde4",
        color_2: "#cdebbc",
        color_3: "#d1e8f2",
        color_4: "#cdd4f8",
        color_5: "#f6dbf6",
        color_6: "#fff2e5",
        color_7: "#d77f7a",
        color_8: "#63a2c1",
        color_9: "#f2fce4",
        color_10: "#fffceb",
        color_11: "#ecffec",
        color_12: "#feefea",
        color_13: "#fff3eb",
        color_14: "#fff3ff",
        color_15: "#f2fce4",
        background_1: "#f2f3f4",
        background_2: "#f4f6fa",
        background_3: "#def9ec",
        border_color1: "#ececec",
        border_color2: "#bce3c9",
        dark: '#29a56c'
      },
      fontSize: {
        xxs: "12px",
        xs: "13px",
        sm: "14px",
        md: "16px",
        lg: "17px",
        xl: "19px",
        xxl: "58px",
      },
      boxShadow: {
        box_shadow_1: "20px 20px 40px rgba(0,0,0,.07)",
        box_shadow_2: "5px 5px 15px rgba(0,0,0,.05)",
        box_shadow_3: "20px 20px 54px rgba(0,0,0,.03)",
        box_shadow_3_hover: " 20px 20px 54px rgba(0,0,0,.05)",
      },
      screens: {
        'xs': '0px',
        'sm': '600px',
        'md': '900px',
        'lg': '1200px',
        'xl': '1536px',

      }
    },
  },
  plugins: [],
};

export default config;
