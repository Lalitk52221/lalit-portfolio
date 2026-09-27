// components/Resume.tsx
'use client';

import { FileText, 
  // Download 
} from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Full-Stack Developer',
    company: 'TechVanch Innovations.',
    period: 'Aug 2024 – Dec 25',
    desc: 'Architected microservices, led frontend team, improved performance by 40%. Built internal tools for data analytics.',
    tags: ['React', 'Node', 'AWS'],
  },
  
];

export default function Resume() {
  return (
    <section id="resume">
      <div className="flex items-center gap-3 mb-8">
        <FileText className="text-2xl text-indigo-400" />
        <h2 className="text-3xl font-bold text-white">Job Experience</h2>
        <span className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="glass-card rounded-2xl p-6 space-y-5"
            initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 text-xl">
                {idx === 0 ? '💼' : '🚀'}
              </div>
              <div>
                <h3 className="font-bold text-white">{exp.title}</h3>
                <p className="text-gray-400 text-sm">{exp.company} · {exp.period}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed pl-16">{exp.desc}</p>
            <div className="flex flex-wrap gap-2 pl-16">
              {exp.tags.map((tag) => (
                <span key={tag} className="text-xs bg-white/5 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {/* <a
          href="#"
          className="inline-block glass-card px-8 py-3.5 rounded-full text-sm font-medium border border-white/10 hover:border-indigo-400/30 transition"
        >
          <Download className="inline mr-2" size={16} /> Download Full Resume (PDF)
        </a> */}
      </motion.div>
    </section>
  );
}