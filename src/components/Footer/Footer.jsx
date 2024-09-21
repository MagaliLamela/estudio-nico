
import "./footer.css"
import logo from "../../assets/logo.jpeg"
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaFacebook } from "react-icons/fa";

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
        <p>Teléfonos: 11-5613-7641 / 11-6898-1241</p>
        <p>Mail: estudiojuridicobgr@gmail.com</p>
        <p>Dirección: Rodríguez Peña 336, Piso 5, Oficina 51</p>
        <div className="iconosFooter">
          <Link target="_blank" to="https://www.instagram.com/estudioberraondogalarzarocha" >
            <FaInstagram className="logoInstagram" />
          </Link>
          <Link target="_blank" to="https://m.facebook.com/people/Berraondo-Galarza-Rocha-Estudio-Jur%C3%ADdico/61564678864347/" >
            <FaFacebook className="logoFacebook" />
          </Link>
          <Link target="_blank" to="https://www.linkedin.com/company/berraondo-galarza-rocha-estudio-jur%C3%ADdico">
            <FaLinkedinIn className="logoLinkedin" />
          </Link>
          <Link target="_blank" to="https://api.whatsapp.com/send?phone=1156137641&text=¡Hola!%20¿Cómo%20podemos%20ayudarte?">
            <FaWhatsapp className="logoWpp" />
          </Link>
        </div>
      </div>

    </footer>

  )
}

export default Footer