import { GiWoodBeam } from 'react-icons/gi'
import { FiUsers, FiAward, FiPackage } from 'react-icons/fi'
import aboutImage from '../assets/stacks_of_planks.png'

const STATS = [
  { Icon: FiAward, value: '22', label: 'Especies' },
  { Icon: FiPackage, value: '500+', label: 'Productos' },
  { Icon: FiUsers, value: '1k+', label: 'Clientes' },
]

export default function About() {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden" aria-label="Sobre el negocio">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-sand-50/30 -skew-x-6 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          {/* Text Column */}
          <div className="order-2 lg:order-1 space-y-10">
            <div className="space-y-4">
              <span className="premium-label">Legado y Maestría</span>
              <h2 className="text-5xl md:text-6xl font-display font-medium text-wood-950 leading-tight">
                Tradición en cada <br />
                <span className="text-wood-400 italic">Veta de Madera.</span>
              </h2>
            </div>

            <div className="space-y-8 text-lg text-sand-600 font-light leading-relaxed">
              <p>
                En <span className="font-semibold text-wood-900 italic">Maderería Castillejos</span>, entendemos que la madera es más que un material; es el alma de sus espacios. Seleccionamos cuidadosamente cada pieza para asegurar que su visión cobre vida con la autenticidad que solo la naturaleza puede brindar.
              </p>
              <p>
                Con décadas de experiencia en el sector, nos enorgullece ser el punto de encuentro de carpinteros, diseñadores y constructores que no aceptan menos que la perfección técnica y estética en sus suministros.
              </p>
            </div>

            {/* Premium Stats */}
            <div className="grid grid-cols-3 gap-10 pt-10 border-t border-sand-100">
              {STATS.map(({ Icon, value, label }) => (
                <div key={label} className="space-y-2">
                  <p className="font-display font-bold text-4xl text-wood-800">
                    {value}
                  </p>
                  <p className="text-sand-400 text-[9px] uppercase tracking-[0.3em] font-bold">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className="order-1 lg:order-2 relative group">
            <div className="aspect-[4/5] rounded-none overflow-hidden shadow-2xl relative">
              <img
                src={aboutImage}
                alt="Selección de maderas premium"
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-wood-900/10 group-hover:bg-transparent transition-all duration-700" />
            </div>

            {/* Decortative Badge with Legal Info */}
            <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-wood-900 border border-wood-800 flex flex-col items-center justify-center p-6 shadow-2xl rotate-3 group-hover:rotate-0 transition-all duration-700 [backface-visibility:hidden] [will-change:transform]">
              <GiWoodBeam className="text-4xl text-wood-200 mb-4 group-hover:text-wood-100 transition-colors" />
              <span className="text-[12px] text-wood-400 uppercase tracking-[0.4em] font-bold text-center leading-relaxed mb-4 antialiased group-hover:text-wood-300 transition-colors">
                Madera de <br /> Origen Legal
              </span>
              <div className="pt-4 border-t border-wood-800 w-full text-center space-y-2">
                <p className="text-[8px] text-wood-500 uppercase tracking-wider font-bold leading-tight px-2 antialiased">
                  Código de Identidad Forestal: <br />
                  <span className="text-wood-400 group-hover:text-wood-300 transition-colors">R-07-079DEI-001/12</span>
                </p>
                <p className="text-[8px] text-wood-500 uppercase tracking-wider font-bold antialiased">
                  RFC: <span className="text-wood-400 group-hover:text-wood-300 transition-colors">CAED 739908NB1</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

