/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ── Tokens de diseño — paleta temática MADERA PREMIUM ────────
        // Enfocada en elegancia, profundidad y naturaleza
        wood: {
          50:  '#fdfaf6', // Crema de papel premium
          100: '#f7ecd9', // Lino natural
          200: '#e6d2b5', // Madera de arce clara
          300: '#cdaa7d', // Roble dorado
          400: '#a67c52', // Nogal medio
          500: '#8b5e34', // Caoba clásica
          600: '#6f4a27', // Nogal profundo
          700: '#54381d', // Madera oscura / Ébano
          800: '#3a2614', // Café místico
          900: '#1f140a', // Sombra de bosque
          950: '#0f0a05', // Carbón vegetal
        },
        // Acento: Verde bosque/naturaleza para equilibrio
        nature: {
          50:  '#f2f7f2',
          100: '#e1ede0',
          200: '#c2dbc1',
          300: '#99c298',
          400: '#6ba36a',
          500: '#4d8a4d',
          600: '#3c6e3b',
          700: '#2f552e', // Verde bosque profundo (acento)
          800: '#234022',
          900: '#1a2e19',
        },
        // Neutros cálidos (Arena/Piedra)
        sand: {
          50:  '#f9f8f6',
          100: '#f1efeb',
          200: '#e3e0d8',
          300: '#d1cdc0',
          400: '#b0aa97',
          500: '#8e8671',
          600: '#706958',
          700: '#575144',
          800: '#3d3930',
          900: '#24211c',
        },
        whatsapp: '#25d366',
      },
      fontFamily: {
        // Sans para legibilidad técnica y moderna
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        // Serif (o Display con carácter) para títulos premium que evocan artesanía
        display: ['Lora', 'Georgia', 'serif'],
      },
      backgroundImage: {
        // Textura de veta de madera refinada
        'wood-grain': 'repeating-linear-gradient(92deg, transparent, transparent 2px, rgba(84,56,29,0.03) 2px, rgba(84,56,29,0.03) 4px)',
        'hero-gradient': 'linear-gradient(to right, rgba(31,20,10,0.95), rgba(31,20,10,0.8), transparent)',
      },
      animation: {
        'fade-in':        'fadeIn 0.8s ease-out forwards',
        'slide-up':       'slideUp 0.7s ease-out forwards',
        'reveal':         'reveal 1s cubic-bezier(0.2, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        reveal: {
          '0%':   { opacity: '0', clipPath: 'inset(100% 0 0 0)' },
          '100%': { opacity: '1', clipPath: 'inset(0 0 0 0)' },
        }
      },
      boxShadow: {
        'card':       '0 4px 20px rgba(80,40,10,0.10)',
        'card-hover': '0 8px 30px rgba(80,40,10,0.20)',
        'wood':       '0 4px 24px rgba(117,54,13,0.18)',
      },
    },
  },
  plugins: [],
}
