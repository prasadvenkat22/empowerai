// src/app/layout.tsx
import '../styles/globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';
import TitleUpdater from './components/TitleUpdater';
import Navbar from './components/Navbar';

export default function RootLayout({ children }: { children: ReactNode }) {
  const appName = "EBI"; // Define your app name here

  return (
    <html lang="en">
      <body>
        <TitleUpdater appName={appName} /> {/* Include TitleUpdater */}
        <Navbar /> {/* Include Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-blue-500 hover:text-blue-700">
            ← Return to Home
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
