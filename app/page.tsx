'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, ArrowDown } from 'lucide-react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.classList.add('bg-gray-950', 'text-white');
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      interest: (form.elements.namedItem('interest') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('https://hook.eu2.make.com/9xid75009h62zuh7gqgllym40wq1uzhr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        console.error('Form submission failed:', res.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <main className="font-sans bg-gray-950 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-4 bg-gray-900/70 backdrop-blur-lg shadow-lg border-b border-gray-800">
        <h1 className="text-2xl font-semibold tracking-tight">Pearson Specter Litt</h1>
        <div className="flex items-center gap-6 text-sm md:text-base">
          {['About', 'Practice', 'Attorneys', 'Cases', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="relative group">
              <span className="hover:text-blue-400 transition-colors">{item}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-gray-700 hover:bg-gray-800"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
      >
        <motion.div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight"
        >
          Pearson Specter Litt
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl"
        >
          Corporate Law • Strategic Litigation • Elite Counsel for the World’s Most Powerful Clients.
        </motion.p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="px-8 py-4 rounded-full bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition"
        >
          Schedule a Consultation
        </motion.a>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10"
        >
          <ArrowDown className="w-6 h-6 text-blue-400" />
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-28 px-10 max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-semibold mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h2>
        <p className="text-lg leading-relaxed text-gray-300 text-center max-w-3xl mx-auto">
          Pearson Specter Litt redefines legal excellence through innovation, intelligence, and influence.
          Founded by Jessica Pearson and Harvey Specter, we combine world-class litigation prowess with
          cutting-edge strategy to deliver transformative outcomes for our clients.
        </p>
      </section>

      {/* Practice Areas */}
      <section id="practice" className="py-28 bg-gray-900 px-10">
        <motion.h2
          className="text-5xl font-semibold mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Practice Areas
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {['Corporate Law', 'Mergers & Acquisitions', 'Commercial Litigation', 'Intellectual Property', 'Real Estate Law', 'Legal Advisory'].map(
            (area, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-gray-800 rounded-2xl shadow-lg border border-gray-700"
              >
                <h3 className="text-2xl font-semibold mb-3 text-blue-400">{area}</h3>
                <p className="text-gray-400">
                  We provide comprehensive, results-driven representation for complex business and corporate matters.
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 max-w-3xl mx-auto">
        <motion.h2
          className="text-5xl font-semibold mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>
        <motion.div
          className="p-10 rounded-3xl bg-gray-900 backdrop-blur-lg shadow-2xl border border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <AnimatePresence>
            {!submitted ? (
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid gap-6"
              >
                <input name="name" type="text" placeholder="Full Name" required className="p-3 rounded-md bg-gray-800 border border-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500" />
                <input name="email" type="email" placeholder="Business Email" required className="p-3 rounded-md bg-gray-800 border border-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500" />
                <input name="phone" type="tel" placeholder="+91XXXXXXXXXX" required className="p-3 rounded-md bg-gray-800 border border-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500" />
                <input name="company" type="text" placeholder="Company (optional)" className="p-3 rounded-md bg-gray-800 border border-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500" />
                <select name="interest" required className="p-3 rounded-md bg-gray-800 border border-gray-700 text-gray-300 focus:ring-2 focus:ring-blue-500">
                  <option value="">Select Service Interest</option>
                  <option>Corporate Litigation</option>
                  <option>Mergers & Acquisitions</option>
                  <option>Intellectual Property</option>
                  <option>Legal Advisory</option>
                  <option>Other</option>
                </select>
                <textarea name="message" placeholder="Briefly describe your case or inquiry" rows={4} className="p-3 rounded-md bg-gray-800 border border-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500"></textarea>
                <label className="flex items-center gap-2">
                  <input type="checkbox" required />{" "}
                  <span className="text-sm text-gray-400">
                    I consent to be contacted by Pearson Specter Litt or its AI assistant immediately.
                  </span>
                </label>
                <motion.button type="submit" whileHover={{ scale: 1.03 }} className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                  Submit
                </motion.button>
                <a href="https://calendly.com/aayushdeshpande532/new-meeting" target="_blank" rel="noopener noreferrer" className="text-center text-blue-400 hover:text-blue-300 font-medium">
                  📅 Schedule a Consultation
                </a>
              </motion.form>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-lg text-green-500">
                ✅ Thank you — our AI assistant will reach out to you right away.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      <footer className="py-10 text-center border-t border-gray-800">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Pearson Specter Litt. Designed for excellence.
        </p>
      </footer>
    </main>
  );
}
