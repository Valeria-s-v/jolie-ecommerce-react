import { useState } from 'react'
import '../styles/contact.css'

function Contact() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })

  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log(`Input modificado -> ${name}: ${value}`)
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado con estos datos:', form)
    setEnviado(true)
    setTimeout(() => setEnviado(false), 4000)
    handleReset()
  }

  const handleReset = () => {
    console.log('Formulario reseteado')
    setForm({
      nombre: '',
      email: '',
      mensaje: ''
    })
  }

  return (
    <main id="contacto" className="contacto-main">
      <h1>Contacto</h1>
      <p>¿Tenés alguna duda o consulta? Escribinos.</p>

      {enviado && (
        <div className="alerta-exito">
          <i className="fa-solid fa-circle-check"></i> ¡Mensaje enviado correctamente!
        </div>
      )}

      <section className="form-container" aria-label="Formulario de contacto">
        <form onSubmit={handleSubmit} noValidate>

          <div className="form-group">
            <label htmlFor="nombre">Nombre*</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              placeholder="Tu nombre"
              value={form.nombre}
              onChange={handleChange}
              autoComplete="name"
            />
          </div>

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

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje*</label>
            <textarea
              id="mensaje"
              name="mensaje"
              required
              placeholder="Escribí tu consulta..."
              value={form.mensaje}
              onChange={handleChange}
              rows="5"
            ></textarea>
          </div>

          <div className="form-group button-container">
            <button className="btn btn-primary" type="submit">Enviar mensaje</button>
            <button className="btn btn-danger" type="button" onClick={handleReset}>
              Limpiar Formulario
            </button>
          </div>

        </form>
      </section>
    </main>
  )
}

export default Contact
