// components/Work.tsx
"use client";

import { Briefcase, Code } from "lucide-react";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";

const projects = [
  {
    imgSrc: "/Project-img/hosur-auto-trims.png",
    title: "Hosur Auto Trims",
    tags: ["Next.js", "Backend", "JWT", "Dashboard"],
    projectLink: "https://hosur-auto-trims.vercel.app/",
  },
  {
    imgSrc: "/Project-img/real-estate.png",
    title: "Real Estate Pro",
    tags: ["Next.js", "Backend", "JWT", "Dashboard"],
    projectLink: "https://real-estate-black-three.vercel.app/",
  },
  {
    imgSrc: "/Project-img/AakarshanWebsite.png",
    title: "Aakarshan Institute Website",
    tags: ["Next.js", "Backend", "JWT", "Router"],
    projectLink: "https://aakarshan-website-g1ra.vercel.app/",
  },
  {
    imgSrc: "/Project-img/Fitment-Camp.png",
    title: "Artificial Limb Distribution App",
    tags: ["Next.js", "Backend", "Supabase", "excel.js", "Router"],
    projectLink: "https://limb-distribution-app.vercel.app/",
  },
  {
    imgSrc: "/Project-img/Institute.png",
    title: "Institute Website",
    tags: ["Next.js", "Backend", "JWT", "Development"],
    projectLink: "https://aakarshan-pi.vercel.app/",
  },
  // {
  //   imgSrc: "/Project-img/Blogifyr.png",
  //   title: "A Blogging Platform",
  //   tags: ["API", "Backend", "JWT", "Development"],
  //   projectLink: "https://blogifyr.vercel.app/",
  // },
  {
    imgSrc: "/Project-img/Digital-Market.png",
    title: "Digital Market App",
    tags: ["API", "MVC", "Development"],
    projectLink: "https://lalitk52221.github.io/Digital-market/",
  },
  {
    imgSrc: "/Project-img/Swiggy.png",
    title: "Swiggy Clone App",
    tags: ["API", "SPA"],
    projectLink: "https://lalitk52221.github.io/Swiggy-Clone/",
  },
  {
    imgSrc: "/Project-img/DrikPanchang.png",
    title: "Drik Panchang",
    tags: ["Development", "Web-design"],
    projectLink: "https://lalit-panchang.vercel.app/",
  },
  // {
  //   imgSrc: "/Project-img/Youtube-Clone.png",
  //   title: "Youtube Clone",
  //   tags: ["Development", "API"],
  //   projectLink: "https://lalitk52221.github.io/Youtube-Clone/",
  // },
  {
    imgSrc: "/Project-img/Registration-form.png",
    title: "Registration Form",
    tags: ["Web-design", "Development", "Backend"],
    projectLink: "https://registration-frontend-ima7.onrender.com/",
  },
  // {
  //   imgSrc: "/Project-img/Instagram-Clone.png",
  //   title: "Instagram Clone",
  //   tags: ["Web-design", "Development"],
  //   projectLink: "https://lalitk52221.github.io/Instagram-Clone/",
  // },
  {
    imgSrc: "/Project-img/Youtube-Analyser.png",
    title: "Youtube Video Analyser",
    tags: ["Web-Design", "Development"],
    projectLink: "https://lalitk52221.github.io/youtube-video-analyser/",
  },
  // {
  //   imgSrc: "/Project-img/Tally.png",
  //   title: "Tally Mock Test Quiz",
  //   tags: ["Web-design", "Development"],
  //   projectLink: "https://lalitk52221.github.io/Tally-Mock-Test/",
  // },
  {
    imgSrc: "/Project-img/QR.png",
    title: "QR Code Generator",
    tags: ["Web-design", "Development"],
    projectLink: "https://lalitk52221.github.io/QR---Code-Generator/",
  },

  {
    imgSrc: "/Project-img/Uber.png",
    title: "Uber Receipt",
    tags: ["Web-design", "Development"],
    projectLink: "https://lalitk52221.github.io/Uber-receipt/",
  },
  // {
  //   imgSrc: "/Project-img/TodoList.png",
  //   title: "To Do List",
  //   tags: ["Web-design", "Development"],
  //   projectLink: "https://lalitk52221.github.io/TO-DO-LIST/",
  // },
];

// const projects = [
//   { title: 'AI SaaS Platform', desc: 'Next.js, Tailwind, OpenAI API', icon: '🧠' },
//   { title: 'EcoCommerce', desc: 'Full-stack with Stripe, React', icon: '🌿' },
//   { title: 'Portfolio Builder', desc: 'Drag & drop, Next.js, Firebase', icon: '✏️' },
//   { title: 'AI SaaS Platform', desc: 'Next.js, Tailwind, OpenAI API', icon: '🧠' },
//   { title: 'EcoCommerce', desc: 'Full-stack with Stripe, React', icon: '🌿' },
//   { title: 'Portfolio Builder', desc: 'Drag & drop, Next.js, Firebase', icon: '✏️' },
// ];

export default function Work() {
  return (
    <section id="work">
      <div className="flex items-center gap-3 mb-8">
        <Briefcase className="text-2xl text-indigo-400" />
        <h2 className="text-3xl font-bold text-white">
          My Portfolio Highlights
        </h2>
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
            <div className="project-img text-4xl text-indigo-300/40 h-50 w-full">
              <a
                href={proj.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="h-50 w-full"
              >
                <Image
                  src={proj.imgSrc}
                  width={300}
                  height={300}
                  alt={proj.title}
                  className="h-full w-full object-fit "
                  loading="eager"
                />
              </a>
            </div>
            <div className="p-5 space-y-2 flex flex-col items-start  justify-between">
              <h3 className="text-xl font-semibold text-white group-hover:text-indigo-300 transition">
                {proj.title}
              </h3>
              <p className="text-gray-400 text-sm flex items-center flex-wrap gap-2 ">
                {proj.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="border border-gray-800 rounded px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </p>

              <div className="pt-3 flex gap-3 text-indigo-300/70 text-sm">
                <a
                  href={proj.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <span className="flex items-center gap-1">
                    <Code size={14} /> Live Demo
                  </span>
                </a>
                <span className="flex items-center gap-1">
                  <BsGithub size={14} /> Source
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
