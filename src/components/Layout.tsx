import React from 'react'
import Link from 'next/link'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <ul className="flex justify-between items-center py-4">
            <li><Link href="/" className="hover:text-gray-300 hover:bg-gray-700 px-3 py-2 rounded transition duration-300">Home</Link></li>
            <li><Link href="/customer" className="hover:text-gray-300 hover:bg-gray-700 px-3 py-2 rounded transition duration-300">Customer</Link></li>
            <li><Link href="/service" className="hover:text-gray-300 hover:bg-gray-700 px-3 py-2 rounded transition duration-300">Service</Link></li>
            <li><Link href="/contacts" className="hover:text-gray-300 hover:bg-gray-700 px-3 py-2 rounded transition duration-300">Contacts</Link></li>
            <li><Link href="/users" className="hover:text-gray-300 hover:bg-gray-700 px-3 py-2 rounded transition duration-300">Users</Link></li>
            <li><Link href="/login" className="hover:text-gray-300 hover:bg-gray-700 px-3 py-2 rounded transition duration-300">Login</Link></li>
          </ul>
        </div>
      </nav>
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
    </div>
  )
}

export default Layout
