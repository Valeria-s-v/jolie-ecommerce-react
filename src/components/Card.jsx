function Card({ nombre, precio, imagen, categoria }) {
  return (
    <div className="product-card">
      <img src={`/src/assets/img/${imagen}`} alt={nombre} />
      <h3>{nombre}</h3>
      <p className="precio">${precio.toLocaleString()}</p>
    </div>
  )
}

export default Card
