// components/Skills.tsx
"use client";

import { Code} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
const skillItem = [
  {
    imgSrc: "/images/Next.js.png",
    label: "Next.js",
    desc: "Framework",
  },

  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/images/Html.png",
    label: "HTML",
    desc: "Web Structure",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
];
const OtherskillItem = [
  {
    imgSrc: "/images/Illustrator.png",
    label: "Illustrator",
    desc: "Design tool",
  },
  {
    imgSrc: "/images/coreldraw.png",
    label: "CorelDRAW",
    desc: "Design tool",
  },
  {
    imgSrc: "/images/canva.png",
    label: "Canva",
    desc: "Design tool",
  },
  {
    imgSrc: "/images/Photoshop.png",
    label: "Photoshop",
    desc: "Image Editing",
  },
  {
    imgSrc: "/images/office.png",
    label: "MS Office Advance",
    desc: "Productivity",
  },
  {
    imgSrc: "/images/filmora.png",
    label: "Filmora",
    desc: "Video Editing",
  },
  {
    imgSrc: "/images/Tally.png",
    label: "Tally Prime",
    desc: "Accounting",
  },
];
// const skills = ['React / Next.js', 'TypeScript', 'Node.js', 'Python', 'Tailwind CSS', 'GraphQL', 'PostgreSQL', 'AWS'];
const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "12+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function Skills() {
  return (
    <section id="skill">
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
        {skillItem.map((skill, i) => (
          <div
            key={i}
            className="skill-tag glass-card rounded-2xl px-5 py-4 text-center text-sm font-medium hover:text-white transition-colors flex items-center gap-3"
          >
            {/* <CheckCircle className="inline mr-2 text-indigo-400" size={16} /> */}
            <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors">
              <Image
                src={skill.imgSrc}
                alt={skill.label}
                width={32}
                height={32}
              />
            </figure>
            <div className="flex flex-col items-start">
              <h3>{skill.label}</h3>
              <p className="text-zinc-400 text-sm">{skill.desc}</p>
            </div>
          </div>
        ))}
      </motion.div>

      <div> </div>
      <div className="flex items-center gap-3 my-8">
        {/* <Code className="text-2xl text-indigo-400" /> */}
        <h3 className="text-xl font-semibold text-white ml-10">
          Other Tools & Skills I Possess
        </h3>
        <span className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent" />
      </div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {OtherskillItem.map((skill, i) => (
          <div
            key={i}
            className="skill-tag glass-card rounded-2xl px-5 py-4 text-center text-sm font-medium hover:text-white transition-colors flex items-center gap-3"
          >
            {/* <CheckCircle className="inline mr-2 text-indigo-400" size={16} /> */}
            <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors">
              <Image
                src={skill.imgSrc}
                alt={skill.label}
                width={32}
                height={32}
              />
            </figure>
            <div className="flex flex-col items-start">
              <h3>{skill.label}</h3>
              <p className="text-zinc-400 text-sm">{skill.desc}</p>
            </div>
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
            <span className="text-indigo-300 text-3xl font-bold">
              {stat.value}
            </span>
            <span className="text-gray-400 ml-2">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
