import { useState } from 'react'
import { Toaster } from 'react-hot-toast'

// Layout
import Navbar   from './components/layout/Navbar'
import Footer   from './components/layout/Footer'

// Secciones
import Hero       from './sections/Hero'
import About      from './sections/About'
import PromoBanner from './sections/PromoBanner'
import Catalog    from './sections/Catalog'
import Features   from './sections/Features'
import Location   from './sections/Location'
import Contact    from './sections/Contact'

// Carrito
import CartDrawer from './components/cart/CartDrawer'
import WhatsAppFAB from './components/ui/WhatsAppFAB'

// ─── Root component ───────────────────────────────────────────────
// Composición de toda la página. Solo orquesta el layout y el estado
// de visibilidad del CartDrawer. Nada de lógica de negocio aquí.

export default function App() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      {/* Notificaciones toast */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Navbar fija */}
      <Navbar onOpenCart={() => setCartOpen(true)} />

      {/* Contenido principal */}
      <main>
        <Hero />
        <About />
        <PromoBanner />
        <Catalog />
        <Features />
        <Location />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Carrito lateral */}
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      {/* Botón flotante de WhatsApp */}
      <WhatsAppFAB />
    </>
  )
}
