import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'

// ─── Punto de entrada de la aplicación ───────────────────────────
// CartProvider envuelve toda la app para que cualquier componente
// pueda acceder al estado del carrito sin prop-drilling.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
)
