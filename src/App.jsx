import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from './components/Footer/Footer'
import Inicio from "./components/Inicio/Inicio"
import Contacto from './components/Contacto/Contacto'

function App() {

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/contacto' element={<Contacto />} />  
      </Routes>
      <Footer />

    </BrowserRouter>


  )
}

export default App
