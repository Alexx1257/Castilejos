import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa'
import logoImage from '../../assets/logo_castillejos.png'
import { buildWhatsAppContactUrl } from '../../utils/whatsapp'

/**
 * ─── FOOTER MINIMALISTA ───────────────────────────────────────────
 * Diseño simplificado para evitar redundancia. 
 * El enfoque comercial se desplazó a la sección de Contacto + Ubicación.
 */

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-wood-950 text-white py-12 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Identidad Visual */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <img src={logoImage} alt="Logo Castillejos" className="w-12 h-12 grayscale opacity-50" />
              <span className="font-display font-medium text-xl tracking-tight uppercase text-white/40">CASTILLEJOS</span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold text-center md:text-left">
              Maderas de calidad para proyectos duraderos
            </p>
          </div>

          {/* Navegación y Redes */}
          <div className="flex flex-col items-center md:items-end gap-6 text-center md:text-right">
            <nav className="flex gap-8">
              <a href="#catalogo" className="text-xs font-bold uppercase tracking-widest text-white/30 hover:text-wood-400 transition-colors">Catálogo</a>
              <a href="#contacto" className="text-xs font-bold uppercase tracking-widest text-white/30 hover:text-wood-400 transition-colors">Contacto</a>
              <a href="#proyectos" className="text-xs font-bold uppercase tracking-widest text-white/30 hover:text-wood-400 transition-colors">Proyectos</a>
            </nav>

            <div className="flex gap-6">
              {[
                { Icon: FaWhatsapp,  href: buildWhatsAppContactUrl(), label: 'WhatsApp' },
                { Icon: FaFacebook,  href: '#', label: 'Facebook' },
                { Icon: FaInstagram, href: '#', label: 'Instagram' },
              ].map(({ Icon, href, label }, i) => (
                <a key={i} href={href} className="text-white/20 hover:text-white transition-colors" aria-label={label}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/10">
            © {year} Maderería Castillejos.
          </p>
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/10 italic">
            San Fernando, Chiapas, México.
          </p>
        </div>

      </div>
    </footer>
  )
}



