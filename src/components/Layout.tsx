import React, { useState } from 'react'
import Link from 'next/link'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="text-xl font-bold text-gray-800" aria-label="Home">Logo</Link>
              </div>
              <div className="hidden md:block">
                <ul className="ml-10 flex items-baseline space-x-4">
                  <li><Link href="/" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300" aria-label="Home">Home</Link></li>
                  <li><Link href="/customer" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300" aria-label="Customer">Customer</Link></li>
                  <li><Link href="/service" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300" aria-label="Service">Service</Link></li>
                  <li><Link href="/contacts" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300" aria-label="Contacts">Contacts</Link></li>
                  <li><Link href="/users" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300" aria-label="Users">Users</Link></li>
                </ul>
              </div>
            </div>
            <div className="hidden md:block">
              <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300" aria-label="Login">Login</Link>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <li><Link href="/" className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition duration-300" aria-label="Home">Home</Link></li>
            <li><Link href="/customer" className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition duration-300" aria-label="Customer">Customer</Link></li>
            <li><Link href="/service" className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition duration-300" aria-label="Service">Service</Link></li>
            <li><Link href="/contacts" className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition duration-300" aria-label="Contacts">Contacts</Link></li>
            <li><Link href="/users" className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition duration-300" aria-label="Users">Users</Link></li>
          </ul>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="px-2">
              <Link href="/login" className="block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 text-center" aria-label="Login">Login</Link>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
    </div>
  )
}

export default Layout
