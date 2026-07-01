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
  const [exito, setExito] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    console.log(`Input modificado -> ${name}: ${type === 'checkbox' ? checked : value}`)
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
  }

  const handleSubmit = async (e) => {
  e.preventDefault()
  console.log('Formulario de registro enviado con estos datos:', form)

  // Validar que las contraseñas coincidan
  if (form.contrasena !== form.repetirContrasena) {
    alert('Las contraseñas no coinciden')
    return
  }

  try {
    // Verificar si el email ya existe
    const res = await fetch(`http://localhost:3000/user?email=${form.email}`)
    const usuariosExistentes = await res.json()

    if (usuariosExistentes.length > 0) {
      alert('Ya existe una cuenta con ese email')
      return
    }

    // Crear el usuario
    const nuevoUsuario = {
      name: `${form.nombre} ${form.apellido}`,
      email: form.email,
      password: form.contrasena
    }

    const response = await fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevoUsuario)
    })

    if (response.ok) {
  const usuarioCreado = await response.json()
  localStorage.setItem('usuarioJolie', JSON.stringify(usuarioCreado))
  window.dispatchEvent(new Event('usuarioActualizado'))
  setExito(true)
  setTimeout(() => setExito(false), 4000)
  handleReset()
}
  } catch (err) {
    alert('Error al registrarse. Verificá que el servidor esté corriendo.')
  }
}

  const handleReset = () => {
    console.log('Formulario de registro reseteado')
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
    <main id="registro" className="registro-main">

      <h1>Registrarse</h1>
      {exito && (
        <div className="alerta-exito">
          <i className="fa-solid fa-circle-check"></i> ¡Cuenta creada exitosamente! Bienvenida a Jolie.
        </div>
      )}

      <section id="formulario-registro" className="form-container" aria-label="Formulario de registro">
        <form id="form" onSubmit={handleSubmit} noValidate>

          <fieldset>
            <legend className="visually-hidden">Datos personales</legend>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nombre">Nombre*</label>
                <input type="text" id="nombre" name="nombre" required
                  placeholder="Nombre" value={form.nombre} onChange={handleChange}
                  autoComplete="given-name" />
              </div>
              <div className="form-group">
                <label htmlFor="apellido">Apellido*</label>
                <input type="text" id="apellido" name="apellido" required
                  placeholder="Apellido" value={form.apellido} onChange={handleChange}
                  autoComplete="family-name" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input type="email" id="email" name="email" required
                placeholder="tu@email.com" value={form.email} onChange={handleChange}
                autoComplete="email" />
            </div>
          </fieldset>

          <fieldset>
            <legend className="form-group-label"><p>Teléfono de contacto</p></legend>
            <div className="form-row">
              <div className="form-group small">
                <label htmlFor="codigoArea">Código de área*</label>
                <input type="text" id="codigoArea" name="codigoArea" required
                  placeholder="Código de área" maxLength="4"
                  value={form.codigoArea} onChange={handleChange}
                  autoComplete="tel-area-code" />
              </div>
              <div className="form-group">
                <label htmlFor="telefono">Número de teléfono*</label>
                <input type="tel" id="telefono" name="telefono" required
                  placeholder="Número de teléfono"
                  value={form.telefono} onChange={handleChange}
                  autoComplete="tel-local" />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="visually-hidden">Contraseña</legend>
            <div className="form-row">
              <div className="form-group password-group">
                <label htmlFor="contrasena">Contraseña*</label>
                <div className="password-input">
                  <input type={verContrasena ? 'text' : 'password'}
                    id="contrasena" name="contrasena" required
                    placeholder="Contraseña" value={form.contrasena} onChange={handleChange}
                    autoComplete="new-password" />
                  <button type="button" className="toggle-password"
                    onClick={() => setVerContrasena(!verContrasena)}
                    aria-label={verContrasena ? 'Ocultar contraseña' : 'Mostrar contraseña'}>
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
                    value={form.repetirContrasena} onChange={handleChange}
                    autoComplete="new-password" />
                  <button type="button" className="toggle-password"
                    onClick={() => setVerRepetir(!verRepetir)}
                    aria-label={verRepetir ? 'Ocultar contraseña' : 'Mostrar contraseña'}>
                    <i className={`fa-solid ${verRepetir ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
              </div>
            </div>
          </fieldset>

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
            <p>¿Ya tenés cuenta? <a href="/login">Inicia sesión acá</a></p>
          </div>

        </form>
      </section>
    </main>
  )
}

export default Registro
