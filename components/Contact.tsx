// components/Contact.tsx
'use client';

import { Handshake, Mail, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { LiaLinkedin } from 'react-icons/lia';
import { BsGithub } from 'react-icons/bs';

export default function Contact() {
  return (
    <section id="contact">
      <motion.div
        className="glass-card rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center text-3xl text-indigo-400 mx-auto mb-4">
          <Handshake size={32} />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Let&apos;s Build Something <span className="glow-text">Amazing</span>
        </h2>
        <p className="text-gray-400 mt-3 max-w-lg mx-auto">
          Whether it&apos;s for an interview, a startup idea, or a collaboration — I&apos;m open to meaningful conversations.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:Lalit@example.com"
            className="px-8 py-3 rounded-full bg-linear-to-r from-indigo-500 to-blue-500 text-white font-medium shadow-lg shadow-indigo-500/20 pulse-glow flex items-center gap-3"
          >
            <Mail size={18} /> Lalit@example.com
          </a>
          <a
            href="#"
            className="px-8 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center gap-3"
          >
            <LiaLinkedin size={18} /> LinkedIn
          </a>
          <a
            href="#"
            className="px-8 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center gap-3"
          >
            <BsGithub size={18} /> GitHub
          </a>
        </div>
        <div className="mt-8 pt-6 border-t border-white/5 flex justify-center gap-6 text-gray-500 text-sm">
          <span className="flex items-center gap-1"><MapPin size={14} /> Remote · India</span>
          <span className="flex items-center gap-1"><Calendar size={14} /> Available for hire</span>
        </div>
      </motion.div>
    </section>
  );
}