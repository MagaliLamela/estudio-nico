
import "./footer.css"
import logo from "../../assets/logo.jpeg"
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="contenedorLogoFooter">
        <img className="logoFooter" src={logo} alt="Logo del Estudio" />
      </div>

      <div className="serviciosFooter">
        <h2><span className="spanFooter1">Se<span className="spanFooter2">r</span></span><span className="spanFooter2">vici</span>os</h2>
        <p>
          Derecho Laboral <br />
          Asesoramiento Empresarial <br />
          Accidentes de Tránsito <br />
          Sucesiones <br />
          Derecho Penal
        </p>
      </div>

      <div className="contactoFooter">
        <h2><span className="spanFooter1">Co<span className="spanFooter2">n</span></span><span className="spanFooter2">tac</span>to</h2>
        <p>Teléfonos: 4512-5641</p>
        <p>Mail: bgrabogados@gmail.com</p>
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