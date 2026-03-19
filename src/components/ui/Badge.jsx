// ─── Badge: chip de estado o categoría ───────────────────────────
const VARIANT_CLASSES = {
  category:  'bg-wood-100 text-wood-800',
  success:   'bg-wood-100 text-wood-400',
  danger:    'bg-red-100 text-red-600',
  neutral:   'bg-stone-100 text-stone-600',
  accent:    'bg-orange-100 text-orange-700',
}

export default function Badge({ variant = 'neutral', children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold
        ${VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.neutral} ${className}`}
    >
      {children}
    </span>
  )
}
