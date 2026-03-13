import { useReducer, useMemo, useCallback } from 'react'

// ─── Lógica pura del carrito (reducción sin side-effects) ────────
// El estado nunca se muta directamente; cada acción retorna un nuevo estado.

const ACTIONS = {
  ADD_ITEM:        'ADD_ITEM',
  REMOVE_ITEM:     'REMOVE_ITEM',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART:      'CLEAR_CART',
}

function cartReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_ITEM: {
      const existingIndex = state.findIndex((item) => item.id === action.product.id)
      if (existingIndex >= 0) {
        // Incrementa cantidad si ya existe
        return state.map((item, idx) =>
          idx === existingIndex ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...state, { ...action.product, quantity: 1 }]
    }

    case ACTIONS.REMOVE_ITEM:
      return state.filter((item) => item.id !== action.id)

    case ACTIONS.UPDATE_QUANTITY: {
      if (action.quantity <= 0) {
        return state.filter((item) => item.id !== action.id)
      }
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: action.quantity } : item
      )
    }

    case ACTIONS.CLEAR_CART:
      return []

    default:
      return state
  }
}

// ─── Hook público del carrito ────────────────────────────────────
export function useCart() {
  const [items, dispatch] = useReducer(cartReducer, [])

  const addItem = useCallback((product) => {
    dispatch({ type: ACTIONS.ADD_ITEM, product })
  }, [])

  const removeItem = useCallback((id) => {
    dispatch({ type: ACTIONS.REMOVE_ITEM, id })
  }, [])

  const updateQuantity = useCallback((id, quantity) => {
    dispatch({ type: ACTIONS.UPDATE_QUANTITY, id, quantity })
  }, [])

  const clearCart = useCallback(() => {
    dispatch({ type: ACTIONS.CLEAR_CART })
  }, [])

  const cartTotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  )

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  )

  return { items, addItem, removeItem, updateQuantity, clearCart, cartTotal, itemCount }
}
