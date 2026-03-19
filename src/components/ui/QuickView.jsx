import { FiX, FiCheck, FiInfo } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { useCartContext } from '../../context/CartContext'

export default function QuickView({ product, isOpen, onClose }) {
  const { addItem } = useCartContext()
  
  if (!isOpen) return null

  const handleAddToCart = () => {
    addItem(product)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 lg:p-12">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-wood-950/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row animate-slide-up">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-12 h-12 bg-white flex items-center justify-center border border-sand-200 hover:bg-wood-900 hover:text-white transition-all"
        >
          <FiX size={24} />
        </button>

        {/* Image Section */}
        <div className="md:w-1/2 bg-sand-50 relative aspect-square md:aspect-auto">
          <img 
            src={product.image || 'https://images.unsplash.com/photo-1589939705384-5185138a04b9?q=80&w=600'} 
            alt={product.name}
            className="w-full h-full object-cover grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-wood-900/5 pointer-events-none" />
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 p-10 lg:p-16 flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <span className="premium-label text-wood-500">{product.category}</span>
            <h2 className="text-4xl lg:text-5xl font-display font-medium text-wood-950 leading-tight">
              {product.name}
            </h2>
            <p className="text-3xl font-display text-wood-700">
              ${product.price} <span className="text-xs text-sand-400 uppercase tracking-widest">MXN</span>
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-5 bg-sand-50 border-l-4 border-wood-400">
                <FiInfo className="text-wood-600 mt-1 shrink-0" size={20} />
                <p className="text-wood-900/70 font-light leading-relaxed">
                    {product.description || "Material de alta resistencia seleccionado especialmente para proyectos de construcción y carpintería profesional. Garantizamos origen legal y calidad estructural."}
                </p>
            </div>
            
            <ul className="space-y-3">
                {['Certificación de Origen', 'Alta Resistencia', 'Entrega Inmediata'].map(spec => (
                    <li key={spec} className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-wood-950/40">
                        <FiCheck className="text-wood-400" size={14} />
                        {spec}
                    </li>
                ))}
            </ul>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleAddToCart}
              className="flex-1 wood-button py-5"
            >
              Añadir al Carrito
            </button>
            <a 
              href={`https://wa.me/5216672332617?text=Hola,%20busco%20información%20técnica%20sobre:%20${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-5 border border-nature-600 text-nature-700 hover:bg-nature-600 hover:text-white transition-all flex items-center justify-center gap-3"
            >
              <FaWhatsapp size={20} />
              Consultar Experto
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
