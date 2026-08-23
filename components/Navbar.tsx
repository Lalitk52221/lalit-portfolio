// components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glass-card border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="#home" className="text-2xl font-bold tracking-tight">
          <span className="glow-text">RK</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-400 text-xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-card border-t border-white/5 py-4 px-6 flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="nav-link text-base"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}