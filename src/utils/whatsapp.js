import { WHATSAPP_NUMBER, BUSINESS_INFO } from '../config/constants'

// ─── Utilidad pura: genera URL de WhatsApp con el pedido ─────────
// Sin estado propio, sin efectos secundarios. Fácilmente testeable.

/**
 * @param {Array<{name: string, quantity: number, price: number}>} cartItems
 * @param {number} total
 * @returns {string} URL de wa.me con el mensaje codificado
 */
/**
 * @returns {string} URL de WhatsApp sin pedido (contacto directo)
 */
export function buildWhatsAppContactUrl() {
  const formattedPhone = WHATSAPP_NUMBER.startsWith('52') ? WHATSAPP_NUMBER : `52${WHATSAPP_NUMBER}`
  const message = `¡Hola! Me gustaría obtener información sobre sus productos y materiales. ¿Podrían ayudarme?`
  return `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`
}

function getSafePhone() {
    return WHATSAPP_NUMBER.startsWith('521') ? WHATSAPP_NUMBER : (WHATSAPP_NUMBER.startsWith('52') ? WHATSAPP_NUMBER : `52${WHATSAPP_NUMBER}`)
}

export function buildWhatsAppOrderUrl(cartItems, total) {
  const phone = getSafePhone()
  if (!cartItems.length) return `https://wa.me/${phone}`

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

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}
export function buildWhatsAppOfferUrl(productName, specialPrice) {
  const phone = getSafePhone()
  const message = `¡Hola! Vi la oferta de la *${productName}* en su página y me gustaría apartarla al precio especial de *$${specialPrice}*. ¿Me podrían dar más detalles?`
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}
