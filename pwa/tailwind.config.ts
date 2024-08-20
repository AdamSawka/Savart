import type {Config} from 'tailwindcss';
import {ThemeConfig} from 'tailwindcss/types/config';

export const darkMode: ThemeConfig['colors'] = {
  primary: {
    main: '#F2F4F7',
    light: 'rgb(251, 201, 99)',
    dark: 'rgb(175, 131, 42)',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  secondary: {
    main: '#b03975',
    light: 'rgb(191, 96, 144)',
    dark: 'rgb(123, 39, 81)',
    contrastText: '#fff',
  },
  background: {
    default: {
      from: '#000',
      to: '#000',
    },
    paper: '#343366',
    main: '#000',
    collapseMenuBg: '#E4EAFF',
    footer2: '#001F50',
    gray: '#667085',
    ocean: '#3DA0B7',
    gradient1: '#181A1D',
    gradient2: '#0E2238',
  },
  common: {
    black: '#000',
    white: '#fff',
  },
  error: {
    main: '#f44336',
    light: '#e57373',
    dark: '#d32f2f',
    contrastText: '#fff',
  },
  warning: {
    main: '#ffa726',
    light: '#ffb74d',
    dark: '#f57c00',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  info: {
    main: '#29b6f6',
    light: '#88ADD4',
    dark: '#0288d1',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  success: {
    main: '#66bb6a',
    light: '#81c784',
    dark: '#388e3c',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  text: {
    primary: '#fff',
    main: '#ffff00',
    title: '#96FAFA',
    header: '#ffff00',
    filter: "#000",
    collapseMenuTxt: '#01264E',
    secondary: 'rgba(255, 255, 255, 0.7)',
    active: 'rgba(255, 255, 255, 0.8)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  action: {
    active: '#fff',
    hover: 'rgba(255, 255, 255, 0.08)',
    selected: 'rgba(255, 255, 255, 0.16)',
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    focus: 'rgba(255, 255, 255, 0.12)',
  },
};

export const lightMode: ThemeConfig['colors'] = {
  primary: {
    main: '#F2F4F7',
    light: 'rgb(251, 201, 99)',
    dark: 'rgb(175, 131, 42)',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  secondary: {
    main: '#b03975',
    light: 'rgb(191, 96, 144)',
    dark: 'rgb(123, 39, 81)',
    contrastText: '#fff',
  },
  background: {
    default: {
      from: '#F2F4F7',
      to: '#fff',
    },
    paper: '#343366',
    main: '#003978',
    collapseMenuBg: '#E4EAFF',
    footer2: '#001F50',
    gray: '#667085',
    ocean: '#3DA0B7',
    gradient1: '#181A1D',
    gradient2: '#0E2238',
  },
  common: {
    black: '#000',
    white: '#fff',
  },
  error: {
    main: '#f44336',
    light: '#e57373',
    dark: '#d32f2f',
    contrastText: '#fff',
  },
  warning: {
    main: '#ffa726',
    light: '#ffb74d',
    dark: '#f57c00',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  info: {
    main: '#29b6f6',
    light: '#88ADD4',
    dark: '#0288d1',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  success: {
    main: '#66bb6a',
    light: '#81c784',
    dark: '#388e3c',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  text: {
    primary: '#003978',
    main: '#003978',
    header: '#003978',
    filter: "#003978",
    collapseMenuTxt: '#01264E',
    secondary: 'rgba(255, 255, 255, 0.7)',
    active: 'rgba(255, 255, 255, 0.8)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  action: {
    active: '#fff',
    hover: 'rgba(255, 255, 255, 0.08)',
    selected: 'rgba(255, 255, 255, 0.16)',
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    focus: 'rgba(255, 255, 255, 0.12)',
  },
};

const config: Config = {
  mode: 'jit',
  important: '#app',
  darkMode: 'class',
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontWeight: {
      thin: '100',
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    fontFamily: {
      display: ['Montserrat'],
    },
    spacing: {
      0: '0rem', // 0px
      '1/2': '0.25rem', // 4px
      1: '0.5rem', // 8px
      2: '1rem', // 16px
      '5/2': '1.25rem',
      3: '1.5rem', // 24px
      4: '2rem', // 32px
      5: '2.5rem', // 40px
      6: '3rem', // 48px
      7: '3.5rem', // 56px
      8: '4rem', // 64px
      9: '4.5rem', // 72px
      10: '5rem', // 80px
      11: '5.5rem', // 88px
      12: '6rem', // 96px
    },
    screens: {
      xs: '360px',
      sm: '640px',
      md: '1024px',
      md12: '1200px',
      md2: '1400px',
      lg: '1600px',
      xl: '1920px',
    },
    fontSize: {
      xs: '0.625rem', // 10px
      xs2: '0.75rem', // 12px
      xs3: '0.8125rem', // 13px
      sm: '0.875rem', // 14px
      sm2: '0.875rem', // 14px
      sm3: '0.9375rem', // 15px
      md: '1rem', // 16px
      md12: '1.125rem', // 18px
      md2: '1.25rem', // 20px
      md21: '1.375rem', // 22px
      lg: '1.5rem', // 24px
      lg2: '1.875rem', // 30px
      xl: '2rem', // 32px
      xl2: '2.625rem', // 42px
      xxl: '3rem', // 48px
      xxxl: '3.5rem', // 56px
      xl4: '4rem', // 64px
      xl5: '5rem', // 80px
    },
    extend: {

      keyframes: {
        bounce: {
          '0%, 100%': {transform: 'translateY(0)'},
          '50%': {transform: 'translateY(-10px)'},
        },
      },
      animation: {
        bounce1: 'bounce 1s infinite',
        bounce2: 'bounce 1s infinite 0.2s',
        bounce3: 'bounce 1s infinite 0.4s',
      },
    },
  },
  safelist: ["dark"],
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
  ],
};

export default config;
