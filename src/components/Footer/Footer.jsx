
import "./footer.css"
import logo from "../../assets/logo.jpeg"
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="descripcionFooter">
        <img className="logoFooter" src={logo} alt="Logo del Estudio" />
      </div>

      <div className="serviciosFooter">
        <h2><span>Ser</span>vicios</h2>
        <p>
          Derecho Laboral <br />
          Asesoramiento Empresarial <br />
          Accidentes de Tránsito <br />
          Sucesiones <br />
          Derecho Penal
        </p>
      </div>

      <div className="contactoFooter">
        <h2><span>Con</span>tacto</h2>
        <p>Teléfonos: 4512-5641</p>
        <p>Mail: nicolasebastianrocha@gmail.com</p>
        <p>Dirección: Rodríguez Peña 336, Piso 5, Oficina 51</p>
        <div className="iconosFooter">
          <Link target="_blank" to="https://www.instagram.com" >
            <FaInstagram className="logoInstagram" />
          </Link>
          <Link target="_blank" to="https://www.linkedin.com">
            <FaLinkedinIn className="logoLinkedin" />
          </Link>
          <Link target="_blank" to="https://api.whatsapp.com/send?phone=1170238323&text=¡Hola!%20¿Cómo%20podemos%20ayudarte?">
            <FaWhatsapp className="logoWpp" />
          </Link>
        </div>
      </div>

    </footer>

  )
}

export default Footer