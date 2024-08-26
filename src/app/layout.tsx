// src/app/layout.tsx
import '../styles/globals.css';
import { ReactNode } from 'react';
import TitleUpdater from './components/TitleUpdater';
import Navbar from './components/Navbar';
import UniqueHomeLink from '@/components/UniqueHomeLink';
import Link from 'next/link';

export default function RootLayout({ children }: { children: ReactNode }) {
  const appName = "EBI"; // Define your app name here

  return (
    <html lang="en">
      <body>
        <TitleUpdater appName={appName} /> {/* Include TitleUpdater */}
        <Navbar />
        <UniqueHomeLink />
        <nav className="bg-gray-100 p-4">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-blue-500 hover:text-blue-700">Home</Link>
            </li>
            <li>
              <Link href="/registration-form" className="text-blue-500 hover:text-blue-700">Registration Form</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
