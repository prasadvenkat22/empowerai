import React from 'react'
import Link from 'next/link'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/customer">Customer</Link></li>
          <li><Link href="/service">Service</Link></li>
          <li><Link href="/contacts">Contacts</Link></li>
          <li><Link href="/users">Users</Link></li>
          <li><Link href="/login">Login</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  )
}

export default Layout
