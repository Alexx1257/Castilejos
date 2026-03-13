import { FiAward } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { buildWhatsAppContactUrl } from '../utils/whatsapp'

export default function PromoBanner() {
  return (
    <section 
      className="relative py-16 bg-wood-950 overflow-hidden" 
      aria-label="Promociones especiales"
    >
      {/* Texture Background */}
      <div className="absolute inset-0 bg-wood-grain opacity-[0.05]" />
      
      <div className="section-container relative z-10">
        <div className="bg-wood-800/40 border border-white/10 p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-10">
          
          <div className="flex items-center gap-8">
            <div className="w-16 h-16 bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
              <FiAward size={32} className="text-sand-300" />
            </div>
            <div className="space-y-2">
              <span className="premium-label text-sand-400">Oferta Exclusiva de Temporada</span>
              <h3 className="font-display font-black text-2xl md:text-4xl text-white tracking-tight">
                20% de Descuento en <span className="text-sand-300 italic font-light">Madera de Cedro</span>
              </h3>
              <p className="text-sand-400 text-sm font-light">Válido en compras superiores a 50 tramos. Aplica entrega inmediata.</p>
            </div>
          </div>

          <a
            href={buildWhatsAppContactUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-white text-wood-950 font-bold text-[11px] uppercase tracking-[0.3em] px-10 py-5 transition-all hover:bg-wood-900 hover:text-white shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.2)]"
          >
            <FaWhatsapp size={22} className="text-nature-600 group-hover:text-white transition-all duration-500 group-hover:scale-125 group-hover:rotate-6" />
            <span>Solicitar Beneficio</span>
          </a>

        </div>
      </div>

      {/* Accents */}
      <div className="absolute top-0 right-0 w-64 h-full bg-white/5 skew-x-[-20deg] translate-x-32 pointer-events-none" />
    </section>
  )
}
