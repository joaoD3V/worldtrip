import { extendTheme } from '@chakra-ui/react';

const customTheme = {
  styles: {
    global: {
      body: {
        bg: 'whiteAlpha.50',
        color: 'gray.700',
      },
    },
  },
  colors: {
    gray: {
      '50': '#F5F8FA',
      '100': '#DADADA',
      '700': '#47585B',
    },
    yellow: {
      '500': '#FFBA08',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
};

export const theme = extendTheme(customTheme);
