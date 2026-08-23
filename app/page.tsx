// app/page.tsx
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Work from '@/components/Work';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg text-gray-200 antialiased">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 space-y-24">
        <Hero />
        <Skills />
        <Work />
        <Resume />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}