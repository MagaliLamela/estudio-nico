import "./nosotros.css"
import ItemListContainer from "../ItemList/ItemListContainer"
import ItemNosotros from "../ItemList/ItemNosotros"
import obtenerDatosCardsNosotros from '../../data/data-nosotros.js'
import oficina from "../../assets/oficina.jpg"

const Nosotros = () => {

  return (
    <div className='nosotros'>
      <div className='imgNosotrosContainer'>
        <img className="imgNosotros" src={oficina} alt="Oficinas" />
       
        <div className='textoNosotros'>
          <h1><span>Nues</span>tro Estudio</h1>
          <p>Se enorgullece de ofrecer un asesoramiento legal integral y personalizado, respaldado por una trayectoria de excelencia y un profundo compromiso con la justicia. Nuestro equipo de abogados altamente capacitados se dedica a brindar soluciones jurídicas innovadoras y eficaces, siempre con el objetivo de proteger y promover los intereses de nuestros clientes con la mayor integridad y profesionalismo.</p>
        </div>
      </div>
      <div className="nosotrosContainer">
        <h1 className="h1Nosotros">Nues<span className="spanNosotros1">tros Ab<span className="spanNosotros2">o</span></span><span className="spanNosotros2">gad</span>os</h1>
        <ItemListContainer fetchData={obtenerDatosCardsNosotros} ItemComponent={ItemNosotros} containerClass="cardsContainerNosotros" />
      </div>
    </div>
  )
}

export default Nosotros