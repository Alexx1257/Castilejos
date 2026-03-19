import { useState, useEffect } from 'react'
import { FiSearch, FiPackage, FiArrowRight, FiArrowLeft, FiTool } from 'react-icons/fi'
import { GiWoodBeam } from 'react-icons/gi'
import { BsGrid3X3 } from 'react-icons/bs'
import ProductCard from '../components/ui/ProductCard'
import { useProducts } from '../hooks/useProducts'
import { CATEGORIES } from '../config/constants'

// ─── Catálogo con búsqueda, filtros y paginación ────────────────
const CATEGORY_TABS = [
  { key: CATEGORIES.ALL, label: 'Todo', Icon: BsGrid3X3 },
  { key: CATEGORIES.MADERAS, label: 'Maderas', Icon: GiWoodBeam },
  { key: CATEGORIES.FERRETERIA, label: 'Ferretería', Icon: FiPackage },
  { key: CATEGORIES.HERRAMIENTAS, label: 'Herramientas', Icon: FiTool },
]

const PRODUCTS_PER_PAGE = 8

export default function Catalog() {
  const {
    searchQuery,
    setSearchQuery,
    activeCategory,
    setActiveCategory,
    showOffersOnly,
    setShowOffersOnly,
    filteredProducts,
    categoryCounts,
    resetFilters,
  } = useProducts()

  const [currentPage, setCurrentPage] = useState(1)

  // Resetear página al filtrar
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, activeCategory, showOffersOnly])

  const hasResults = filteredProducts.length > 0
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)
  
  // Lógica de paginación
  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    // Scroll suave al inicio del catálogo
    document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="catalogo" className="py-32 bg-white" aria-label="Catálogo de productos">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Encabezado Premium */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl space-y-4">
            <span className="premium-label">Nuestros Productos</span>
            <h2 className="text-5xl md:text-6xl font-display font-medium text-wood-950 leading-tight">
              Materiales para tu proyecto <br />
              <span className="text-wood-400 italic">Curaduría de Calidad</span>
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

        {/* Tabs de categorías & Filtro de Ofertas */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-20">
          {CATEGORY_TABS.map(({ key, label, Icon }) => {
            const isActive = activeCategory === key
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-8 py-5 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.25em] transition-all relative overflow-hidden flex items-center gap-4
                  ${isActive
                    ? 'bg-wood-950 text-white shadow-2xl translate-y-[-4px]'
                    : 'bg-white text-wood-400 border border-sand-100 hover:border-wood-200 hover:text-wood-600 hover:bg-sand-50 active:scale-95'
                  }`}
              >
                <Icon size={16} />
                {label}
                <span className={`ml-1 text-[9px] ${isActive ? 'text-wood-400' : 'text-sand-300'}`}>
                  ({categoryCounts[key]})
                </span>
                {isActive && (
                  <div className="absolute bottom-0 left-0 w-full h-[4px] bg-wood-400 animate-slide-right" />
                )}
              </button>
            )
          })}

          <div className="w-[1px] h-8 bg-sand-100 mx-2 hidden lg:block" />

          <button
            onClick={() => setShowOffersOnly(!showOffersOnly)}
            className={`group flex items-center gap-4 px-10 py-5 transition-all duration-500 rounded-none border-2
                ${showOffersOnly
                ? 'bg-orange-600 border-orange-600 text-white shadow-[0_15px_30px_rgba(234,88,12,0.3)] translate-y-[-4px]'
                : 'bg-transparent border-sand-200 text-sand-500 hover:border-orange-300 hover:text-orange-600'
              }`}
          >
            <div className={`w-2.5 h-2.5 rounded-full ${showOffersOnly ? 'bg-white animate-pulse' : 'bg-sand-200 group-hover:bg-orange-300'}`} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Solo Ofertas</span>
          </button>
        </div>

        {/* Grid de productos con layout amplio */}
        {hasResults ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Paginación Premium */}
            {totalPages > 1 && (
              <div className="mt-24 flex items-center justify-center gap-4 border-t border-sand-100 pt-12">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-4 border border-sand-200 text-wood-400 hover:text-wood-950 hover:border-wood-950 disabled:opacity-30 disabled:hover:border-sand-200 disabled:hover:text-wood-400 transition-all active:scale-90"
                  aria-label="Página anterior"
                >
                  <FiArrowLeft size={20} />
                </button>
                
                <div className="flex items-center gap-2">
                  {[...Array(totalPages)].map((_, idx) => {
                    const pageNum = idx + 1
                    const isCurrent = pageNum === currentPage
                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`w-12 h-12 text-[11px] font-bold tracking-widest transition-all
                          ${isCurrent 
                            ? 'bg-wood-950 text-white shadow-xl scale-110' 
                            : 'bg-white text-wood-400 border border-sand-100 hover:bg-sand-50 hover:text-wood-600'
                          }`}
                      >
                        {pageNum.toString().padStart(2, '0')}
                      </button>
                    )
                  })}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-4 border border-sand-200 text-wood-400 hover:text-wood-950 hover:border-wood-950 disabled:opacity-30 disabled:hover:border-sand-200 disabled:hover:text-wood-400 transition-all active:scale-90"
                  aria-label="Siguiente página"
                >
                  <FiArrowRight size={20} />
                </button>
              </div>
            )}
          </>
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
      </div>
    </section>
  )
}
