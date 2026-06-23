import { useState } from 'react'
import '../styles/registro.css'

function Registro() {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    codigoArea: '',
    telefono: '',
    contrasena: '',
    repetirContrasena: '',
    terminos: false
  })

  const [verContrasena, setVerContrasena] = useState(false)
  const [verRepetir, setVerRepetir] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Datos del formulario:', form)
    alert('Formulario enviado correctamente!')
  }

  const handleReset = () => {
    setForm({
      nombre: '',
      apellido: '',
      email: '',
      codigoArea: '',
      telefono: '',
      contrasena: '',
      repetirContrasena: '',
      terminos: false
    })
  }

  return (
    <main className="registro-main">
      <h1>Registrarse</h1>
      <p className="subtitle">Ingresá tus datos para crear tu cuenta</p>
      <section className="form-container">
        <form id="form" onSubmit={handleSubmit}>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nombre">Nombre*</label>
              <input type="text" id="nombre" name="nombre" required
                placeholder="Nombre" value={form.nombre} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Apellido*</label>
              <input type="text" id="apellido" name="apellido" required
                placeholder="Apellido" value={form.apellido} onChange={handleChange} />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" name="email" required
              placeholder="tu@email.com" value={form.email} onChange={handleChange} />
          </div>

          <div className="form-group-label">
            <p>Teléfono de contacto</p>
          </div>
          <div className="form-row">
            <div className="form-group small">
              <label htmlFor="codigoArea">Código de área*</label>
              <input type="text" id="codigoArea" name="codigoArea" required
                placeholder="Código de área" maxLength="4"
                value={form.codigoArea} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Número de teléfono*</label>
              <input type="tel" id="telefono" name="telefono" required
                placeholder="Número de teléfono"
                value={form.telefono} onChange={handleChange} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group password-group">
              <label htmlFor="contrasena">Contraseña*</label>
              <div className="password-input">
                <input type={verContrasena ? 'text' : 'password'}
                  id="contrasena" name="contrasena" required
                  placeholder="Contraseña" value={form.contrasena} onChange={handleChange} />
                <button type="button" className="toggle-password"
                  onClick={() => setVerContrasena(!verContrasena)}>
                  <i className={`fa-solid ${verContrasena ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
              </div>
            </div>
            <div className="form-group password-group">
              <label htmlFor="repetirContrasena">Repetir contraseña*</label>
              <div className="password-input">
                <input type={verRepetir ? 'text' : 'password'}
                  id="repetirContrasena" name="repetirContrasena" required
                  placeholder="Repetir contraseña"
                  value={form.repetirContrasena} onChange={handleChange} />
                <button type="button" className="toggle-password"
                  onClick={() => setVerRepetir(!verRepetir)}>
                  <i className={`fa-solid ${verRepetir ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
              </div>
            </div>
          </div>

          <div className="form-check">
            <input type="checkbox" id="terminos" name="terminos"
              required checked={form.terminos} onChange={handleChange} />
            <label className="form-check-label" htmlFor="terminos">
              Acepto los términos y condiciones*
            </label>
          </div>

          <div className="form-group button-container">
            <button className="btn btn-primary" type="submit">Registrarse</button>
            <button className="btn btn-danger" type="button" onClick={handleReset}>
              Limpiar Formulario
            </button>
          </div>

          <div className="login-link">
            <p>¿Ya tenés cuenta? <a href="#">Inicia sesión acá</a></p>
          </div>

        </form>
      </section>
    </main>
  )
}

export default Registro
