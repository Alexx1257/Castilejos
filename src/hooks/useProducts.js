import { useMemo, useState } from 'react'
import { PRODUCTS } from '../data/products'
import { CATEGORIES } from '../config/constants'

// ─── Hook de filtrado y búsqueda de productos ─────────────────────
// Encapsula la lógica de búsqueda para que el componente Catalog
// solo se encargue de renderizar resultados, nunca de calcularlos.

export function useProducts() {
  const [searchQuery, setSearchQuery]     = useState('')
  const [activeCategory, setActiveCategory] = useState(CATEGORIES.ALL)

  const filteredProducts = useMemo(() => {
    const query = searchQuery.toLowerCase().trim()

    return PRODUCTS.filter((product) => {
      const matchesCategory =
        activeCategory === CATEGORIES.ALL || product.category === activeCategory

      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [searchQuery, activeCategory])

  const resetFilters = () => {
    setSearchQuery('')
    setActiveCategory(CATEGORIES.ALL)
  }

  return {
    searchQuery,
    setSearchQuery,
    activeCategory,
    setActiveCategory,
    filteredProducts,
    totalProducts: PRODUCTS.length,
    resetFilters,
  }
}
