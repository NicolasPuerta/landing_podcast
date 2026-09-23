import { useEffect, useState } from 'react';
import { getThemes } from '../services/api';

export default function ThemesSection() {
  const [themes, setThemes] = useState([]);

  useEffect(() => {
    getThemes().then(setThemes).catch(console.error);
  }, []);

  return (
    <section id="temas" className="relative py-24 px-12 bg-negro">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px bg-oro w-16"></div>
          <span className="text-oro tracking-[0.2em] text-sm uppercase">DE QUÉ HABLAMOS</span>
          <div className="h-px bg-oro w-16"></div>
        </div>
        
        <h2 className="font-bebas text-6xl md:text-8xl text-blanco text-center mb-20 leading-none">
          TEMAS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {themes.length > 0 ? (
            themes.map((theme) => (
              <div key={theme.id} className="relative pl-6 border-l border-blanco/10 hover:border-oro transition-colors group">
                <span className="absolute -top-6 -left-2 text-6xl font-bebas text-stroke-oro opacity-20 select-none group-hover:opacity-40 transition-opacity">
                  {String(theme.order).padStart(3, '0')}
                </span>
                {theme.image_url && (
                  <img src={theme.image_url} alt={theme.title} className="w-full h-40 object-cover mb-4 rounded-sm border border-blanco/10 grayscale group-hover:grayscale-0 transition-all duration-300" />
                )}
                <span className="text-oro text-xs tracking-[0.2em] uppercase block mb-2">
                  {theme.category}
                </span>
                <h3 className="text-blanco text-2xl font-medium mb-4">
                  {theme.title}
                </h3>
                <p className="text-[#f5efe699] text-sm font-light leading-relaxed">
                  {theme.description}
                </p>
              </div>
            ))
          ) : (
            <p className="text-white text-center col-span-3">Cargando temas...</p>
          )}
        </div>
      </div>
    </section>
  );
}
