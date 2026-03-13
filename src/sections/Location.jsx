import { FiMapPin, FiPhone, FiClock, FiExternalLink } from 'react-icons/fi'
import { BUSINESS_INFO } from '../config/constants'

export default function Location() {
  return (
    <section id="ubicacion" className="py-32 bg-white" aria-label="Ubicación del negocio">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-stretch">
          
          {/* Info Column */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <span className="premium-label">Sede Central</span>
              <h2 className="text-5xl font-display font-medium text-wood-950 leading-tight">
                Donde la <span className="text-wood-400 italic">Esencia</span> se encuentra.
              </h2>
            </div>

            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-sand-50 flex items-center justify-center shrink-0">
                  <FiMapPin className="text-wood-600" size={24} />
                </div>
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-sand-400 mb-2">Dirección</h3>
                  <p className="text-wood-900 font-medium text-lg leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-sand-50 flex items-center justify-center shrink-0">
                  <FiPhone className="text-wood-600" size={24} />
                </div>
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-sand-400 mb-2">Contacto</h3>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-2xl font-display font-bold text-wood-950 hover:text-wood-600 transition-colors">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="p-10 bg-wood-950 text-white space-y-6">
                <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                  <FiClock className="text-wood-400" size={20} />
                  <span className="text-[10px] uppercase tracking-[0.4em] font-black">Horarios</span>
                </div>
                <div className="space-y-3">
                    {Object.values(BUSINESS_INFO.hours).map((hour) => (
                    <p key={hour} className="text-sm text-sand-300/80 flex items-center gap-3">
                        <span className="w-1 h-1 bg-wood-500 rounded-full" />
                        {hour}
                    </p>
                    ))}
                </div>
              </div>
            </div>

            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-wood-800 hover:text-wood-600 transition-all font-sans"
            >
              <span className="border-b border-wood-200 group-hover:border-wood-600 transition-all">Ver en Google Maps</span>
              <FiExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-7 group relative bg-sand-50">
            <div className="absolute inset-0 bg-wood-900/5 group-hover:bg-transparent transition-all pointer-events-none z-10" />
            <iframe
              src={BUSINESS_INFO.mapEmbedUrl}
              title="Ubicación de Maderería Castillejos"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '550px', filter: 'grayscale(40%) contrast(100%) brightness(100%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full h-full grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

