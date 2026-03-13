import { WHATSAPP_NUMBER, BUSINESS_INFO } from '../config/constants'

// ─── Utilidad pura: genera URL de WhatsApp con el pedido ─────────
// Sin estado propio, sin efectos secundarios. Fácilmente testeable.

/**
 * @param {Array<{name: string, quantity: number, price: number}>} cartItems
 * @param {number} total
 * @returns {string} URL de wa.me con el mensaje codificado
 */
export function buildWhatsAppOrderUrl(cartItems, total) {
  if (!cartItems.length) return `https://wa.me/${WHATSAPP_NUMBER}`

  const itemLines = cartItems
    .map((item) => `  • ${item.quantity}x ${item.name} — $${(item.price * item.quantity).toFixed(2)}`)
    .join('\n')

  const message = [
    `¡Hola! Quiero hacer el siguiente pedido de ${BUSINESS_INFO.name}:`,
    '',
    itemLines,
    '',
    `*Total estimado: $${total.toFixed(2)} MXN*`,
    '',
    'Por favor, confirmen disponibilidad y tiempo de entrega. ¡Gracias! 🙏',
  ].join('\n')

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

/**
 * @returns {string} URL de WhatsApp sin pedido (contacto directo)
 */
export function buildWhatsAppContactUrl() {
  const message = `¡Hola! Me gustaría obtener información sobre sus productos y materiales. ¿Podrían ayudarme?`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
