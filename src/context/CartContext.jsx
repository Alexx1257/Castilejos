import { createContext, useContext } from 'react'
import { useCart } from '../hooks/useCart'

// ─── CartContext: único punto de acceso al estado del carrito ─────
// Principio: los componentes consumen el contexto, nunca instancian
// la lógica directamente. Esto facilita tests y futuros cambios.

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const cart = useCart()
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>
}

/**
 * Hook de consumo del carrito.
 * Lanza error explícito si se usa fuera del CartProvider.
 */
export function useCartContext() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCartContext debe usarse dentro de <CartProvider>')
  }
  return context
}
