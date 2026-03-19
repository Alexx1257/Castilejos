import { useMemo, useState } from 'react'
import { PRODUCTS } from '../data/products'
import { CATEGORIES } from '../config/constants'

// ─── Hook de filtrado y búsqueda de productos ─────────────────────
// Encapsula la lógica de búsqueda para que el componente Catalog
// solo se encargue de renderizar resultados, nunca de calcularlos.

export function useProducts() {
  const [searchQuery, setSearchQuery]       = useState('')
  const [activeCategory, setActiveCategory] = useState(CATEGORIES.ALL)
  const [showOffersOnly, setShowOffersOnly] = useState(false)

  const filteredProducts = useMemo(() => {
    const query = searchQuery.toLowerCase().trim()

    return PRODUCTS.filter((product) => {
      const matchesCategory =
        activeCategory === CATEGORIES.ALL || product.category === activeCategory

      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        (product.category.toLowerCase().includes(query))

      const matchesOffers = !showOffersOnly || product.isOffer

      return matchesCategory && matchesSearch && matchesOffers
    })
  }, [searchQuery, activeCategory, showOffersOnly])

  const categoryCounts = useMemo(() => {
    return {
      [CATEGORIES.ALL]: PRODUCTS.length,
      [CATEGORIES.MADERAS]: PRODUCTS.filter(p => p.category === CATEGORIES.MADERAS).length,
      [CATEGORIES.FERRETERIA]: PRODUCTS.filter(p => p.category === CATEGORIES.FERRETERIA).length,
      [CATEGORIES.HERRAMIENTAS]: PRODUCTS.filter(p => p.category === CATEGORIES.HERRAMIENTAS).length,
    }
  }, [])

  const resetFilters = () => {
    setSearchQuery('')
    setActiveCategory(CATEGORIES.ALL)
    setShowOffersOnly(false)
  }

  return {
    searchQuery,
    setSearchQuery,
    activeCategory,
    setActiveCategory,
    showOffersOnly,
    setShowOffersOnly,
    filteredProducts,
    categoryCounts,
    totalProducts: PRODUCTS.length,
    resetFilters,
  }
}
