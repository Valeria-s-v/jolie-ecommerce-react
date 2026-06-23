import { Link } from 'react-router-dom'
import logoOficial from '../assets/img/logo-oficial.png'

function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={logoOficial} alt="Logo de Jolie" className="logo" />
        </Link>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/catalogo">Catálogo</Link></li>
        </ul>
        <div className="header-icons">
          <i className="fa-solid fa-magnifying-glass"></i>
          <Link to="/registro" style={{ color: 'inherit', textDecoration: 'none' }}>
            <i className="fa-solid fa-user"></i>
          </Link>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
