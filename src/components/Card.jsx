function Card({ id, nombre, precio, imagen, categoria }) {
  return (
    <article className="product-card2">
      <img src={imagen} alt={nombre} />
      <div className="card-info">
        <span className="card-categoria">{categoria}</span>
        <h3>{nombre}</h3>
        <p className="card-precio">${precio.toLocaleString('es-AR')}</p>
        <button className="btn-carrito">Agregar al carrito</button>
      </div>
    </article>
  )
}

export default Card