// src/app/layout.tsx
import '../styles/globals.css';
import { ReactNode } from 'react';
import TitleUpdater from './components/TitleUpdater';
import Navbar from './components/Navbar';

export default function RootLayout({ children }: { children: ReactNode }) {
  const appName = "DIQ"; // Define your app name here

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen flex flex-col">
        <TitleUpdater appName={appName} /> {/* Include TitleUpdater */}
        <Navbar /> {/* Include Navbar */}
        <div className="flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}
