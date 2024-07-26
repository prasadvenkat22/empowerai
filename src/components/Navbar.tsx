import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

const tabs = [
  { name: "Contacts", path: "/contacts" },
  { name: "Customer", path: "/customer" },
  { name: "Service", path: "/service" },
  { name: "Users", path: "/users" },
  { name: "Login", path: "/login" },
];

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const isActive = (path) => router.pathname === path;

  return (
    <header className="bg-white shadow-md w-full">
      <nav className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div>
            <Link href="/" className="text-xl font-bold text-gray-800" aria-label="Home">
              Logo
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                href={tab.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
                  isActive(tab.path)
                    ? "bg-blue-500 text-white"
                    : "text-gray-800 hover:bg-blue-100"
                }`}
              >
                {tab.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button className="text-gray-800 hover:text-gray-600" onClick={() => setIsOpen(!isOpen)}>
              <CiMenuBurger size={22} />
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-2 mt-2">
              {tabs.map((tab) => (
                <Link
                  key={tab.name}
                  href={tab.path}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
                    isActive(tab.path)
                      ? "bg-blue-500 text-white"
                      : "text-gray-800 hover:bg-blue-100"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {tab.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
