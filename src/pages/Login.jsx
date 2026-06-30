import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/registro.css'

function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [verPassword, setVerPassword] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const res = await fetch(`http://localhost:3000/user?email=${form.email}`)
      const usuarios = await res.json()

      if (usuarios.length === 0) {
        setError('No existe una cuenta con ese email')
        return
      }

      const usuario = usuarios[0]

      if (usuario.password !== form.password) {
        setError('Contraseña incorrecta')
        return
      }

      localStorage.setItem('usuarioJolie', JSON.stringify(usuario))
      window.dispatchEvent(new Event('usuarioActualizado'))
      navigate('/')


    } catch (err) {
      setError('Error al conectar con el servidor')
    }
  }

  return (
    <main id="login" className="registro-main">
      <h1>Iniciar sesión</h1>
      <p className="subtitle">Ingresá tus datos para acceder a tu cuenta</p>

      <section className="form-container" aria-label="Formulario de login">
        <form onSubmit={handleSubmit} noValidate>

          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="tu@email.com"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>

          <div className="form-group password-group">
            <label htmlFor="password">Contraseña*</label>
            <div className="password-input">
              <input
                type={verPassword ? 'text' : 'password'}
                id="password"
                name="password"
                required
                placeholder="Contraseña"
                value={form.password}
                onChange={handleChange}
                autoComplete="current-password"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setVerPassword(!verPassword)}
                aria-label={verPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              >
                <i className={`fa-solid ${verPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </button>
            </div>
          </div>

          {error && <p className="error-mensaje">{error}</p>}

          <div className="form-group button-container">
            <button className="btn btn-primary" type="submit">Ingresar</button>
          </div>

          <div className="login-link">
            <p>¿No tenés cuenta? <a href="/registro">Registrate acá</a></p>
          </div>

        </form>
      </section>
    </main>
  )
}

export default Login