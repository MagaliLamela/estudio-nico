import "./nosotros.css"
import ItemListContainer from "../ItemList/ItemListContainer"
import ItemNosotros from "../ItemList/ItemNosotros"
import obtenerDatosCardsNosotros from '../../data/data-nosotros.js'
import oficina from "../../assets/oficina.jpg"
import { Helmet } from "react-helmet"

const Nosotros = () => {

  return (
    <div className='nosotros'>
      <Helmet>
        <title>Nosotros | Estudio Berraondo, Galarza & Rocha</title>
        <meta name="description" content="Somos un equipo de abogados con amplia experiencia en derecho laboral, penal, sucesiones y accidentes de tránsito. Nos dedicamos a ofrecer soluciones jurídicas efectivas y personalizadas." />
        <meta name="keywords" content="ESTUDIO, JURIDICO, ABOGADOS, PENAL, LABORAL, CIVIL, SUCESIONES, ACCIDENTES" />
      </Helmet>

      <section className='imgNosotrosContainer'>
        <img className="imgNosotros" src={oficina} alt="Oficinas del Estudio Jurídico" loading="lazy" />

        <div className='textoNosotros'>
          <h1><span>Nues</span>tro Estudio</h1>
          <p>Se enorgullece de ofrecer un asesoramiento legal integral y personalizado, respaldado por una trayectoria de excelencia y un profundo compromiso con la justicia. Nuestro equipo de abogados altamente capacitados se dedica a brindar soluciones jurídicas innovadoras y eficaces, siempre con el objetivo de proteger y promover los intereses de nuestros clientes con la mayor integridad y profesionalismo.</p>
        </div>
      </section>

      <section className="nosotrosContainer">
        <h2 className="h2Nosotros">Nues<span className="spanNosotros1">tros Ab<span className="spanNosotros2">o</span></span><span className="spanNosotros2">gad</span>os</h2>
        <ItemListContainer fetchData={obtenerDatosCardsNosotros} ItemComponent={ItemNosotros} containerClass="cardsContainerNosotros" />
      </section>
    </div>
  )
}

export default Nosotros