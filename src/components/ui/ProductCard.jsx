import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { GiWoodBeam } from 'react-icons/gi'
import { FiBox } from 'react-icons/fi'
import { HiOutlineWrench } from 'react-icons/hi2'
import { useCartContext } from '../../context/CartContext'
import toast from 'react-hot-toast'

const CATEGORY_ICONS = {
  'Maderas':      <GiWoodBeam size={16} />,
  'Ferretería':   <FiBox size={16} />,
  'Herramientas': <HiOutlineWrench size={16} />,
}

export default function ProductCard({ product }) {
  const { addItem } = useCartContext()
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
    <article className="product-card group">
      {/* Imagen & Overlay */}
      <div className="product-image-container">
        <img
          src={imageUrl}
          alt={product.name}
          className="product-image grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
          loading="lazy"
        />
        
        {/* Badge de stock sutil */}
        {isOutOfStock && (
          <div className="absolute inset-0 bg-wood-950/40 backdrop-blur-[1px] flex items-center justify-center">
            <span className="text-[10px] tracking-[0.3em] font-bold text-white uppercase border border-white/20 px-5 py-2.5">
              Sin Existencia
            </span>
          </div>
        )}

        {/* Categoría Label */}
        <div className="absolute top-0 right-0 p-4 translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
          <span className="flex items-center gap-2 bg-wood-900/90 backdrop-blur-sm px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white">
            {CATEGORY_ICONS[product.category]}
            {product.category}
          </span>
        </div>

        {/* Quick Add Button (Desktop-ish) */}
        {!isOutOfStock && (
          <button 
            onClick={handleAddToCart}
            className="absolute bottom-6 right-6 w-12 h-12 bg-white text-wood-900 flex items-center justify-center rounded-none shadow-2xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-wood-100"
            aria-label="Añadir al pedido"
          >
            <FiPlus size={20} />
          </button>
        )}
      </div>

      {/* Info de Producto */}
      <div className="p-8 space-y-4 bg-white">
        <div className="space-y-1">
          <span className="text-[9px] uppercase tracking-[0.3em] text-wood-400 font-bold block">
            {product.category}
          </span>
          <h3 className="font-display font-medium text-wood-950 text-xl leading-snug group-hover:text-wood-700 transition-colors">
            {product.name}
          </h3>
        </div>

        <div className="flex items-baseline gap-2">
            <span className="text-xs text-sand-400 font-medium">$</span>
            <p className="font-display font-bold text-2xl text-wood-800 tracking-tight">
              {product.price}
              <span className="text-[10px] text-sand-400 font-light ml-2 uppercase tracking-widest italic">
                {product.unit || 'm'}
              </span>
            </p>
        </div>

        <p className="text-sand-500 text-xs leading-relaxed font-light line-clamp-2 border-l-2 border-sand-100 pl-4 py-1">
          {product.description}
        </p>

        <div className="pt-4 flex items-center justify-between border-t border-sand-50">
          <span className={`text-[9px] uppercase tracking-[0.2em] font-bold ${product.stock ? 'text-nature-600' : 'text-wood-300'}`}>
            {product.stock ? 'Disponibilidad inmediata' : 'Bajo pedido'}
          </span>
          <FiArrowRight className="text-sand-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
        </div>
      </div>
    </article>
  )
}

