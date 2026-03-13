import { GiWoodBeam } from 'react-icons/gi'
import { FiDollarSign, FiZap, FiCheckCircle } from 'react-icons/fi'

const FEATURES = [
  {
    Icon: GiWoodBeam,
    title: 'Selección Privada',
    description: 'Acceso a maderas de orígenes certificados, secadas al horno y seleccionadas por su veta única.',
  },
  {
    Icon: FiZap,
    title: 'Cortes de Autor',
    description: 'Servicio de dimensionado láser para garantizar que cada tramo encaje con precisión milimétrica.',
  },
  {
    Icon: FiDollarSign,
    title: 'Valor Artesanal',
    description: 'Invierta en materiales que aumentan el valor de su obra y aseguran la durabilidad transgeneracional.',
  },
  {
    Icon: FiCheckCircle,
    title: 'Respaldo Directo',
    description: 'Garantía de calidad en cada veta. Nuestra reputación es su mejor tranquilidad estructural.',
  },
]

export default function Features() {
  return (
    <section className="py-32 bg-sand-50/50" aria-label="Ventajas del negocio">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {FEATURES.map(({ Icon, title, description }, index) => (
            <div
              key={title}
              className="group space-y-8"
            >
              <div className="relative">
                <span className="absolute -top-6 -left-2 text-7xl font-display font-bold text-wood-100/50 group-hover:text-wood-200/50 transition-colors">
                  0{index + 1}
                </span>
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-white border border-sand-100 text-wood-800 shadow-sm transition-all duration-700 group-hover:bg-wood-900 group-hover:text-white group-hover:rotate-6">
                  <Icon size={28} />
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-display font-medium text-wood-950 text-2xl tracking-tight">
                  {title}
                </h3>
                <p className="text-sand-500 text-sm leading-relaxed font-light">
                  {description}
                </p>
              </div>

              <div className="w-12 h-[1px] bg-wood-200 group-hover:w-full transition-all duration-1000" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

