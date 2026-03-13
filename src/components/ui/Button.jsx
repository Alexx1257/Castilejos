const VARIANT_CLASSES = {
  primary:   'bg-wood-800 text-white hover:bg-wood-700 shadow-xl',
  secondary: 'bg-white border border-wood-800 text-wood-800 hover:bg-wood-800 hover:text-white',
  ghost:     'bg-transparent text-wood-950 border border-transparent hover:border-sand-200 hover:bg-sand-50',
  whatsapp:  'bg-forest-800 text-white hover:bg-forest-700 shadow-xl',
  outline:   'border border-white/20 text-white hover:bg-white/10',
}

const SIZE_CLASSES = {
  sm:  'px-4 py-2 text-[10px] uppercase tracking-widest',
  md:  'px-8 py-4 text-[11px] uppercase tracking-[0.2em]',
  lg:  'px-12 py-5 text-[12px] uppercase tracking-[0.3em]',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  onClick,
  children,
  className = '',
  ...rest
}) {
  const isDisabled = disabled || loading

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={[
        'inline-flex items-center justify-center gap-3 font-bold transition-all duration-500',
        'active:scale-[0.98] select-none cursor-pointer',
        VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.primary,
        SIZE_CLASSES[size] ?? SIZE_CLASSES.md,
        isDisabled && 'opacity-30 cursor-not-allowed grayscale pointer-events-none',
        fullWidth && 'w-full',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {loading && (
        <span className="h-3 w-3 border-2 border-current border-t-transparent animate-spin mr-1" />
      )}
      {children}
    </button>
  )
}
