import Card from './Card'

function Gallery({ productos }) {
  if (productos.length === 0) {
    return <p role="status" className="sin-resultados">No se encontraron productos.</p>
  }

  return (
    <div className="product-grid2" role="list">
      {productos.map((p) => (
        <Card
          key={p.id}
          id={p.id}
          nombre={p.name}
          precio={p.price}
          imagen={p.image}
          categoria={p.category}
        />
      ))}
    </div>
  )
}

export default Gallery
