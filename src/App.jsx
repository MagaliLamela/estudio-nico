import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from './components/Footer/Footer'
import Inicio from "./components/Inicio/Inicio"
import Contacto from './components/Contacto/Contacto'
import Areas from "./components/Areas/Areas"
import Nosotros from "./components/Nostros/Nosotros"
import ScrollToTop from './components/Scroll/ScrollToTop'
import DetalleAreas from './components/Areas/DetalleAreas'
import NotFound from './components/PaginaNoEncontrada/NotFound'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <ToastContainer />
      
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/areas-de-practica' element={<Areas />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path="/detalles/:idArea" element={<DetalleAreas />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <Footer />

    </BrowserRouter>


  )
}

export default App
