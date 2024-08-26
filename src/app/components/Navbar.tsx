"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { usePathname } from "next/navigation"; // Import usePathname
import { createClient } from "../lib/supabase/client";
import { Avatar } from "./Avatar";

type Tab = {
  name: string;
  path: string;
};

const tabs: Tab[] = [
  { name: "Contacts", path: "/contacts" },
  { name: "Customer", path: "/customer" },
  { name: "Service", path: "/service" },
  { name: "Users", path: "/users" },
  { name: "Registration", path: "/registration-form" },
  { name: "Login", path: "/login" },
];

export default function Navbar() {
  const pathname = usePathname(); // Use usePathname to get the current path
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null); // Add state for user data
  const isActive = (path: string) => pathname === path; // Compare path with pathname

  useEffect(() => {
    const supabase = createClient();
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error);
      } else {
        setUser(data);
      }
    };
    fetchUser();
    console.log(user);
  }, []);
  console.log(user?.user?.email)

  return (
    <header className="bg-white shadow-md w-full">
      <nav className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div>
            <Link href="/" aria-label="Home">
              <Image
                src="/logo.svg"
                alt="EBI Logo"
                width={150}
                height={40}
                priority
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            {(user ? tabs.slice(0, tabs.length - 1) : tabs).map((tab) => (
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
            {user && 
            (
              <Avatar />
            )
           }
          </div>
          <div className="md:hidden">
            <button
              className="text-gray-800 hover:text-gray-600"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
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
}
