import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import logoOficial from '../assets/img/logo-oficial.png'

function Navbar() {
  const [ busquedaVisible, setBusquedaVisible ] = useState(false)
  const [ textoBusqueda, setTextoBusqueda ] = useState('')
  const navigate = useNavigate()

  const handleBusqueda = (e) => {
    if (e.key === 'Enter' && textoBusqueda.trim()) {
      navigate(`/catalogo?q=${textoBusqueda.trim()}`)
      setBusquedaVisible(false)
      setTextoBusqueda('')
    }
  }
   
const [usuario, setUsuario] = useState(() => {
  const usuarioGuardado = localStorage.getItem('usuarioJolie')
  return usuarioGuardado ? JSON.parse(usuarioGuardado) : null
})

useEffect(() => {
  const actualizarUsuario = () => {
    const usuarioGuardado = localStorage.getItem('usuarioJolie')
    setUsuario(usuarioGuardado ? JSON.parse(usuarioGuardado) : null)
  }
  window.addEventListener('usuarioActualizado', actualizarUsuario)
  return () => window.removeEventListener('usuarioActualizado', actualizarUsuario)
}, [])

const handleLogout = () => {
  localStorage.removeItem('usuarioJolie')
  window.location.href = '/'
}

  return (
    <header>
      <nav>
        <Link to="/">
          <img src={logoOficial} alt="Logo de Jolie" className="logo" />
        </Link>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/catalogo">Catálogo</Link></li>
        </ul>

        {busquedaVisible && (
          <input
            type="text"
            className="buscador-navbar"
            placeholder="Buscar..."
            value={textoBusqueda}
            onChange={(e) => setTextoBusqueda(e.target.value)}
            onKeyDown={handleBusqueda}
            autoFocus
          />
        )}

        <div className="header-icons">
          <i className="fa-solid fa-magnifying-glass"
            onClick={() => setBusquedaVisible(!busquedaVisible)}
            style={{ cursor: 'pointer' }}
          ></i>
          {usuario ? (
  <span className="usuario-nombre" onClick={handleLogout} style={{ cursor: 'pointer', fontSize: '0.85rem' }}>
    Hola, {usuario.name.split(' ')[0]} | Salir
  </span>
) : (
  <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>
    <i className="fa-solid fa-user"></i>
  </Link>
)}
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
