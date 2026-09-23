import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="inicio" className="relative flex justify-center items-center min-h-screen overflow-hidden bg-negro">
      {/* Background gradients */}
      <div className="absolute inset-0 cp-hero-bg"></div>
      
      {/* Film strips left */}
      <div className="absolute top-0 bottom-0 left-0 flex flex-col w-[60px] opacity-10 gap-1 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="w-full h-10 bg-blanco flex-shrink-0"></div>
        ))}
      </div>
      
      {/* Film strips right */}
      <div className="absolute top-0 bottom-0 right-0 flex flex-col w-[60px] opacity-10 gap-1 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="w-full h-10 bg-blanco flex-shrink-0"></div>
        ))}
      </div>
      
      {/* Scan line and noise */}
      <div className="absolute inset-0 cp-scan-line"></div>
      <div className="absolute inset-0 cp-noise"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-block border border-oro/30 rounded-sm text-oro tracking-[0.3em] uppercase text-xs px-5 py-2 mb-8"
        >
          🎙 PODCAST · DOS PERSPECTIVAS · UNA CONVERSACIÓN
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-bebas text-[clamp(6rem,15vw,14rem)] leading-[0.9] tracking-[0.04em]"
        >
          <span className="block text-blanco">CONTRA</span>
          <span className="block text-stroke-oro">PLANO</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-[#f5efe68c] max-w-lg mx-auto mt-8 text-base font-light leading-relaxed"
        >
          Un podcast donde dos voces analizan el cine, la vida cotidiana y la cultura pop — desde ángulos opuestos.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <a href="#capitulos" className="inline-block bg-oro text-negro tracking-[0.12em] uppercase px-9 py-3.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(230,198,130,0.35)] btn-oro-clip">
            VER CAPÍTULOS
          </a>
          <a href="#nosotros" className="inline-block bg-transparent text-blanco border border-blanco/25 tracking-[0.12em] uppercase px-9 py-3.5 text-sm font-normal transition-all hover:border-oro hover:text-oro">
            QUIÉNES SOMOS
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-[50px] bg-gradient-to-b from-transparent to-oro animate-scrollAnim"></div>
        <span className="text-oro tracking-[0.2em] uppercase text-[10px]">SCROLL</span>
      </motion.div>
    </section>
  );
}
