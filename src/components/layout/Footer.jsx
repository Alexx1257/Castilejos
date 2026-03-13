import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa'
import { FiMapPin, FiPhone } from 'react-icons/fi'
import { GiWoodBeam } from 'react-icons/gi'
import { BUSINESS_INFO } from '../../config/constants'
import { buildWhatsAppContactUrl } from '../../utils/whatsapp'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-wood-950 text-white py-24 border-t border-wood-900 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-wood-500/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-24">
          
          {/* Brand Identity */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-10">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-white flex items-center justify-center rotate-3">
                <GiWoodBeam className="text-wood-950" size={28} />
              </div>
              <div className="space-y-1">
                <span className="block font-display font-bold text-3xl text-white tracking-tight leading-none uppercase">CASTILLEJOS</span>
                <span className="block text-[10px] uppercase tracking-[0.5em] text-wood-400 font-bold">Maderería de Autor</span>
              </div>
            </div>
            
            <p className="text-white/50 font-light leading-relaxed max-w-md text-lg italic">
              "Honramos la naturaleza a través de la selección experta de cada fibra, entregando no solo madera, sino el comienzo de su próximo legado."
            </p>

            <div className="flex gap-8">
              {[
                { Icon: FaWhatsapp,  href: buildWhatsAppContactUrl(), label: 'WhatsApp' },
                { Icon: FaFacebook,  href: '#', label: 'Facebook' },
                { Icon: FaInstagram, href: '#', label: 'Instagram' },
              ].map(({ Icon, href, label }, i) => (
                <a key={i} href={href} className="group flex items-center justify-center w-10 h-10 bg-white/5 border border-white/10 hover:bg-white hover:text-wood-950 transition-all duration-500 rounded-none transform hover:-translate-y-1" aria-label={label}>
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Quick Links */}
            <div className="space-y-8">
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-wood-300">Catálogo</h4>
              <ul className="space-y-5">
                {['Maderas Finas', 'Material de Obra', 'Herramientas Pro', 'Cortes Médida'].map(link => (
                  <li key={link}>
                    <a href="#catalogo" className="text-sm font-light text-white/60 hover:text-white transition-all flex items-center gap-2 group">
                      <div className="w-0 h-[1px] bg-wood-400 group-hover:w-4 transition-all" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-8">
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-wood-300">Empresa</h4>
              <ul className="space-y-5">
                {['Nuestra Historia', 'Proyectos', 'Ubicación', 'Contacto'].map(link => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-sm font-light text-white/60 hover:text-white transition-all flex items-center gap-2 group">
                      <div className="w-0 h-[1px] bg-wood-400 group-hover:w-4 transition-all" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-nature-400">Presencial</h4>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <FiMapPin className="text-nature-500 mt-1 shrink-0" size={20} />
                  <p className="text-sm font-light leading-relaxed text-white/60">{BUSINESS_INFO.address}</p>
                </div>
                <div className="space-y-2">
                    <span className="text-[9px] uppercase tracking-widest text-white/30 block">Línea de Atención</span>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-3 text-2xl font-display font-medium text-white hover:text-nature-400 transition-colors">
                        <FiPhone className="text-nature-500" size={20} />
                        {BUSINESS_INFO.phone}
                    </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/20">
            © {year} Maderería Castillejos — Todas las maderas están legalmente certificadas.
          </p>
          <div className="flex gap-10 text-[9px] font-bold uppercase tracking-[0.3em] text-white/20">
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-white transition-colors">Sustentabilidad</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

