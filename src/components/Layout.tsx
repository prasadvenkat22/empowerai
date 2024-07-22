import React from 'react'
import Link from 'next/link'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4">
          <ul className="flex items-center justify-between h-16">
            <li><Link href="/" className="text-gray-800 hover:text-blue-600 font-medium transition duration-300">Home</Link></li>
            <li><Link href="/customer" className="text-gray-800 hover:text-blue-600 font-medium transition duration-300">Customer</Link></li>
            <li><Link href="/service" className="text-gray-800 hover:text-blue-600 font-medium transition duration-300">Service</Link></li>
            <li><Link href="/contacts" className="text-gray-800 hover:text-blue-600 font-medium transition duration-300">Contacts</Link></li>
            <li><Link href="/users" className="text-gray-800 hover:text-blue-600 font-medium transition duration-300">Users</Link></li>
            <li><Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Login</Link></li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
    </div>
  )
}

export default Layout
