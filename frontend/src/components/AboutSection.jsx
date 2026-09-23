import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AboutSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="sobre-nosotros" className="relative py-24 px-12 bg-negro">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-oro font-bebas text-4xl">01</span>
            <div className="h-px bg-oro w-16"></div>
            <span className="text-oro tracking-[0.2em] text-sm uppercase">SOBRE EL PROYECTO</span>
          </div>
          <h2 className="font-bebas text-6xl md:text-8xl text-blanco mb-8 leading-none">
            QUÉ<br/>BUSCAMOS
          </h2>
        </div>
        
        <div className="w-full md:w-1/2">
          <p className="text-[#f5efe699] text-lg leading-relaxed font-light mb-10 border-l border-oro/30 pl-8">
            <strong className="text-blanco font-normal">Contraplano nace del lenguaje cinematográfico:</strong> dos voces que, desde puntos de vista opuestos, analizan cine, series y la vida cotidiana. Así completamos el análisis, igual que un contraplano completa una escena — con la meta de ser un proyecto de referencia en la comunicación digital.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-block bg-transparent text-oro border border-oro tracking-[0.12em] uppercase px-9 py-3 text-xs transition-all hover:bg-oro hover:text-negro cursor-none"
          >
            LEER MÁS
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-negro/80 backdrop-blur-sm p-4 cursor-auto"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-gris p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-blanco/10 relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="sticky float-right top-0 right-0 text-blanco/50 hover:text-oro transition-colors text-2xl font-bold cursor-pointer bg-gris/80 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center z-10"
              >
                ✕
              </button>
              <h3 className="font-bebas text-3xl md:text-4xl text-blanco mb-6 border-b border-blanco/10 pb-4 pr-10">
                🎬 QUÉ BUSCAMOS
              </h3>
              <div className="text-[#f5efe699] font-light leading-relaxed space-y-6 md:space-y-8 text-sm md:text-base">
                
                <div>
                  <span className="text-oro font-bebas text-xl md:text-2xl block mb-1">01</span>
                  <h4 className="text-blanco font-medium text-base md:text-lg mb-1 md:mb-2">Objetivos</h4>
                  <p>
                    Desarrollar contenido digital tipo podcast juvenil, ofreciendo contenido informativo, reflexivo y de entretenimiento, promoviendo la participación activa del público y fortaleciendo las habilidades comunicativas.
                  </p>
                </div>

                <div>
                  <span className="text-oro font-bebas text-xl md:text-2xl block mb-1">02</span>
                  <h4 className="text-blanco font-medium text-base md:text-lg mb-1 md:mb-2">El nombre</h4>
                  <p>
                    El término viene del lenguaje cinematográfico: el encuadre opuesto al plano principal en una conversación. Primero ves al que habla, luego la reacción del otro. Así somos nosotros.
                  </p>
                </div>

                <div>
                  <span className="text-oro font-bebas text-xl md:text-2xl block mb-1">03</span>
                  <h4 className="text-blanco font-medium text-base md:text-lg mb-1 md:mb-2">Misión</h4>
                  <p>
                    Nuestra misión es aplicar nuestra media técnica en contenidos digitales en un formato de podcast, desarrollando, promoviendo la expresión, el pensamiento crítico y la participación activa del público, que los oyentes se informe mediante nuestro contenido, se entretengan y generen una reflexión positiva de nuestros capítulos.
                  </p>
                </div>

                <div className="pt-4 border-t border-blanco/10">
                  <span className="text-oro block mb-1">✦</span>
                  <h4 className="text-blanco font-medium text-base md:text-lg mb-1 md:mb-2">Nuestra visión</h4>
                  <p>
                    Nuestra visión es posicionar el podcast de Contraplano como un proyecto innovador y referente en la comunicación digital, reconocido por su capacidad para impactar positivamente la vida de los oyentes — capítulo a capítulo, perspectiva a perspectiva.
                  </p>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
