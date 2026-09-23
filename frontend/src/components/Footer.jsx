export default function Footer() {
  return (
    <footer className="bg-[#0a0705] border-t border-blanco/5 py-16 px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        
        <div className="md:w-1/3">
          <a href="#inicio" className="text-oro tracking-[0.15em] font-bebas text-3xl no-underline block mb-6">
            CONTRA<span className="text-[#f5efe666]">PLANO</span>
          </a>
          <p className="text-[#f5efe68c] font-light text-sm max-w-xs leading-relaxed">
            Dos perspectivas. Una sola conversación. Transformamos el análisis en una experiencia auténtica, episodio a episodio.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-blanco font-bebas text-xl mb-2">NAVEGACIÓN</h4>
          <ul className="flex flex-col gap-2 p-0 m-0 list-none">
            {['Inicio', 'Capítulos', 'Contacto', 'Sobre nosotros'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace('í', 'i').replace(' ', '-')}`} className="text-[#f5efe68c] text-sm hover:text-oro transition-colors no-underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-blanco font-bebas text-xl mb-2">SÍGUENOS</h4>
          <ul className="flex gap-4 p-0 m-0 list-none">
            {[
              { label: 'FB', url: 'https://www.facebook.com/share/1FwgCoeFAc/' },
              { label: 'IG', url: 'https://www.instagram.com/contraplano.podcast?igsh=MWhwMGVoNnkyOXQ4eA==' },
              { label: 'YT', url: 'https://youtube.com/@contraplanopodcast-f5p?si=0XHarIDRianUrkKW' },
              { label: 'TK', url: 'https://www.tiktok.com/@contraplano.podcas' },
              { label: 'WS', url: 'https://whatsapp.com/channel/0029Vb7RqRB9mrGZ3QT9pj07' },
            ].map((link) => (
              <li key={link.label}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-oro border border-oro/30 w-10 h-10 flex items-center justify-center rounded-full text-xs transition-all hover:bg-oro hover:text-negro cursor-none">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-blanco/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[#f5efe666] text-xs">
        <p>© 2026 CONTRAPLANO — Todos los derechos reservados</p>
        <p className="tracking-widest">MEDELLÍN · CO</p>
      </div>
    </footer>
  );
}
