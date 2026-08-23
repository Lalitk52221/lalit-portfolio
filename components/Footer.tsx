// components/Footer.tsx
import { Code2 } from 'lucide-react';
import { BsYoutube } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 text-center text-gray-500 text-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <span>© 2026 Lalit Kumar — Built with Next.js & Tailwind</span>
        <span className="flex gap-5 text-gray-600">
          <FaXTwitter  size={18} className="hover:text-indigo-300 cursor-pointer transition" />
          <BsYoutube size={18} className="hover:text-indigo-300 cursor-pointer transition" />
          <Code2 size={18} className="hover:text-indigo-300 cursor-pointer transition" />
        </span>
      </div>
    </footer>
  );
}