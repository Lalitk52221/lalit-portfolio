// components/Skills.tsx
'use client';

import { Code, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = ['React / Next.js', 'TypeScript', 'Node.js', 'Python', 'Tailwind CSS', 'GraphQL', 'PostgreSQL', 'AWS'];
const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '12+', label: 'Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction' },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="flex items-center gap-3 mb-8">
        <Code className="text-2xl text-indigo-400" />
        <h2 className="text-3xl font-bold text-white">Expertise & Skills</h2>
        <span className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent" />
      </div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {skills.map((skill, i) => (
          <div
            key={i}
            className="skill-tag glass-card rounded-2xl px-5 py-4 text-center text-sm font-medium hover:text-white transition-colors"
          >
            <CheckCircle className="inline mr-2 text-indigo-400" size={16} /> {skill}
          </div>
        ))}
      </motion.div>

      <motion.div
        className="mt-8 glass-card rounded-2xl p-6 grid md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {stats.map((stat, i) => (
          <div key={i}>
            <span className="text-indigo-300 text-3xl font-bold">{stat.value}</span>
            <span className="text-gray-400 ml-2">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}