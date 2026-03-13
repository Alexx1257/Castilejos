import { FiArrowDown, FiArrowRight } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { buildWhatsAppContactUrl } from '../utils/whatsapp'
import heroImage from '../assets/madereria_hero.png'

export default function Hero() {
  const scrollToCatalog = () => {
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-wood-950"
      aria-label="Sección de inicio"
    >
      {/* Background Image with Zoom and Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 animate-pulse-slow"
        style={{ backgroundImage: `url(${heroImage})`, animationDuration: '10s' }}
        aria-hidden="true"
      />

      {/* Premium Gradient Overlay */}
      <div
        className="absolute inset-0 bg-hero-gradient"
        aria-hidden="true"
      />
      
      {/* Wood Grain Texture Overlay */}
      <div className="absolute inset-0 bg-wood-grain opacity-40 pointer-events-none" aria-hidden="true" />

      {/* Decorative Light Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-wood-500/10 blur-[160px] rounded-full animate-pulse-slow" />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-4xl space-y-10">
          <div className="space-y-4">
            <span className="premium-label !mb-0 text-wood-200 animate-fade-in">
              Artesanía y Calidad Superior
            </span>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] tracking-tighter animate-reveal">
              Pasión por la <br />
              <span className="text-wood-200 italic font-light">Madera.</span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-white/70 max-w-2xl font-light leading-relaxed animate-fade-in animate-delay-300">
            Suministramos maderas nobles y materiales de construcción para proyectos que buscan perdurar en el tiempo con elegancia y resistencia.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-10 animate-fade-in animate-delay-500">
            <a 
              href="#catalog"
              className="group relative px-12 py-6 bg-wood-400 text-wood-950 font-black text-[11px] uppercase tracking-[0.3em] overflow-hidden transition-all hover:bg-wood-300 hover:shadow-[0_20px_40px_rgba(180,120,60,0.3)] shadow-xl active:scale-95 text-center"
            >
              <span className="relative z-10">Explorar Catálogo</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </a>
            <a 
              href="#contact"
              className="px-12 py-6 border border-white/20 text-white/80 font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-white hover:text-wood-950 transition-all text-center"
            >
              Asesoría Técnica
            </a>
          </div>

          {/* Footer of Hero */}
          <div className="pt-20 flex flex-wrap gap-x-16 gap-y-8 animate-fade-in animate-delay-700">
            <div className="space-y-1">
                <span className="text-wood-300 text-3xl font-display font-bold">100%</span>
                <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold">Origen Certificado</p>
            </div>
            <div className="space-y-1">
                <span className="text-wood-300 text-3xl font-display font-bold">+25</span>
                <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold">Años de Calidad</p>
            </div>
            <div className="space-y-1">
                <span className="text-wood-300 text-3xl font-display font-bold">24h</span>
                <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold">Entrega Local</p>
            </div>
          </div>
        </div>
      </div>

      {/* Down Indicator */}
      <button 
        onClick={scrollToCatalog}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/30 hover:text-white transition-all group"
      >
        <span className="text-[9px] uppercase tracking-[0.5em] font-black group-hover:-translate-y-1 transition-transform">Descubrir</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-wood-200 animate-slide-up" style={{ animationDuration: '2s', animationIterationCount: 'infinite' }} />
        </div>
      </button>
    </section>
  )
}
