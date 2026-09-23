import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5 transition-all duration-300 ${scrolled ? 'bg-negro/95 backdrop-blur-md border-b border-white/5' : 'bg-gradient-to-b from-[#0a0705f2] to-transparent'}`}>
      <a href="#inicio" className="text-oro tracking-[0.15em] font-bebas text-3xl no-underline">
        CONTRA<span className="text-[#f5efe666]">PLANO</span>
      </a>
      
      <ul className="flex m-0 p-0 list-none gap-10">
        {['Inicio', 'Capítulos', 'Temas', 'Nosotros'].map((item) => (
          <li key={item}>
            <a 
              href={`#${item.toLowerCase().replace('í', 'i')}`}
              className="text-[#f5efe699] tracking-[0.12em] uppercase text-sm no-underline transition-colors duration-300 relative hover:text-oro group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-oro transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
