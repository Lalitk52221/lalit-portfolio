// components/Work.tsx
'use client';

import { Briefcase, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';

const projects = [
  { title: 'AI SaaS Platform', desc: 'Next.js, Tailwind, OpenAI API', icon: '🧠' },
  { title: 'EcoCommerce', desc: 'Full-stack with Stripe, React', icon: '🌿' },
  { title: 'Portfolio Builder', desc: 'Drag & drop, Next.js, Firebase', icon: '✏️' },
];

export default function Work() {
  return (
    <section id="work">
      <div className="flex items-center gap-3 mb-8">
        <Briefcase className="text-2xl text-indigo-400" />
        <h2 className="text-3xl font-bold text-white">Featured Work</h2>
        <span className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="glass-card rounded-2xl overflow-hidden hover-glow transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="project-img text-4xl text-indigo-300/40">
              {proj.icon}
            </div>
            <div className="p-5 space-y-2">
              <h3 className="text-xl font-semibold text-white group-hover:text-indigo-300 transition">
                {proj.title}
              </h3>
              <p className="text-gray-400 text-sm">{proj.desc}</p>
              <div className="pt-3 flex gap-3 text-indigo-300/70 text-sm">
                <span className="flex items-center gap-1"><Code size={14} /> Live Demo</span>
                <span className="flex items-center gap-1"><BsGithub size={14} /> Source</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}