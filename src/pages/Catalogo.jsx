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
    <main className="catalogo">
      <section className="productos">
        <div className="container2">
          <div className="product-grid2">
            {productos.map(p => (
              <div key={p.id} className="product-card2">
                <img src={`/src/assets/img/${p.imagen}`} alt={p.nombre} />
                <h3>{p.nombre}</h3>
                <p>${p.precio.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Catalogo


