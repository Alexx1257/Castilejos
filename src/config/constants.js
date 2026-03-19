// ─── Capa de configuración global ───────────────────────────────
// Centraliza constantes para evitar "magic strings" en toda la app.

export const WHATSAPP_NUMBER = '526681234567' // ← Reemplazar con número real

export const BUSINESS_INFO = {
  name:    'Maderería y Ferretería Castillejos',
  phone:   '+52 668 123 4567',
  address: '1A Av. Sur Pte. 48, Sta Rosa, 29120 San Fernando, Chis.',
  hours: {
    weekdays: 'Lunes – Viernes: 8:00 AM – 6:00 PM',
    saturday: 'Sábado: 8:00 AM – 2:00 PM',
    sunday:   'Domingo: Cerrado',
  },
  mapsPlaceUrl: 'https://www.google.com/maps/place/Madereria+Castillejos/data=!4m2!3m1!1s0x0:0x3734bb7aa2217458?sa=X&ved=1t:2428&ictx=111',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15264.444299951012!2d-93.214444!3d16.822222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed81907727c957%3A0x3734bb7aa2217458!2sMadereria%20Castillejos!5e0!3m2!1ses!2smx!4v1710720000000!5m2!1ses!2smx',
}

export const CATEGORIES = {
  ALL:         'Todos',
  MADERAS:     'Maderas',
  FERRETERIA:  'Ferretería',
  HERRAMIENTAS: 'Herramientas',
}
