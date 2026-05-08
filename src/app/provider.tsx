'use client';

import { ReactNode } from 'react';
import { createTheme, MantineProvider, Text } from '@mantine/core';
import '@mantine/core/styles.css';

type IProvider = {
  children: ReactNode;
};

export default function Provider({ children }: IProvider) {
  const theme = createTheme({
    breakpoints: { xs: '36em', sm: '48em', md: '62em', lg: '75em', xl: '88em' },
    fontFamily: 'var(--font-pretendard), system-ui, sans-serif',
    headings: {
      fontFamily: 'var(--font-pretendard), system-ui, sans-serif',
      fontWeight: '600',
    },
    components: {
      Text: Text.extend({
        defaultProps: {
          lh: 1,
        },
      }),
    },
    colors: {
      brand: ['', '', '', '', '', '#b84a3f', '', '', '', ''],
      dark: ['#080706', '#120f0d', '#1f1b19', '#3a3430', '#756e66', '#a8a095', '#d8d0c6', '#f4efe7', '', ''],
    },
  });
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
