import { useState, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhone, FiExternalLink, FiClock, FiMapPin, FiNavigation } from 'react-icons/fi'
import { BUSINESS_INFO } from '../config/constants'
import { buildWhatsAppContactUrl } from '../utils/whatsapp'

/**
 * ─── SECCIÓN FINAL REFINADA: VISÍTANOS ──────────────────────────────
 * - Título directo y cálido.
 * - Jerarquía clara: Información > Acción > Mapa.
 * - Estética: Madera premium y tonos cálidos.
 */

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date()
      const day = now.getDay()
      const hour = now.getHours()
      const min = now.getMinutes()
      const currentTimeInMins = hour * 60 + min

      if (day >= 1 && day <= 5) {
        setIsOpen(currentTimeInMins >= 480 && currentTimeInMins <= 1080)
      } else if (day === 6) {
        setIsOpen(currentTimeInMins >= 480 && currentTimeInMins <= 840)
      } else {
        setIsOpen(false)
      }
    }
    checkStatus()
    const interval = setInterval(checkStatus, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="contacto" className="relative py-24 bg-[#FAF9F6] text-wood-950 overflow-hidden" aria-label="Visítanos">
      {/* Elementos Decorativos de Madera */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-wood-900/5 skew-x-[-12deg] translate-x-1/3 pointer-events-none" />
      <div className="absolute inset-0 bg-wood-grain opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* COLUMNA IZQUIERDA (7/12) - INFORMACIÓN Y ACCIÓN */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                 <span className="text-xs font-black uppercase tracking-[0.4em] text-wood-400">Abierto para ti</span>
              </div>
              <h2 className="font-display font-medium text-4xl md:text-6xl text-wood-900 leading-tight">
                Visítanos en nuestra <br />
                <span className="text-wood-400 italic">ubicación</span>
              </h2>
              <p className="text-lg text-wood-700/70 font-light leading-relaxed max-w-xl">
                Ven a conocer la calidad de nuestra madera de primera mano y recibe asesoría experta para tu próximo proyecto. Te esperamos en San Fernando.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Bloque: Dirección y Teléfono */}
              <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-white shadow-md flex items-center justify-center shrink-0 text-wood-400 border border-stone-100 group-hover:bg-wood-400 group-hover:text-white transition-all duration-300">
                    <FiMapPin size={18} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-wood-400">Dirección</p>
                    <p className="text-sm font-bold text-wood-800 leading-snug">
                       {BUSINESS_INFO.address.split(',')[0]} <br />
                       Chiapas, México
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-white shadow-md flex items-center justify-center shrink-0 text-wood-400 border border-stone-100 group-hover:bg-wood-400 group-hover:text-white transition-all duration-300">
                    <FiPhone size={18} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-wood-400">¿Prefieres llamar?</p>
                    <a 
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="text-lg font-black text-wood-900 border-b-2 border-transparent hover:border-nature-600 transition-all inline-block"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Bloque: Horarios */}
              <div className="p-6 bg-wood-950 text-white rounded-lg shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <FiClock className="text-wood-400" size={16} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Horarios</span>
                  </div>
                  {isOpen && (
                    <span className="flex items-center gap-1.5 text-[8px] font-black uppercase tracking-widest text-wood-400">
                      <div className="w-1 h-1 bg-wood-400 rounded-full animate-pulse" />
                      Abierto
                    </span>
                  )}
                </div>
                <div className="space-y-3">
                  <p className="text-[11px] font-bold tracking-wide text-white/40 flex justify-between">
                    LUN – VIE <span className="text-white">8:00 AM – 6:00 PM</span>
                  </p>
                  <p className="text-[11px] font-bold tracking-wide text-white/40 flex justify-between">
                    SÁBADO <span className="text-white">8:00 AM – 2:00 PM</span>
                  </p>
                  <p className="text-[11px] font-bold tracking-wide text-white/40 flex justify-between">
                    DOMINGO <span className="text-red-400/60 uppercase">Cerrado</span>
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs de acción principales */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <a
                href={BUSINESS_INFO.mapsPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-wood-400 hover:bg-wood-500 text-white shadow-lg hover:shadow-wood-400/20 hover:-translate-y-1 transition-all rounded-sm font-bold uppercase tracking-widest text-xs"
              >
                <FiNavigation size={18} />
                Cómo llegar
              </a>
              <a
                href={buildWhatsAppContactUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 border-2 border-wood-950/10 hover:border-nature-600 hover:bg-nature-600 hover:text-white transition-all text-wood-900 rounded-sm font-bold uppercase tracking-widest text-xs"
              >
                <FaWhatsapp size={18} />
                Contactar por WhatsApp
              </a>
            </div>
          </div>

          {/* COLUMNA DERECHA (5/12) - MAPA COMPACTO */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square lg:aspect-auto lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl border-8 border-white ring-1 ring-wood-100 group">
               <iframe
                  src={BUSINESS_INFO.mapEmbedUrl}
                  title="Mapa de ubicación"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="grayscale-0"
                />
                <div className="absolute inset-0 bg-nature-950/5 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Botón flotante externo */}
                <a 
                  href={BUSINESS_INFO.mapsPlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-6 right-6 bg-white hover:bg-stone-50 text-wood-900 p-3 rounded-full shadow-2xl border border-stone-100 transform hover:scale-110 transition-all z-20"
                  aria-label="Abrir en Google Maps"
                >
                  <FiExternalLink size={20} />
                </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
