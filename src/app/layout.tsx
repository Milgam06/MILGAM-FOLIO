import { mantineHtmlProps } from '@mantine/core';
import localFont from 'next/font/local';
import Provider from './provider';


const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html {...{ ...mantineHtmlProps, style: { scrollbarWidth: 'none', msOverflowStyle: 'none' } }}>
      <head>
        <title>Milgamfolio</title>
      </head>
      <body className={pretendard.variable}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
