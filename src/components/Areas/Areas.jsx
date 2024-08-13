import "./areas.css"
import ItemListContainer from "../ItemList/ItemListContainer"
import ItemAreas from "../ItemList/ItemAreas"
import obtenerDatosCardsAreas from '../../data/data-areas.js'

const Areas = () => {

  return (
    <div className="areasContainer">
      <h1 className="h1Areas">Áre<span>as de Prá</span>ctica</h1>
      <ItemListContainer fetchData={obtenerDatosCardsAreas} ItemComponent={ItemAreas} containerClass="cardsContainerAreas" />
    </div>
  )
}

export default Areas