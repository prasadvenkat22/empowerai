// src/app/layout.tsx
import '../styles/globals.css';
import { ReactNode } from 'react';
import TitleUpdater from './components/TitleUpdater';

export default function RootLayout({ children }: { children: ReactNode }) {
  const appName = "EBI"; // Define your app name here

  return (
    <html lang="en">
      <body>
        <TitleUpdater appName={appName} /> {/* Include TitleUpdater */}
        {children}
      </body>
    </html>
  );
}
