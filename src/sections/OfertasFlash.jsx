import { useState, useEffect } from 'react'
import { FiZap, FiTarget, FiArrowRight } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { buildWhatsAppContactUrl } from '../utils/whatsapp'

export default function OfertasFlash() {
  const [timeLeft, setTimeLeft] = useState({ h: 12, m: 40, s: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { h, m, s } = prev
        if (s > 0) s--
        else {
          if (m > 0) { m--; s = 59 }
          else {
            if (h > 0) { h--; m = 59; s = 59 }
            else return prev
          }
        }
        return { h, m, s }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative py-24 bg-wood-950 overflow-hidden" id="ofertas">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Urgency Headline */}
            <div className="lg:col-span-12 xl:col-span-4 space-y-6">
                <div className="inline-flex items-center gap-3 bg-red-100 text-red-600 px-4 py-2 rounded-none border-l-4 border-red-600">
                    <FiZap className="animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Promo Flash Activa</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-medium text-white leading-[1.1]">
                    🔥 Ofertas del <br />
                    <span className="text-orange-600 italic">Mes de Marzo</span>
                </h3>
            </div>

            {/* Dynamic Content Card */}
            <div className="lg:col-span-12 xl:col-span-8">
                <div className="bg-wood-950 p-8 md:p-12 relative group">
                    {/* Background Texture */}
                    <div className="absolute inset-0 bg-wood-grain opacity-5 pointer-events-none" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                        {/* Countdown */}
                        <div className="space-y-4">
                            <p className="text-white/40 text-[9px] uppercase tracking-[0.3em] font-bold">La oferta termina en:</p>
                            <div className="flex gap-4">
                                {[
                                    { v: timeLeft.h, l: 'Horas' },
                                    { v: timeLeft.m, l: 'Minutos' },
                                    { v: timeLeft.s, l: 'Segundos' },
                                ].map((t, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className="text-4xl md:text-5xl font-display font-bold text-orange-500 tabular-nums">
                                            {String(t.v).padStart(2, '0')}
                                        </div>
                                        <div className="text-[8px] uppercase tracking-widest text-white/30 font-bold">{t.l}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Scarcity Indicator */}
                        <div className="space-y-6 flex flex-col justify-center">
                            <div className="space-y-3">
                                <div className="flex justify-between items-end">
                                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">Disponibilidad de Lote</span>
                                    <span className="text-orange-500 text-xs font-black">82% RESERVADO</span>
                                </div>
                                <div className="h-2 w-full bg-white/5 rounded-none overflow-hidden">
                                    <div 
                                        className="h-full bg-orange-600 transition-all duration-1000 ease-out shadow-[0_0_20px_rgba(234,88,12,0.5)]" 
                                        style={{ width: '82%' }} 
                                    />
                                </div>
                                <p className="text-white/40 text-[9px] font-medium uppercase tracking-widest flex items-center gap-2">
                                    <FiTarget className="text-orange-500" />
                                    Quedan pocas piezas en almacén
                                </p>
                            </div>
                            
                            <a 
                                href={buildWhatsAppContactUrl()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between bg-orange-600 hover:bg-orange-500 text-white px-8 py-5 transition-all active:scale-95"
                            >
                                <div className="flex items-center gap-4">
                                    <FaWhatsapp size={24} />
                                    <span className="text-[11px] font-black uppercase tracking-[0.2em]">Apartar Ofertas Ahora</span>
                                </div>
                                <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  )
}
