import { FaWhatsapp } from 'react-icons/fa'
import { FiMapPin, FiPhone, FiClock } from 'react-icons/fi'
import { BUSINESS_INFO } from '../config/constants'
import { buildWhatsAppContactUrl } from '../utils/whatsapp'

export default function Contact() {
  return (
    <section id="contacto" className="relative py-32 bg-wood-950 text-white overflow-hidden" aria-label="Contacto">
      <div className="absolute inset-0 bg-wood-grain opacity-[0.02]" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Left Column: Text & Context */}
            <div className="lg:w-1/2 space-y-10">
                <div className="space-y-6">
                    <span className="premium-label text-nature-500">Contacto Directo</span>
                    <h2 className="font-display font-medium text-5xl md:text-6xl text-white leading-tight">
                        Construyamos algo <br />
                        <span className="text-wood-400 italic">Ecepcional.</span>
                    </h2>
                    <p className="text-white/40 text-lg font-light leading-relaxed">
                        Desde la selección de la veta perfecta hasta el suministro completo de obra. Estamos listos para asesorarle con el profesionalismo que su proyecto merece.
                    </p>
                </div>

                <div className="space-y-8">
                    <div className="flex items-center gap-6 group">
                        <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-nature-600 group-hover:border-nature-600 transition-all">
                            <FiPhone size={20} className="text-nature-400 group-hover:text-white transition-colors" />
                        </div>
                        <a href={`tel:${BUSINESS_INFO.phone}`} className="text-2xl font-display font-bold hover:text-nature-400 transition-colors">
                            {BUSINESS_INFO.phone}
                        </a>
                    </div>
                    
                    <div className="flex items-center gap-6 group">
                        <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center">
                            <FiClock size={20} className="text-wood-400" />
                        </div>
                        <p className="text-white/60 font-medium">Lunes - Sábado: 8:00 AM - 6:00 PM</p>
                    </div>
                </div>
            </div>

            {/* Right Column: Cards & CTA */}
            <div className="lg:w-1/2 grid gap-8">
                <div className="p-10 bg-white/5 border border-white/10 space-y-4">
                    <FiMapPin className="text-wood-500" size={24} />
                    <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40">Visítenos</h3>
                    <p className="text-xl font-light leading-relaxed text-white/80">
                        {BUSINESS_INFO.address}
                    </p>
                </div>

                <a
                    href={buildWhatsAppContactUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative h-full flex flex-col items-center justify-center p-14 bg-nature-700 hover:bg-nature-800 transition-all duration-1000 text-center overflow-hidden shadow-[0_30px_60px_-15px_rgba(47,85,46,0.3)]"
                >
                    {/* Background Accents Modernos */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-y-20 translate-x-20 group-hover:bg-white/20 transition-all duration-1000" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-nature-950/20 rounded-full blur-2xl translate-y-16 -translate-x-16" />
                    
                    {/* Icono Principal con Glow */}
                    <div className="relative mb-10 group-hover:scale-110 transition-transform duration-700">
                        <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <FaWhatsapp size={72} className="text-white relative z-10" />
                    </div>

                    <div className="space-y-4 relative z-10">
                        <span className="text-[10px] uppercase tracking-[0.6em] font-black text-white/50 block">Atención Vía</span>
                        <h4 className="text-4xl font-display font-medium text-white tracking-tight">WhatsApp</h4>
                    </div>

                    <div className="mt-12 px-12 py-4 bg-white text-wood-950 text-[11px] uppercase font-bold tracking-[0.4em] 
                        group-hover:bg-sand-50 transition-all shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] active:scale-95">
                        Solicitar Cotización
                    </div>
                </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

