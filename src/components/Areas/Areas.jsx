import "./areas.css"
import ItemListContainer from "../ItemList/ItemListContainer"
import ItemAreas from "../ItemList/ItemAreas"
import obtenerDatosCardsAreas from '../../data/data-areas.js'

const Areas = () => {

  return (
    <div className="areasContainer">
      <h1 className="h1Areas">Áre<span className="spanAreas1">as de Pr<span className="spanAreas2">á</span></span><span className="spanAreas2">cti</span>ca</h1>
      <ItemListContainer fetchData={obtenerDatosCardsAreas} ItemComponent={ItemAreas} containerClass="cardsContainerAreas" />
    </div>
  )
}

export default Areas