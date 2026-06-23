import { useState } from 'react'
import Card from '../components/Card'
import productos from '../data/productos'
import '../styles/productos.css'

function Productos() {
  const [busqueda, setBusqueda] = useState('')
  const [filtro, setFiltro] = useState('Todos')
  const [orden, setOrden] = useState('')

  let productosFiltrados = productos.filter(p => {
    const coincideBusqueda = p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    const coincideFiltro = filtro === 'Todos' || p.categoria === filtro
    return coincideBusqueda && coincideFiltro
  })

  if (orden === 'menor') {
    productosFiltrados = [...productosFiltrados].sort((a, b) => a.precio - b.precio)
  } else if (orden === 'mayor') {
    productosFiltrados = [...productosFiltrados].sort((a, b) => b.precio - a.precio)
  }

  return (
    <main id="productos" className="productos-page">
      <h1>Productos</h1>

      {/* Controles de búsqueda y filtrado */}
      <section id="productos-controles" className="productos-controles" aria-label="Filtros y búsqueda">
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

      {/* Grilla de productos */}
      <section id="listado-productos" className="productos" aria-label="Listado de productos">
        {productosFiltrados.length > 0 ? (
          <div className="product-grid" role="list">
            {productosFiltrados.map(p => (
              <article key={p.id} role="listitem">
                <Card
                  nombre={p.nombre}
                  precio={p.precio}
                  imagen={p.imagen}
                  categoria={p.categoria}
                />
              </article>
            ))}
          </div>
        ) : (
          <p role="status">No se encontraron productos.</p>
        )}
      </section>
    </main>
  )
}

export default Productos