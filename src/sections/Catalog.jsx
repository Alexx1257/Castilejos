import { FiSearch, FiPackage, FiArrowRight } from 'react-icons/fi'
import { GiWoodBeam } from 'react-icons/gi'
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2'
import { BsGrid3X3 } from 'react-icons/bs'
import ProductCard from '../components/ui/ProductCard'
import { useProducts } from '../hooks/useProducts'
import { CATEGORIES } from '../config/constants'

// ─── Catálogo con búsqueda y filtros por categoría ────────────────
const CATEGORY_TABS = [
  { key: CATEGORIES.ALL,          label: 'Todo', Icon: BsGrid3X3 },
  { key: CATEGORIES.MADERAS,      label: 'Maderas', Icon: GiWoodBeam },
  { key: CATEGORIES.FERRETERIA,   label: 'Ferretería', Icon: FiPackage },
  { key: CATEGORIES.HERRAMIENTAS, label: 'Herramientas', Icon: HiOutlineWrenchScrewdriver },
]

export default function Catalog() {
  const {
    searchQuery,
    setSearchQuery,
    activeCategory,
    setActiveCategory,
    filteredProducts,
    resetFilters,
  } = useProducts()

  const hasResults = filteredProducts.length > 0

  return (
    <section id="catalogo" className="py-24 bg-white" aria-label="Catálogo de productos">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Encabezado Premium */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl space-y-4">
            <span className="premium-label">Nuestra Selección</span>
            <h2 className="text-5xl md:text-6xl font-display font-medium text-wood-950 leading-tight">
              Curaduría de <br />
              <span className="text-wood-400 italic">Maderas & Suministros</span>
            </h2>
          </div>
          
          {/* Buscador Integrado Estilizado */}
          <div className="relative w-full lg:w-96 group">
            <FiSearch
              className="absolute left-0 top-1/2 -translate-y-1/2 text-wood-500 transition-colors group-focus-within:text-wood-800"
              size={20}
            />
            <input
              type="search"
              placeholder="¿Qué material busca?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-4 bg-transparent border-b border-sand-200 
                text-wood-950 placeholder-sand-400 text-sm tracking-widest uppercase font-medium
                focus:outline-none focus:border-wood-800 transition-all duration-500"
              aria-label="Buscar en el catálogo"
            />
          </div>
        </div>

        {/* Tabs de categorías Premium */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {CATEGORY_TABS.map(({ key, label, Icon }) => {
            const isActive = activeCategory === key
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-10 py-5 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.25em] transition-all relative overflow-hidden flex items-center gap-4
                  ${isActive 
                    ? 'bg-wood-950 text-white shadow-2xl translate-y-[-4px]' 
                    : 'bg-white text-wood-400 border border-sand-100 hover:border-wood-200 hover:text-wood-600 hover:bg-sand-50 active:scale-95'
                  }`}
              >
                <Icon size={16} />
                {label}
                {isActive && (
                    <div className="absolute bottom-0 left-0 w-full h-[4px] bg-wood-400 animate-slide-right" />
                )}
              </button>
            )
          })}
        </div>

        {/* Grid de productos con layout amplio */}
        {hasResults ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-40 bg-sand-50/50 border border-sand-100 rounded-none">
            <div className="w-20 h-20 bg-white border border-sand-100 flex items-center justify-center mx-auto mb-8 shadow-sm">
              <FiSearch className="text-sand-200" size={28} />
            </div>
            <div className="space-y-4">
              <p className="font-display font-medium text-2xl text-wood-950">
                Sin resultados
              </p>
              <p className="text-sand-500 max-w-sm mx-auto text-sm font-light">
                No hemos encontrado materiales que coincidan con su búsqueda. Inténtelo con otros términos.
              </p>
            </div>
            <button 
              onClick={resetFilters}
              className="mt-10 wood-button-outline"
            >
              Ver Todo el Catálogo
            </button>
          </div>
        )}

        {/* Footer del Catálogo */}
        <div className="mt-32 pt-16 border-t border-sand-100 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-nature-50 flex items-center justify-center text-nature-700">
                  <FiPackage size={24} />
              </div>
              <p className="text-sand-600 text-[10px] uppercase tracking-[0.2em] font-bold max-w-xs leading-relaxed">
                Todas nuestras maderas cuentan con certificación de origen legal.
              </p>
          </div>
          <a href="#contacto" className="wood-button group text-center block w-full sm:w-auto">
            Maderas Especiales
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform inline" />
          </a>
        </div>
      </div>
    </section>
  )
}
