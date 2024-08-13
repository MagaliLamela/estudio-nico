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
          <h1>Nuestro<br /> <span>Est</span>udio</h1>
          <p>Una descripción o subtítulo hola como estas escribi algo nico que sino ya no se con que rellenar. Descripcion del estudio y sus virtudes</p>
        </div>
      </div>
      <div className="nosotrosContainer">
        <h1 className="h1Nosotros">El <span>Equ</span>ipo</h1>
        <ItemListContainer fetchData={obtenerDatosCardsNosotros} ItemComponent={ItemNosotros} containerClass="cardsContainerNosotros" />
      </div>
    </div>
  )
}

export default Nosotros