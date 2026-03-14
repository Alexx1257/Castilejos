import { FaWhatsapp } from 'react-icons/fa'
import { buildWhatsAppContactUrl } from '../../utils/whatsapp'

export default function WhatsAppFAB({ isCartOpen }) {
  const handleClick = () => {
    window.open(buildWhatsAppContactUrl(), '_blank', 'noopener,noreferrer')
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Contactar por WhatsApp"
      className={`fixed bottom-10 right-10 z-[80] group flex items-center justify-center p-2 transition-all duration-500
        ${isCartOpen ? 'opacity-0 scale-50 pointer-events-none translate-y-10' : 'opacity-100 scale-100'}`}
    >
      {/* Halo de animación elegante */}
      <span className="absolute inset-0 rounded-full bg-nature-500/30 animate-ping" />
      
      {/* Botón Principal - Estilo Moderno / Glass */}
      <div className="relative w-16 h-16 bg-nature-700 text-white flex items-center justify-center shadow-[0_20px_50px_rgba(47,85,46,0.5)] border border-white/20 transition-all duration-700 
        group-hover:bg-nature-600 group-hover:-translate-y-3 group-hover:scale-110 group-hover:shadow-[0_25px_60px_rgba(47,85,46,0.6)]">
        
        <FaWhatsapp size={32} className="transition-transform duration-700 group-hover:rotate-12" />
        
        {/* Badge - Punto de notificación sutil */}
        <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]" />
        
        {/* Tooltip Estilizado */}
        <span className="absolute right-full mr-6 px-5 py-2.5 bg-nature-950/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.3em] whitespace-nowrap 
          opacity-0 translate-x-8 scale-75 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 transition-all duration-500 pointer-events-none border border-white/5">
          ¿En qué podemos ayudarle?
        </span>
      </div>
    </button>
  )
}
