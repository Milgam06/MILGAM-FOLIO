'use client';

import { ReactNode } from 'react';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

type IProvider = {
  children: ReactNode;
};

export default function Provider({ children }: IProvider) {
  const theme = createTheme({
    breakpoints: { xs: '36em', sm: '48em', md: '62em', lg: '75em', xl: '88em' },
    colors: {},
  });
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
