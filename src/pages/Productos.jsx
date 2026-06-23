import { useState } from 'react'
import Card from '../components/Card'
import productos from '../data/productos'
import '../styles/productos.css'

function Productos() {
  const [busqueda, setBusqueda] = useState('')
  const [filtro, setFiltro] = useState('Todos')
  const [orden, setOrden] = useState('')

  // Filtrar productos
  let productosFiltrados = productos.filter(p => {
    const coincideBusqueda = p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    const coincideFiltro = filtro === 'Todos' || p.categoria === filtro
    return coincideBusqueda && coincideFiltro
  })

  // Ordenar productos
  if (orden === 'menor') {
    productosFiltrados = [...productosFiltrados].sort((a, b) => a.precio - b.precio)
  } else if (orden === 'mayor') {
    productosFiltrados = [...productosFiltrados].sort((a, b) => b.precio - a.precio)
  }

  return (
    <main className="productos-page">
      <h1>Productos</h1>

      <section className="productos-controles">
        <div className="controles-top">
          <input
            type="text"
            className="buscador"
            placeholder="🔍 Buscar productos..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <select
            className="ordenar"
            value={orden}
            onChange={(e) => setOrden(e.target.value)}
          >
            <option value="">Ordenar por</option>
            <option value="menor">Menor precio</option>
            <option value="mayor">Mayor precio</option>
          </select>
        </div>
        <div className="filtros">
          {['Todos', 'Ropa', 'Accesorios', 'Calzado'].map(cat => (
            <button
              key={cat}
              className={`filtro-btn ${filtro === cat ? 'active' : ''}`}
              onClick={() => setFiltro(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="productos">
        <div className="product-grid">
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map(p => (
              <Card
                key={p.id}
                nombre={p.nombre}
                precio={p.precio}
                imagen={p.imagen}
                categoria={p.categoria}
              />
            ))
          ) : (
            <p>No se encontraron productos.</p>
          )}
        </div>
      </section>
    </main>
  )
}

export default Productos
