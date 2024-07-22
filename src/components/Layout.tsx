import React from 'react'
import Link from 'next/link'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex-shrink-0">
                <Link href="/" className="text-xl font-bold text-gray-800">Logo</Link>
              </div>
              <div className="hidden md:block">
                <ul className="flex space-x-6">
                  <li><Link href="/" className="text-gray-800 hover:text-blue-600 font-medium transition duration-300">Home</Link></li>
                  <li><Link href="/customer" className="text-gray-800 hover:text-blue-600 font-medium transition duration-300">Customer</Link></li>
                  <li><Link href="/service" className="text-gray-800 hover:text-blue-600 font-medium transition duration-300">Service</Link></li>
                  <li><Link href="/contacts" className="text-gray-800 hover:text-blue-600 font-medium transition duration-300">Contacts</Link></li>
                  <li><Link href="/users" className="text-gray-800 hover:text-blue-600 font-medium transition duration-300">Users</Link></li>
                </ul>
              </div>
            </div>
            <div>
              <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Login</Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
    </div>
  )
}

export default Layout
