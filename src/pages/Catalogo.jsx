import '../styles/catalogo.css'

const productos = [
  { id: 1, nombre: "Vestido Elegante", precio: 70000, imagen: "vestido_elegante.png" },
  { id: 2, nombre: "Mochila de Cuero", precio: 29500, imagen: "Mochila_cuero.jpg" },
  { id: 3, nombre: "Pantalón Clásico", precio: 60000, imagen: "pantalon_clasico.png" },
  { id: 4, nombre: "Remera Gris", precio: 25000, imagen: "Remera_básica.jpg" },
  { id: 5, nombre: "Campera Abrigada", precio: 75600, imagen: "Campera_abrigada.jpg" },
  { id: 6, nombre: "Campera de Cuero", precio: 65000, imagen: "Campera_de_cuero.jpg" },
  { id: 7, nombre: "Remera Básica", precio: 20000, imagen: "remera.jpg" },
  { id: 8, nombre: "Pantalón Brillos", precio: 55000, imagen: "Pantalon_brillos.jpg" },
  { id: 9, nombre: "Pantalón Wide", precio: 70000, imagen: "Pantalon_Wide.jpg" }
]

function Catalogo() {
  return (
    <main id="catalogo" className="catalogo">

      {/* Título de la sección */}
      <section id="catalogo-header" aria-label="Encabezado del catálogo">
        <h1>Catálogo</h1>
        <p>Explorá toda nuestra colección</p>
      </section>

      {/* Listado de productos */}
      <section id="catalogo-productos" className="productos" aria-label="Catálogo de productos">
        <div className="container2">
          <div className="product-grid2" role="list">
            {productos.map(p => (
              <article key={p.id} className="product-card2" role="listitem">
                <img src={`/src/assets/img/${p.imagen}`} alt={p.nombre} />
                <h3>{p.nombre}</h3>
                <p>${p.precio.toLocaleString()}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}

export default Catalogo


