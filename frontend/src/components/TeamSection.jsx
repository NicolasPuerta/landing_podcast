export default function TeamSection() {
  const team = [
    {
      id: 1,
      name: "ANDRÉS\nSÁNCHEZ",
      role: "LÍDER",
      description: "Desarrollador, diseñador y animador. El que da vida visual al proyecto — desde la identidad hasta cada pixel de la experiencia digital.",
      tags: ["DEV", "DISEÑO", "ANIMACIÓN"],
      image: "/andres.png",
      order: 1
    },
    {
      id: 2,
      name: "SARA\nCASTRILLON",
      role: "INTEGRANTE",
      description: "Ilustradora, publicista y animador. La voz creativa que conecta el contenido con la audiencia — estrategia, imagen y presencia.",
      tags: ["ILUSTRACIÓN", "PUBLICIDAD", "ANIMACIÓN"],
      image: "/sara.png",
      order: 2
    }
  ];

  return (
    <section id="nosotros" className="relative py-24 px-12 bg-gris">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px bg-oro w-8"></div>
          <span className="text-oro tracking-[0.2em] text-sm uppercase">DETRÁS DEL MICRÓFONO</span>
        </div>
        
        <h2 className="font-bebas text-6xl md:text-8xl text-blanco mb-16 leading-none uppercase">
          Nosotros
        </h2>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24 relative">
          {/* Vertical divider line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-blanco/10"></div>

          {team.map((member) => (
            <div key={member.id} className="flex-1 relative pb-12">
              <span className="absolute bottom-0 right-0 text-[8rem] font-bebas text-blanco/5 leading-none select-none">
                {String(member.order).padStart(2, '0')}
              </span>
              
              <div className="flex gap-6 items-start mb-6">
                <div className="w-24 h-24 flex-shrink-0 bg-blanco p-1 relative" style={{ clipPath: 'polygon(0 15px, 15px 0, 100% 0, 100% 100%, 0 100%)' }}>
                  <img src={member.image} alt={member.name.replace('\n', ' ')} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                
                <div className="pt-2">
                  <h3 className="font-bebas text-3xl md:text-4xl text-blanco leading-[0.9] whitespace-pre-line tracking-wide">
                    {member.name}
                  </h3>
                  <span className="text-oro text-[10px] tracking-[0.2em] uppercase mt-3 block">
                    {member.role}
                  </span>
                </div>
              </div>
              
              <p className="text-[#f5efe699] font-light text-sm leading-relaxed mb-6 max-w-sm relative z-10">
                {member.description}
              </p>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {member.tags.map(tag => (
                  <span key={tag} className="text-[#f5efe699] border border-blanco/20 px-3 py-1 text-[10px] tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
