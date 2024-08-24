// src/app/layout.tsx
import '../styles/globals.css';
import { ReactNode } from 'react';
import TitleUpdater from './components/TitleUpdater';
import Navbar from './components/Navbar';
import HomeLink from '@/components/HomeLink';

export default function RootLayout({ children }: { children: ReactNode }) {
  const appName = "EBI"; // Define your app name here

  return (
    <html lang="en">
      <body>
        <TitleUpdater appName={appName} /> {/* Include TitleUpdater */}
        <Navbar />
        <HomeLink />
        {children}
      </body>
    </html>
  );
}
