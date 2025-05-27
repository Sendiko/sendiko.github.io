// components/SiteHeader.tsx
import React from "react";
import Link from "next/link";

interface NavItemProps {
  href: string;
  label: string;
}

interface SiteHeaderProps {
  logoText: string;
  navItems: NavItemProps[];
}

const SiteHeader: React.FC<SiteHeaderProps> = ({ logoText, navItems }) => {
  return (
    <header className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="w-11/12 max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-800 m-0">
          <Link href="/" className="hover:text-blue-600">
            {logoText}
          </Link>
        </h1>
        <nav>
          <ul className="list-none m-0 p-0 flex">
            {navItems.map((item) => (
              <li key={item.href} className="ml-6">
                <Link
                  href={item.href}
                  className="no-underline text-blue-800 font-medium transition-colors duration-300 ease-in-out hover:text-indigo-500"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
