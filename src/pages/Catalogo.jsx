import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Gallery from '../components/Gallery'
import useProducts from '../hooks/useProducts'
import '../styles/catalogo.css'

function Catalogo() {
  const { products, loading, error } = useProducts()
  const [searchParams] = useSearchParams()
  const [busqueda, setBusqueda] = useState(searchParams.get('q') || '')

  useEffect(() => {
    const q = searchParams.get('q') || ''
    if (q !== null) setBusqueda(q) 
  }, [searchParams])

  const [filtro, setFiltro] = useState('Todos')
  const [orden, setOrden] = useState('')

  if (loading) return <p className="catalogo-mensaje">Cargando productos...</p>
  if (error) return <p className="catalogo-mensaje">Error: {error}</p>

  let productosFiltrados = products.filter(p => {
    const coincideBusqueda = p.name.toLowerCase().includes(busqueda.toLowerCase())
    const coincideFiltro =
      filtro === 'Todos' ||
      (filtro === 'Accesorios' && p.category === 'accesorios') ||
      (filtro === 'Calzado' && p.category === 'zapatos') ||
      (filtro === 'Ropa' && !['accesorios', 'zapatos'].includes(p.category))
    return coincideBusqueda && coincideFiltro
  })

  if (orden === 'menor') productosFiltrados = [...productosFiltrados].sort((a, b) => a.price - b.price)
  if (orden === 'mayor') productosFiltrados = [...productosFiltrados].sort((a, b) => b.price - a.price)

  return (
    <main id="catalogo" className="catalogo">

      <section id="catalogo-header" className="catalogo-header" aria-label="Encabezado del catálogo">
        <h1>Catálogo</h1>
        <p>Explorá toda nuestra colección</p>
      </section>

      <section id="catalogo-controles" className="productos-controles" aria-label="Filtros y búsqueda">
        <div className="controles-top">
          <label htmlFor="buscador" className="visually-hidden">Buscar productos</label>
          <input
            id="buscador"
            type="text"
            className="buscador"
            placeholder="🔍 Buscar productos..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <label htmlFor="ordenar" className="visually-hidden">Ordenar productos</label>
          <select
            id="ordenar"
            className="ordenar"
            value={orden}
            onChange={(e) => setOrden(e.target.value)}
          >
            <option value="">Ordenar por</option>
            <option value="menor">Menor precio</option>
            <option value="mayor">Mayor precio</option>
          </select>
        </div>
        <nav id="filtros-categorias" className="filtros" aria-label="Filtrar por categoría">
          {['Todos', 'Ropa', 'Accesorios', 'Calzado'].map(cat => (
            <button
              key={cat}
              className={`filtro-btn ${filtro === cat ? 'active' : ''}`}
              onClick={() => setFiltro(cat)}
              aria-pressed={filtro === cat}
            >
              {cat}
            </button>
          ))}
        </nav>
      </section>

      <section id="listado-productos" className="productos" aria-label="Catálogo de productos">
        <Gallery productos={productosFiltrados} />
      </section>  

    </main>
  )
}

export default Catalogo