import { useState, useEffect } from 'react'
import { FiMapPin, FiClock, FiNavigation } from 'react-icons/fi'
import { BUSINESS_INFO } from '../config/constants'

// ─── Sección de Ubicación: Enfocada en Visita Física ────────────────
// Su rol es meramente informativo sobre la ubicación de la tienda.
// Se han eliminado los CTAs de conversión (WhatsApp) para evitar ruido.

export default function Location() {
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
    <section id="ubicacion" className="py-32 bg-white relative overflow-hidden" aria-label="Ubicación de la tienda">
      {/* Elemento Decorativo de Fondo */}
      <div className="absolute top-0 right-0 w-[50vw] h-full bg-sand-50/50 -skew-x-12 translate-x-32 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          
          {/* Columna de Información (Dirección + Horarios) */}
          <div className="space-y-16">
            <div className="space-y-6">
              <span className="premium-label">Nuestra Tienda</span>
              <h2 className="text-5xl md:text-6xl font-display font-medium text-wood-950 leading-tight">
                Visítanos en <br />
                <span className="text-wood-400 italic">nuestra ubicación</span>
              </h2>
              <p className="text-sand-500 text-lg font-light leading-relaxed max-w-lg">
                Visite nuestras instalaciones para conocer la calidad de nuestra madera y recibir asesoría técnica presencial.
              </p>
            </div>

            <div className="space-y-12">
              {/* Dirección con Acción Directa */}
              <div className="flex gap-8 group">
                <div className="w-16 h-16 bg-wood-950 flex items-center justify-center shrink-0 shadow-2xl skew-x-[-6deg] group-hover:bg-wood-800 transition-colors duration-500">
                  <FiMapPin className="text-wood-200 skew-x-[6deg]" size={28} />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-wood-800 mb-2">Dirección</h3>
                    <p className="text-wood-900 font-medium text-xl leading-relaxed max-w-sm">
                      {BUSINESS_INFO.address}
                    </p>
                  </div>
                  <a 
                    href={BUSINESS_INFO.mapsPlaceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-wood-400 hover:text-wood-800 transition-all group/link"
                  >
                    Cómo llegar <FiNavigation size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Horarios con Status Dinámico */}
              <div className="p-10 bg-sand-100/50 border border-sand-200 space-y-8 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-sand-200 pb-6 relative z-10">
                   <div className="flex items-center gap-4">
                      <FiClock className="text-wood-600" size={20} />
                      <h3 className="text-[11px] uppercase tracking-[0.4em] font-black text-wood-950">Horarios</h3>
                   </div>
                   {isOpen ? (
                     <span className="px-3 py-1 bg-white text-nature-700 text-[9px] font-black uppercase tracking-[0.25em] flex items-center gap-2 border border-nature-100 shadow-sm animate-fade-in">
                        <div className="w-1.5 h-1.5 bg-nature-500 rounded-full animate-pulse" />
                        Abierto ahora
                     </span>
                   ) : (
                     <span className="px-3 py-1 bg-white text-red-600 text-[9px] font-black uppercase tracking-[0.25em] border border-red-100 opacity-60">
                        Tienda Cerrada
                     </span>
                   )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 relative z-10">
                  {Object.values(BUSINESS_INFO.hours).map((hour) => (
                    <p key={hour} className="text-sm text-sand-600 font-medium tracking-tight">
                      {hour}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Columna del Mapa (Balanceada e Interactiva) */}
          <div className="relative group lg:h-[650px]">
             {/* Marco Decorativo Minimalista */}
             <div className="absolute -inset-4 border border-sand-200 pointer-events-none group-hover:border-wood-300 transition-all duration-700" />
             
             <div className="h-full w-full bg-sand-200 overflow-hidden relative shadow-[0_50px_100px_rgba(0,0,0,0.08)]">
                <iframe
                  src={BUSINESS_INFO.mapEmbedUrl}
                  title="Mapa de ubicación"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="block grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
                />
                
                {/* Overlay de Ayuda para Interacción */}
                <div className="absolute inset-x-10 bottom-10 bg-wood-950 p-6 text-white flex items-center justify-between opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
                   <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-wood-400 mb-1">Estamos en</p>
                      <p className="text-lg font-display font-medium text-white">Chiapas, México</p>
                   </div>
                   <a 
                    href={BUSINESS_INFO.mapsPlaceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-white hover:text-wood-950 transition-all duration-500"
                    aria-label="Abrir mapa en nueva ventana"
                   >
                      <FiNavigation size={20} className="" />
                   </a>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  )
}
