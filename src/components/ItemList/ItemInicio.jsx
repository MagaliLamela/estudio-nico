import "./itemlist.css"
import { Link } from "react-router-dom"

const ItemInicio = ({ datoCard }) => {

    const ultimaCard = datoCard.id === 4;

    return (
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 ">
            <div className="cardAreaWrapper">
                <div className={`card cardIndividual cardInicio ${ultimaCard ? 'cardEspecial' : ''}`}>
                    {datoCard.imagen && (
                        <img src={datoCard.imagen} alt="Iconos" className="imagenCards" />
                    )}
                    <h2 className="card-title cardTitulo"> {datoCard.titulo} </h2>
                    <p> {datoCard.descripcion} </p>
                    {ultimaCard && (
                        <Link to={"../contacto"} className="btnCardInicioContainer">
                            <button className="btnCardInicio">Contáctanos</button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ItemInicio

//La tarea de Item simplemente es la vista de una card. 


