import { mantineHtmlProps } from '@mantine/core';
import Provider from './provider';
import { Header } from '@/components';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html {...mantineHtmlProps}>
      <head>
        <title>Milgamfolio</title>
      </head>
      <body>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
