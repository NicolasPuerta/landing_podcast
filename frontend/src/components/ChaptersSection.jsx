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
            chapters.map((chapter, index) => {
              // Extract YouTube ID if possible
              const getYouTubeID = (url) => {
                if (!url) return null;
                const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
                return match ? match[1] : null;
              };
              
              const ytId = getYouTubeID(chapter.video_url);
              const isFirst = index === 0;

              return (
              <div key={chapter.id} className={`group ${isFirst ? 'md:col-span-3 lg:col-span-3' : 'cursor-none'}`}>
                {isFirst && ytId ? (
                  // Autoplay video for the first chapter
                  <div className="block aspect-video bg-gris2 mb-6 relative overflow-hidden border border-blanco/5">
                    <iframe
                      src={`https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1`}
                      title={chapter.title}
                      className="absolute top-0 left-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  // Thumbnail + Link for the rest
                  <a href={chapter.video_url || '#'} target="_blank" rel="noopener noreferrer" className="block aspect-video bg-gris2 mb-6 relative overflow-hidden border border-blanco/5 transition-colors group-hover:border-oro/50">
                    {ytId ? (
                      <img 
                        src={`https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`} 
                        alt={chapter.title} 
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" 
                        onError={(e) => { e.target.src = `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`; }}
                      />
                    ) : null}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full border border-blanco/20 bg-negro/50 backdrop-blur-sm flex items-center justify-center group-hover:bg-oro group-hover:text-negro group-hover:border-oro transition-all z-10">
                        ▶
                      </div>
                    </div>
                  </a>
                )}
                
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
            )})
          ) : (
            <p className="text-white">Cargando capítulos...</p>
          )}
        </div>
      </div>
    </section>
  );
}
