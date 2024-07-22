import { FC } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavbarProps {
  
}
const tabs = [
    { name: 'Contacts', path: '/contacts' },
    { name: 'Customer', path: '/customer' },
    { name: 'Service', path: '/service' },
    { name: 'Users', path: '/users' },
    { name: 'Login', path: '/login' },
  ];

const Navbar: FC<NavbarProps> = ({
  
}) => {
    
    const router = useRouter();

    const isActive = (path: string) => router.pathname === path;
  return (
    <header className="bg-white shadow-md">
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <Link href="/" className="text-xl font-bold text-gray-800" aria-label="Home">
            Logo
          </Link>
        </div>
        <div className="flex space-x-4">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              href={tab.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
                isActive(tab.path)
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-800 hover:bg-blue-100'
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Navbar