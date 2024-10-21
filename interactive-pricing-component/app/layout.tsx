import { ReactNode } from 'react';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@600;800&display=swap"
          rel="stylesheet"
        />
        <title>Interactive Pricing Component</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
