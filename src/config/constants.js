// ─── Capa de configuración global ───────────────────────────────
// Centraliza constantes para evitar "magic strings" en toda la app.

export const WHATSAPP_NUMBER = '526681234567' // ← Reemplazar con número real

export const BUSINESS_INFO = {
  name:    'Maderería y Ferretería Castillejos',
  phone:   '+52 668 123 4567',
  address: 'Prolongación Ángel Flores s/n, Col. Centro, Sinaloa, México',
  hours: {
    weekdays: 'Lunes – Viernes: 8:00 AM – 6:00 PM',
    saturday: 'Sábado: 8:00 AM – 2:00 PM',
    sunday:   'Domingo: Cerrado',
  },
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7414.152!2d-107.39!3d24.79!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ3JzI0LjAiTiAxMDfCsDIzJzI0LjAiVw!5e0!3m2!1ses!2smx!4v1600000000000!5m2!1ses!2smx',
}

export const CATEGORIES = {
  ALL:         'Todos',
  MADERAS:     'Maderas',
  FERRETERIA:  'Ferretería',
  HERRAMIENTAS: 'Herramientas',
}
