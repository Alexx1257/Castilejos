import { useState } from 'react'
import { FiPlus, FiMaximize2, FiArrowRight } from 'react-icons/fi'
import { GiWoodBeam } from 'react-icons/gi'
import { FiBox } from 'react-icons/fi'
import { HiOutlineWrench } from 'react-icons/hi2'
import { useCartContext } from '../../context/CartContext'
import QuickView from './QuickView'
import toast from 'react-hot-toast'

const CATEGORY_ICONS = {
  'Maderas':      <GiWoodBeam size={16} />,
  'Ferretería':   <FiBox size={16} />,
  'Herramientas': <HiOutlineWrench size={16} />,
}

export default function ProductCard({ product }) {
  const { addItem } = useCartContext()
  const [quickViewOpen, setQuickViewOpen] = useState(false)
  const isOutOfStock = !product.stock

  const handleAddToCart = (e) => {
    e.stopPropagation()
    addItem(product)
    toast.success(`${product.name} añadido`, {
      style: { 
        borderRadius: '0px', 
        background: '#1f140a', 
        color: '#fff',
        fontSize: '11px',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        border: '1px solid #54381d'
      },
      iconTheme: { primary: '#e6d2b5', secondary: '#1f140a' }
    })
  }

  const imageUrl = product.image ?? 'https://images.unsplash.com/photo-1589939705384-5185138a04b9?q=80&w=400'

  return (
    <>
      <article 
        className="product-card group cursor-pointer"
        onClick={() => setQuickViewOpen(true)}
      >
        {/* Imagen & Overlays */}
        <div className="product-image-container relative">
          <img
            src={imageUrl}
            alt={product.name}
            className="product-image grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            loading="lazy"
          />
          
          {/* Quick View Trigger (Moderno) */}
          <div className="absolute inset-0 bg-wood-950/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
             <div className="w-12 h-12 bg-white flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-2xl">
                <FiMaximize2 className="text-wood-950" size={20} />
             </div>
          </div>

          {/* Badge de descuento */}
          {product.isOffer && (
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-orange-600 text-white text-[10px] font-black px-3 py-1.5 uppercase tracking-widest shadow-xl flex items-center gap-2 skew-x-[-12deg]">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                {product.discountLabel || 'Oferta'}
              </span>
            </div>
          )}

          {/* Badge de stock sutil */}
          {isOutOfStock && (
            <div className="absolute inset-0 bg-wood-950/40 backdrop-blur-[1px] flex items-center justify-center">
              <span className="text-[10px] tracking-[0.3em] font-bold text-white uppercase border border-white/20 px-5 py-2.5">
                Sin Existencia
              </span>
            </div>
          )}

          {/* Categoría Label */}
          <div className="absolute top-0 right-0 p-4 translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
            <span className="flex items-center gap-2 bg-wood-900/90 backdrop-blur-sm px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white">
              {CATEGORY_ICONS[product.category]}
              {product.category}
            </span>
          </div>
        </div>

        {/* Información & CTA */}
        <div className="p-8 space-y-6 bg-white border-x border-b border-sand-100 group-hover:border-wood-300 transition-colors">
          <div className="space-y-1">
            <h3 className="font-display text-xl font-bold text-wood-950 line-clamp-1">{product.name}</h3>
            <p className="text-[9px] uppercase tracking-widest text-sand-400 font-bold">{product.measurements || 'Medida Estándar'}</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-end justify-between">
              <div className="flex flex-col">
                {product.originalPrice && (
                  <span className="text-xs text-sand-400 line-through mb-[-4px]">
                    ${product.originalPrice}
                  </span>
                )}
                <div className="flex items-baseline gap-1">
                  <span className={`text-xs font-medium ${product.isOffer ? 'text-orange-600' : 'text-sand-400'}`}>$</span>
                  <p className={`text-2xl font-display font-bold ${product.isOffer ? 'text-orange-600' : 'text-wood-800'}`}>
                    {product.price}
                  </p>
                </div>
              </div>
              
              <button
                onClick={handleAddToCart}
                disabled={isOutOfStock}
                className={`w-12 h-12 flex items-center justify-center transition-all shadow-[0_10px_20px_rgba(0,0,0,0.05)]
                  ${isOutOfStock 
                    ? 'bg-sand-100 text-sand-300 cursor-not-allowed' 
                    : 'bg-wood-900 text-white hover:bg-wood-700 active:scale-90'
                  }`}
                aria-label="Añadir al pedido"
              >
                <FiPlus size={20} />
              </button>
            </div>

            {/* Etiqueta de Ahorro */}
            {product.isOffer && product.originalPrice && (
              <div className="bg-orange-50 border-l-2 border-orange-500 px-3 py-2 flex items-center justify-between">
                <span className="text-[9px] font-black uppercase tracking-wider text-orange-950">Ahorras ${product.originalPrice - product.price} MXN</span>
                <div className="flex gap-1">
                   {[1,2,3].map(i => <div key={i} className="w-1 h-1 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />)}
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-sand-50">
             <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-sand-400 group-hover:text-wood-600 transition-colors">
                Ver detalles técnicos
             </span>
             <FiArrowRight className="text-sand-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
          </div>
        </div>
      </article>

      <QuickView 
        product={product} 
        isOpen={quickViewOpen} 
        onClose={() => setQuickViewOpen(false)} 
      />
    </>
  )
}
