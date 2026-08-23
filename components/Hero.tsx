// components/Hero.tsx
'use client';

import { ArrowRight, Send } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="min-h-[70vh] flex flex-col justify-center">
      <div className="grid md:grid-cols-5 gap-10 items-center">
        <motion.div
          className="md:col-span-3 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/5 border border-white/10 text-indigo-300">
            <span className="mr-2">🚀</span> Entrepreneur & Developer
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="text-white">Hi, I&apos;m</span>
            <br />
            <span className="glow-text">Lalit Kumar</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            Building digital products & brands. Full-stack developer with a passion for clean design,
            scalable systems, and entrepreneurial growth.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="#contact"
              className="px-8 py-3.5 rounded-full bg-linear-to-r from-indigo-500 to-blue-500 text-white font-medium shadow-lg shadow-indigo-500/20 pulse-glow hover:shadow-indigo-500/40 transition-all duration-200 flex items-center gap-2"
            >
              <Send size={18} /> Let&apos;s Talk
            </Link>
            <Link
              href="#work"
              className="px-8 py-3.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition backdrop-blur-sm flex items-center gap-2"
            >
              <ArrowRight size={18} /> View Work
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-indigo-400/30 shadow-2xl shadow-indigo-500/10">
            {/* <div className="w-full h-full bg-linear-to-br from-indigo-900/40 to-blue-900/40 flex items-center justify-center text-7xl text-indigo-300/30"> */}
              <Image src="/Lalit.jpg" width={500} height={500} alt='profile-photo' className='w-full h-full flex items-center justify-center' loading='eager' />
            {/* </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}