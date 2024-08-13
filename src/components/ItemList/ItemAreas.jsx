import "./itemlist.css"
import {Link} from "react-router-dom"

const ItemAreas = ({ datoCard }) => {

    return (
        <div className={`col-xl-4 col-lg-4 col-md-6 col-sm-12`}>
            <div className="cardAreaWrapper">
                <div className="card cardIndividual cardAreas ">
                    <h2 className="card-title cardTitulo"> {datoCard.tituloParte1} <br /> {datoCard.tituloParte2} </h2>
                    <img src={datoCard.imagen} alt="Iconos" className="imagenCards" />
                    <p> {datoCard.descripcion} </p>
                    <div className="btnAreasContainer">
                        <button className="btnAreasVerMas"> Ver más</button>
                        <Link to={"../contacto"}>
                        <button className="btnAreasContacto">Contáctanos</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemAreas

//La tarea de Item simplemente es la vista de una card. 
