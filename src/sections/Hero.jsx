import { FiArrowRight } from 'react-icons/fi'
import { buildWhatsAppContactUrl } from '../utils/whatsapp'

import heroVideo from '../assets/Lumberyard_Workshop_Background_Video.mp4'
import logoImage from '../assets/logo_castillejos.png'


export default function Hero() {
  const scrollToCatalog = () => {
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-wood-950"
      aria-label="Sección de inicio"
    >


      {/* 2. Capa de Video (z-10) - Se renderiza sobre la imagen */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-10 opacity-70"
      >
        <source
          src={heroVideo}
          type="video/mp4"
        />
      </video>

      {/* 3. Capas de Filtro (z-20) - Oscurecen tanto video como imagen */}
      <div className="absolute inset-0 bg-wood-950/40 z-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-wood-950/80 via-transparent to-transparent z-20" />

      {/* 4. Contenido (z-30) */}
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 pt-20 z-30">
        <div className="max-w-4xl space-y-10">
          <div className="space-y-6">
            {/* Identidad de Marca */}
            <div className="flex items-center gap-6 mb-8 group/hero-logo animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-wood-200/10 blur-xl group-hover/hero-logo:bg-wood-200/20 transition-all rounded-full" />
                <img
                  src={logoImage}
                  alt="Logo Castillejos"
                  className="relative w-20 h-20 md:w-28 md:h-28 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                />
              </div>
              <div className="h-12 w-[1px] bg-white/10 hidden sm:block" />
              <div className="flex flex-col">
                <span className="premium-label !mb-0 text-wood-200 inline-block">
                  Tradición en Carpintería & Construcción
                </span>
                <span className="text-[8px] uppercase tracking-[0.5em] text-white/30 font-bold mt-1">
                  Desde Chiapas para México
                </span>
              </div>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-white leading-[0.95] tracking-tighter">
              Maderería y <br />
              <span className="text-wood-200 italic font-light">Ferretería Castillejos</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl font-light leading-relaxed">
            Todo para tus proyectos de construcción, carpintería y hogar. Calidad que perdura en cada veta.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-10">
            <button
              onClick={scrollToCatalog}
              className="group relative px-10 py-5 bg-wood-400 text-wood-950 font-black text-[10px] sm:text-[11px] uppercase tracking-[0.3em] transition-all hover:bg-wood-300 active:scale-95 text-center"
            >
              <span className="relative z-10">Explorar Catálogo</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </button>
            <a
              href={buildWhatsAppContactUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 border border-white/30 text-white font-bold text-[10px] sm:text-[11px] uppercase tracking-[0.2em] hover:bg-white hover:text-wood-950 transition-all text-center backdrop-blur-md"
            >
              Solicitar Cotización WhatsApp
            </a>
          </div>

          {/* Stats Bar */}
          <div className="pt-20 flex flex-wrap gap-x-12 gap-y-6 opacity-60">
            <div className="space-y-1">
              <span className="text-wood-200 text-2xl font-display font-medium">100%</span>
              <p className="text-white/40 text-[9px] uppercase tracking-[0.3em] font-bold">Origen Certificado</p>
            </div>
            <div className="space-y-1 border-l border-white/10 pl-12">
              <span className="text-wood-200 text-2xl font-display font-medium">+25</span>
              <p className="text-white/40 text-[9px] uppercase tracking-[0.3em] font-bold">Años de Calidad</p>
            </div>
            <div className="space-y-1 border-l border-white/10 pl-12">
              <span className="text-wood-200 text-2xl font-display font-medium">24h</span>
              <p className="text-white/40 text-[9px] uppercase tracking-[0.3em] font-bold">Entrega Local</p>
            </div>
          </div>
        </div>
      </div>

      {/* Down Indicator */}
      <button
        onClick={scrollToCatalog}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/20 hover:text-white transition-all group z-40"
      >
        <span className="text-[8px] uppercase tracking-[0.4em] font-black">Descubrir</span>
        <div className="w-[1px] h-10 bg-white/20" />
      </button>
    </section>
  )
}