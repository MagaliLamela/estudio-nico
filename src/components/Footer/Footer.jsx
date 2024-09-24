import "./footer.css"
import logo from "../../assets/logo.jpeg"
import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="contenedorFooter">
    <footer>
      <div className="contenedorLogoFooter">
        <img className="logoFooter" src={logo} alt="Logo del Estudio Berrraondo, Galarza y Rocha" />
      </div>

      <div className="serviciosFooter">
        <h4><span className="spanFooter1">Se<span className="spanFooter2">r</span></span><span className="spanFooter2">vici</span>os</h4>
        <p>
          Derecho Laboral <br />
          Asesoramiento Empresarial <br />
          Accidentes de Tránsito <br />
          Sucesiones <br />
          Derecho Penal
        </p>
      </div>

      <div className="contactoFooter">
        <h4><span className="spanFooter1">Co<span className="spanFooter2">n</span></span><span className="spanFooter2">tac</span>to</h4>
        <address>
          <p>Teléfonos: <a href="tel:+541156137641">11-5613-7641</a> / <a href="tel:+541168981241">11-6898-1241</a></p>
          <p>Mail: <a href="mailto:estudiojuridicobgr@gmail.com">estudiojuridicobgr@gmail.com</a></p>
          <p>Dirección: <a href="https://www.google.com/maps/search/?api=1&query=Rodríguez+Peña+336,+Piso+5,+Oficina+51" target="_blank" rel="noopener noreferrer">Rodríguez Peña 336, Piso 5, Oficina 51</a></p>
        </address>
        <div className="iconosFooter">
          <a target="_blank" href="https://www.instagram.com/estudioberraondogalarzarocha" aria-label="Instagram del Estudio Berraondo, Galarza & Rocha" >
            <FaInstagram className="logoInstagram" />
          </a>
          <a target="_blank" href="https://m.facebook.com/people/Berraondo-Galarza-Rocha-Estudio-Jur%C3%ADdico/61564678864347/" aria-label="Facebook del Estudio Berraondo, Galarza & Rocha">
            <FaFacebook className="logoFacebook" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/company/berraondo-galarza-rocha-estudio-jur%C3%ADdico" aria-label="LinkedIn del Estudio Berraondo, Galarza & Rocha">
            <FaLinkedinIn className="logoLinkedin" />
          </a>
          <a target="_blank" href="https://api.whatsapp.com/send?phone=+541156137641&text=¡Hola!%20¿Cómo%20podemos%20ayudarte?" aria-label="WhatsApp del Estudio Berraondo, Galarza & Rocha">
            <FaWhatsapp className="logoWpp" />
          </a>
        </div>
      </div>

    </footer>

    <hr className="lineaFooter" />

    <div className="footer2">
      <p>Copyright © 2024 Estudio Berraondo, Galarza y Rocha. Todos los derechos reservados.</p>
      <p>Sitio creado por <a target="_blank" href="https://www.linkedin.com/in/magali-lamela-mitsumori/">Magalí Mitsumori</a></p>
    </div>

    
    </div>

  )
}

export default Footer