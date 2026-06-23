import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <ul className="footer-nav">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/catalogo">Catálogo</Link></li>
      </ul>
      <p>&copy; 2026 Jolie. Todos los derechos reservados.</p>
    </footer>
  )
}

export default Footer
