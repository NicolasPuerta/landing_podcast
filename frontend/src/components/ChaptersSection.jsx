import { useEffect, useState } from 'react';
import { getChapters } from '../services/api';

export default function ChaptersSection() {
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    getChapters().then(setChapters).catch(console.error);
  }, []);

  return (
    <section id="capitulos" className="relative py-24 px-12 bg-gris">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-oro font-bebas text-4xl">CAP</span>
          <div className="h-px bg-oro w-16"></div>
          <span className="text-oro tracking-[0.2em] text-sm uppercase">EN PANTALLA</span>
        </div>
        
        <div className="flex justify-between items-end mb-16 border-b border-blanco/10 pb-6">
          <h2 className="font-bebas text-6xl md:text-8xl text-blanco leading-none m-0">CAPÍTULOS</h2>
          <span className="text-[#f5efe699] tracking-[0.2em] text-xs uppercase hidden md:block">
            TEMPORADA 1 — EN CURSO
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {chapters.length > 0 ? (
            chapters.map((chapter) => (
              <div key={chapter.id} className="group cursor-none">
                <a href={chapter.video_url || '#'} target="_blank" rel="noopener noreferrer" className="block aspect-video bg-gris2 mb-6 relative overflow-hidden border border-blanco/5 transition-colors group-hover:border-oro/50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border border-blanco/20 flex items-center justify-center group-hover:bg-oro group-hover:text-negro group-hover:border-oro transition-all">
                      ▶
                    </div>
                  </div>
                </a>
                <div className="flex gap-4">
                  <span className="text-oro font-bebas text-2xl mt-1">
                    {String(chapter.order).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-blanco text-xl font-medium mb-2 group-hover:text-oro transition-colors">
                      {chapter.title}
                    </h3>
                    <p className="text-[#f5efe68c] text-sm font-light leading-relaxed">
                      {chapter.description}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white">Cargando capítulos...</p>
          )}
        </div>
      </div>
    </section>
  );
}
