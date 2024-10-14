
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import { ReactNode } from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <div className="flex flex-col bg-gray-100">
      <div className="bg-gradient-to-r from-blue-500 to-teal-400 text-white p-2 text-center rounded-b-lg shadow-lg mb-0">
        <h1 className="text-4xl font-bold mb-1">Data IQ Systems</h1>
        <p className="text-lg sm:text-xl">Data and Cloud Engineering Solutions for Enterprises</p>
      </div>
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        {children}
      </main>
    </div>
  );
};

export default Layout;
