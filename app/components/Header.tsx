"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <span className="text-white">MyApp</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:underline">
            Accueil
          </Link>
          <Link href="/users" className="hover:underline">
            Utilisateurs
          </Link>
          <Link href="/settings" className="hover:underline">
            Paramètres
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-blue-700 py-4">
          <ul className="space-y-4 text-center">
            <li>
              <Link
                href="/"
                className="block hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/users"
                className="block hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Utilisateurs
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                className="block hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Paramètres
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
