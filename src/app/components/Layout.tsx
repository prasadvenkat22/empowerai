
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from './Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <div className="flex flex-col bg-gray-100">
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        {children}
      </main>
    </div>
  );
};

export default Layout;
