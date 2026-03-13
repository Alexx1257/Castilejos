import { FiStar, FiCheckCircle } from 'react-icons/fi'

const REVIEWS = [
  {
    name: "Arq. Ricardo Méndez",
    role: "Director de Obra",
    content: "La calidad del cedro y el pino tratado que manejan en Castillejos es superior a lo que encuentras en madererías convencionales. Fundamental para mis acabados de lujo.",
    stars: 5
  },
  {
    name: "Sofía Armenta",
    role: "Diseñadora de Interiores",
    content: "Excelente atención y asesoría técnica. Me ayudaron a elegir la veta perfecta para una mesa de autor y el resultado fue espectacular. Profesionalismo total.",
    stars: 5
  },
  {
    name: "Ing. Carlos Ruiz",
    role: "Constructor Independiente",
    content: "Suministro puntual y materiales certificados. Es raro encontrar un proveedor que entienda tanto de resistencia estructural como de estética en madera.",
    stars: 5
  }
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-sand-50/50" aria-label="Testimonios de clientes">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="premium-label mx-auto">Confianza y Resultados</span>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-wood-950">
            Lo que dicen <span className="text-wood-400 italic">nuestros aliados.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {REVIEWS.map((review, i) => (
            <div key={i} className="bg-white p-10 border border-sand-100 shadow-card flex flex-col justify-between group hover:border-wood-300 transition-all duration-500">
              <div className="space-y-6">
                <div className="flex gap-1">
                  {[...Array(review.stars)].map((_, i) => (
                    <FiStar key={i} className="text-wood-400 fill-wood-400" size={14} />
                  ))}
                </div>
                <p className="text-wood-900 font-light leading-relaxed text-lg italic">
                  "{review.content}"
                </p>
              </div>
              
              <div className="mt-10 flex items-center gap-4 pt-8 border-t border-sand-50">
                <div className="w-10 h-10 bg-sand-100 flex items-center justify-center rounded-none text-wood-600">
                  <FiCheckCircle size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-wood-950">{review.name}</p>
                  <p className="text-[10px] uppercase tracking-wider text-sand-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
