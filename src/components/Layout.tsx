import React from 'react'
import Link from 'next/link'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="layout">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item"><Link href="/">Home</Link></li>
          <li className="nav-item"><Link href="/customer">Customer</Link></li>
          <li className="nav-item"><Link href="/service">Service</Link></li>
          <li className="nav-item"><Link href="/contacts">Contacts</Link></li>
          <li className="nav-item"><Link href="/users">Users</Link></li>
          <li className="nav-item"><Link href="/login">Login</Link></li>
        </ul>
      </nav>
      <main className="main-content">{children}</main>
    </div>
  )
}

export default Layout
