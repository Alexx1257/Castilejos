import { FiMinus, FiPlus, FiX } from 'react-icons/fi'
import { useCartContext } from '../../context/CartContext'

export default function CartItem({ item }) {
  const { removeItem, updateQuantity } = useCartContext()

  const handleDecrease = () => updateQuantity(item.id, item.quantity - 1)
  const handleIncrease = () => updateQuantity(item.id, item.quantity + 1)
  const handleRemove   = () => removeItem(item.id)

  return (
    <li className="flex items-center gap-6 py-6 group">
      {/* Miniatura Enmarcada */}
      <div className="w-16 h-20 bg-sand-50 border border-sand-100 p-1 shrink-0 overflow-hidden">
        {item.image ? (
          <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-wood-50 text-wood-300 font-display font-bold">
            {item.name.charAt(0)}
          </div>
        )}
      </div>

      {/* Info y Cantidad */}
      <div className="flex-1 min-w-0 space-y-2">
        <div className="flex justify-between items-start gap-2">
          <h4 className="font-display font-bold text-sm text-wood-950 uppercase tracking-tight line-clamp-1">
            {item.name}
          </h4>
          <button
            onClick={handleRemove}
            className="text-sand-300 hover:text-red-600 transition-colors p-1"
          >
            <FiX size={14} />
          </button>
        </div>

        <div className="flex items-end justify-between">
          <div className="flex items-center border border-sand-200">
            <button
              onClick={handleDecrease}
              className="w-8 h-8 flex items-center justify-center text-wood-500 hover:bg-sand-50 transition-colors"
            >
              <FiMinus size={10} />
            </button>
            <span className="w-8 text-center text-xs font-bold text-wood-900">
              {item.quantity}
            </span>
            <button
              onClick={handleIncrease}
              className="w-8 h-8 flex items-center justify-center text-wood-500 hover:bg-sand-50 transition-colors"
            >
              <FiPlus size={10} />
            </button>
          </div>
          
          <div className="text-right">
            {item.originalPrice && (
              <p className="text-[10px] text-sand-400 line-through mb-[-2px]">
                ${(item.originalPrice * item.quantity).toFixed(2)}
              </p>
            )}
            <div className="flex items-center justify-end gap-2">
              {item.isOffer && (
                <span className="text-[8px] font-black bg-orange-100 text-orange-600 px-1.5 py-0.5 uppercase tracking-tighter">
                  {item.discountLabel || 'Oferta'}
                </span>
              )}
              <p className={`font-display font-black text-sm ${item.isOffer ? 'text-orange-600' : 'text-wood-800'}`}>
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
