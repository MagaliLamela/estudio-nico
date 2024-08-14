import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from './components/Footer/Footer'
import Inicio from "./components/Inicio/Inicio"
import Contacto from './components/Contacto/Contacto'
import Areas from "./components/Areas/Areas"
import Nosotros from "./components/Nostros/Nosotros"
import ScrollToTop from './components/Scroll/ScrollToTop';
import DetalleAreas from './components/Areas/DetalleAreas'

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />

      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/areas-de-practica' element={<Areas />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path="/detalles/:idArea" element={<DetalleAreas />} />
      </Routes>
      <Footer />

    </BrowserRouter>


  )
}

export default App
