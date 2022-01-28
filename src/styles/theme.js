import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        color: {
            'heading': '#F5F8FA',
            'highlight': '#FFBA08',
            'dark': '#47585B',
            'light': '#E1E3EF',
            'info': '#DADADA',
        }
    },
    fonts: {
        heading: 'Montserrat, sans-serif',
        body: 'Montserrat, sans-serif',
    },
    styles: {
        global : {
            body: {
                bg: 'linear-gradient(to top, #0c0b18, #120c1b, #180d1d, #1d0e1f, #230e1f)',
                color: 'linear-gradient(to top, #0c0b18, #120c1b, #180d1d, #1d0e1f, #230e1f)',
            }
        }
    }
  });