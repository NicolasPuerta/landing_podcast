import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Capítulos', href: '#capitulos' },
    { name: 'Temas', href: '#temas' },
    { name: 'Nosotros', href: '#nosotros' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 md:py-5 transition-all duration-300 ${scrolled ? 'bg-negro/95 backdrop-blur-md border-b border-white/5' : 'bg-gradient-to-b from-[#0a0705f2] to-transparent'}`}>
        <a href="#inicio" className="text-oro tracking-[0.15em] font-bebas text-2xl md:text-3xl no-underline relative z-[60]">
          CONTRA<span className="text-[#f5efe666]">PLANO</span>
        </a>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex m-0 p-0 list-none gap-10">
          {links.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href}
                className="text-[#f5efe699] tracking-[0.12em] uppercase text-sm no-underline transition-colors duration-300 relative hover:text-oro group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-oro transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-oro flex flex-col justify-center items-center w-8 h-8 relative z-[60] cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-oro transition-all duration-300 ${isMenuOpen ? 'rotate-45 absolute' : '-translate-y-1.5'}`}></span>
          <span className={`block w-6 h-0.5 bg-oro transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-oro transition-all duration-300 ${isMenuOpen ? '-rotate-45 absolute' : 'translate-y-1.5'}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[55] bg-negro/98 backdrop-blur-lg flex flex-col items-center justify-center"
          >
            <ul className="flex flex-col m-0 p-0 list-none gap-8 text-center">
              {links.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-blanco font-bebas text-4xl tracking-[0.1em] uppercase no-underline hover:text-oro transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
