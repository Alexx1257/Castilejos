import { useState, useEffect } from 'react'
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi'
import { GiWoodBeam } from 'react-icons/gi'
import { useCartContext } from '../../context/CartContext'

const NAV_LINKS = [
  { label: 'Inicio',    href: '#hero' },
  { label: 'Tradición',  href: '#about' },
  { label: 'Maderas',   href: '#catalogo' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Contacto',  href: '#contacto' },
]

export default function Navbar({ onOpenCart }) {
  const { itemCount } = useCartContext()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-700
        ${scrolled 
          ? 'bg-wood-950 border-b border-wood-800/50 py-3 shadow-2xl' 
          : 'bg-wood-950/40 backdrop-blur-sm py-5'}`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between" aria-label="Navegación principal">
        
        {/* Logo Stylized */}
        <a href="#hero" className="flex items-center gap-4 group" aria-label="Ir al inicio">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-wood-200/20 blur-xl group-hover:bg-wood-200/40 transition-all rounded-full" />
            <div className="relative w-11 h-11 bg-wood-100 flex items-center justify-center rounded-sm rotate-3 group-hover:rotate-0 transition-all duration-500 shadow-lg">
              <GiWoodBeam size={24} className="text-wood-900 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl md:text-2xl text-white tracking-tight leading-none">
              CASTILLEJOS
            </span>
            <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-wood-300">
              Maderería Premium
            </span>
          </div>
        </a>

        {/* Links Desktop */}
        <ul className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link !text-white/80 hover:!text-white after:!bg-wood-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Acciones */}
        <div className="flex items-center gap-6">
          {/* Shopping Cart Button */}
          <button
            onClick={onOpenCart}
            aria-label={`Abrir pedido (${itemCount} artículos)`}
            className="relative p-2 text-white hover:text-wood-200 transition-all duration-300 group"
          >
            <FiShoppingCart size={22} className="group-hover:scale-110 transition-transform" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-nature-600 text-white text-[10px] font-bold
                rounded-full w-5 h-5 flex items-center justify-center shadow-[0_0_15px_rgba(77,138,77,0.5)]">
                {itemCount}
              </span>
            )}
          </button>

          {/* User CTA (Desktop) */}
          <a
            href="#contacto"
            className="hidden sm:inline-flex px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] 
              bg-white text-wood-950 rounded-sm hover:bg-wood-100 transition-all duration-300 shadow-lg"
          >
            Cotizar Proyecto
          </a>

          {/* Hamburguesa Móvil */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="lg:hidden p-2 text-white focus:outline-none"
          >
            {mobileOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </nav>

      {/* Móvil Navegación */}
      <div
        className={`lg:hidden fixed inset-0 top-[84px] bg-wood-950 transition-all duration-700 ease-in-out z-[50]
          ${mobileOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}
      >
        <div className="p-10 flex flex-col h-full bg-wood-grain">
          <ul className="flex flex-col gap-10">
            {NAV_LINKS.map((link, idx) => (
              <li key={link.href} className={`transition-all duration-700 delay-[${idx * 100}ms] ${mobileOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="group flex flex-col"
                >
                  <span className="text-4xl font-display font-medium text-white/40 group-hover:text-white transition-colors">
                    {link.label}
                  </span>
                  <span className="h-[1px] w-0 bg-wood-300 group-hover:w-full transition-all duration-500 mt-2" />
                </a>
              </li>
            ))}
          </ul>
          
          <div className="mt-auto pt-20 border-t border-white/5">
            <p className="text-wood-400 text-[10px] uppercase tracking-[0.4em] font-bold mb-6">Expertos en Carpintería</p>
            <div className="space-y-2">
              <a href="tel:+52" className="block text-2xl font-display font-bold text-white hover:text-wood-200 transition-colors">
                Maderería Castillejos
              </a>
              <p className="text-white/40 text-sm">Tradición que se siente en cada veta.</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
