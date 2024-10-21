'use client';
import { createTheme, ThemeOptions } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const getTheme = (mode: 'light' | 'dark'): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // Light mode palette
          primary: {
            main: '#7B04CA',
          },
          secondary: {
            main: '#F82583',
          },
          background: {
            default: '#EEEEEE',
            paper: '#FFFFFF',
          },
          text: {
            primary: '#272828',
            secondary: '#666666',
          },
        }
      : {
          // Dark mode palette
          primary: {
            main: '#7B04CA',
          },
          secondary: {
            main: '#F82583',
          },
          background: {
            default: '#0F0F0F',
            paper: '#272828',
          },
          text: {
            primary: '#FFFFFF',
            secondary: '#7EB4BF',
          },
          divider: 'rgb(39, 40, 40)',
        }),
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: 'info' },
              style: {
                backgroundColor: '#60a5fa',
              },
            },
          ],
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
        },
      },
    },
  },
});

export default createTheme(getTheme('light'));