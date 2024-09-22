import "./areas.css"
import ItemListContainer from "../ItemList/ItemListContainer"
import ItemAreas from "../ItemList/ItemAreas"
import obtenerDatosCardsAreas from '../../data/data-areas.js'
import { Helmet } from "react-helmet"

const Areas = () => {

  return (
    <div className="areasContainer">
       <Helmet>
                <title>Áreas de Práctica | Estudio Berraondo, Galarza & Rocha</title>
                <meta name="description" content="Abogados especializados en derecho laboral, penal y civil. Conocé como podemos ayudarte en cada área legal." />
                <meta name="keywords" content="ESTUDIO, JURIDICO, ABOGADOS, PENAL, LABORAL, CIVIL, SUCESIONES, ACCIDENTES" />
            </Helmet>
      <h1 className="h1Areas">Áre<span className="spanAreas1">as de Pr<span className="spanAreas2">á</span></span><span className="spanAreas2">cti</span>ca</h1>
      <ItemListContainer fetchData={obtenerDatosCardsAreas} ItemComponent={ItemAreas} containerClass="cardsContainerAreas" />
    </div>
  )
}

export default Areas