import { FiX, FiShoppingBag, FiTrash2 } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { useCartContext } from '../../context/CartContext'
import { buildWhatsAppOrderUrl } from '../../utils/whatsapp'
import CartItem from '../ui/CartItem'

export default function CartDrawer({ isOpen, onClose }) {
  const { items, cartTotal, clearCart } = useCartContext()
  const hasItems = items.length > 0

  const handleSendOrder = () => {
    const url = buildWhatsAppOrderUrl(items, cartTotal)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      {/* Overlay Minimalista */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-wood-950/60 backdrop-blur-md transition-opacity duration-700
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-hidden="true"
      />

      {/* Panel Deslizable */}
      <aside
        role="dialog"
        aria-label="Carrito de compras"
        aria-modal="true"
        className={`fixed inset-y-0 right-0 z-[60] w-full max-w-md bg-white shadow-2xl
          flex flex-col transition-transform duration-500 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header Elegante */}
        <div className="flex items-center justify-between p-8 border-b border-sand-100">
          <div className="flex flex-col">
            <h2 className="font-display font-black text-2xl text-wood-950 tracking-tight">PEDIDO</h2>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-wood-500">
              {items.length} artículos seleccionados
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center border border-sand-200 text-wood-900 hover:bg-wood-900 hover:text-white transition-all"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Listado de Productos */}
        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-4">
          {hasItems ? (
            <ul className="divide-y divide-sand-50">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-20 h-20 border border-sand-100 flex items-center justify-center rounded-full">
                <FiShoppingBag className="text-sand-300" size={32} />
              </div>
              <div>
                <p className="font-display font-bold text-wood-900">Su lista está vacía</p>
                <p className="text-xs text-sand-400 mt-2 uppercase tracking-widest leading-loose">
                  Explore nuestra selección<br/>de maderas finas
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer con Resumen */}
        {hasItems && (
          <div className="p-8 bg-sand-50 border-t border-sand-100 space-y-8">
            <div className="flex justify-between items-end">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-black text-sand-400">Total Sugerido</span>
                <p className="text-3xl font-display font-black text-wood-900 leading-none mt-1">
                  ${cartTotal}
                </p>
              </div>
              <button 
                onClick={clearCart}
                className="text-[10px] uppercase tracking-widest font-bold text-sand-400 hover:text-red-600 transition-colors flex items-center gap-2"
              >
                <FiTrash2 size={12} /> Limpiar
              </button>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleSendOrder}
                className="w-full bg-nature-700 text-white font-bold py-5 text-[11px] uppercase tracking-[0.2em] hover:bg-nature-600 transition-all flex items-center justify-center gap-3 shadow-xl"
              >
                <FaWhatsapp size={18} />
                Solicitar Cotización Directa
              </button>
              <p className="text-[9px] text-center text-sand-400 uppercase tracking-widest leading-relaxed">
                * El costo final puede variar según dimensiones y flete.<br/>Un experto le atenderá de inmediato.
              </p>
            </div>
          </div>
        )}
      </aside>
    </>
  )
}
