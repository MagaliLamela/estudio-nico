import "./itemlist.css"
import { Link } from "react-router-dom"

const ItemAreas = ({ datoCard }) => {

    return (
        <article className={`col-xl-4 col-lg-4 col-md-6 col-sm-12`}>
            <div className="cardAreaWrapper">
                <div className="card cardIndividual cardAreas ">
                    <div className="cardContentInicio">
                        <h3 className="card-title cardTitulo cardTituloAreas">
                            {datoCard.tituloParte1} <br /> {datoCard.tituloParte2} </h3>
                        <img src={datoCard.imagen} alt={`Icono representativo de ${datoCard.tituloParte1} ${datoCard.tituloParte2}`}  className="imagenCards" />
                        <p> {datoCard.descripcion} </p>
                    </div>
                    <div className="btnAreasContainer">
                        <Link to={`/detalles/${datoCard.id}`}>
                            <button className="btnAreasVerMas"> Ver más</button>
                        </Link>
                        <Link target="_blank" to="https://api.whatsapp.com/send?phone=1156137641&text=¡Hola!%20¿Cómo%20podemos%20ayudarte?">
                            <button className="btnAreasContacto" aria-label="Contáctanos por WhatsApp">Contáctanos</button>
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ItemAreas

//La tarea de Item simplemente es la vista de una card. 
