import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Registro from './pages/Registro'
import Catalogo from './pages/Catalogo'
import Login from './pages/Login'
import './styles/style.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App