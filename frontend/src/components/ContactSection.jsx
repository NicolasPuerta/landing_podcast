import { useState } from 'react';
import { sendContactMessage } from '../services/api';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await sendContactMessage(formData);
      setStatus('success');
      
      const phoneNumber = "573014253106";
      const text = `Hola Contraplano, soy ${formData.name}. Mi correo es ${formData.email}.\n\nTe escribo para lo siguiente:\n${formData.message}`;
      const encodedText = encodeURIComponent(text);
      window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');

      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="relative py-24 px-12 bg-negro">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-oro font-bebas text-4xl">02</span>
            <div className="h-px bg-oro w-16"></div>
            <span className="text-oro tracking-[0.2em] text-sm uppercase">CONECTA</span>
          </div>
          <h2 className="font-bebas text-6xl text-blanco mb-8 leading-none">
            CONTÁCTANOS
          </h2>
          <p className="text-[#f5efe699] font-light leading-relaxed mb-8">
            ¿Tienes alguna idea para un episodio? ¿Quieres ser patrocinador? Envíanos un mensaje y te responderemos lo más pronto posible.
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <input
                type="text"
                placeholder="TU NOMBRE"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-transparent border-b border-blanco/20 pb-3 text-blanco placeholder:text-blanco/30 focus:outline-none focus:border-oro transition-colors text-sm tracking-wider"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="TU EMAIL"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-transparent border-b border-blanco/20 pb-3 text-blanco placeholder:text-blanco/30 focus:outline-none focus:border-oro transition-colors text-sm tracking-wider"
              />
            </div>
            <div>
              <textarea
                placeholder="TU MENSAJE"
                required
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-transparent border-b border-blanco/20 pb-3 text-blanco placeholder:text-blanco/30 focus:outline-none focus:border-oro transition-colors text-sm tracking-wider resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="self-start bg-oro text-negro tracking-[0.12em] uppercase px-9 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(230,198,130,0.35)] btn-oro-clip cursor-none disabled:opacity-50"
            >
              {status === 'sending' ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}
            </button>
            
            {status === 'success' && <p className="text-green-500 text-sm mt-2">Mensaje enviado exitosamente.</p>}
            {status === 'error' && <p className="text-red-500 text-sm mt-2">Error al enviar el mensaje.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
