import "./itemlist.css"

const ItemInicio = ({ datoCard }) => {

    const ultimaCard = datoCard.id === 4;

    return (
        <article className="col-xl-3 col-lg-6 col-md-6 col-sm-12 ">
            <div className="cardAreaWrapper">
                <div className={`card cardIndividual cardInicio ${ultimaCard ? 'cardEspecial' : ''}`}>
                    {datoCard.imagen && (
                        <img src={datoCard.imagen} alt={`Ícono representativo de ${datoCard.titulo}`} className="imagenCards" loading="lazy" />
                    )}
                    <h3 className="card-title cardTitulo"> {datoCard.titulo} </h3>
                    <p> {datoCard.descripcion} </p>
                    {ultimaCard && (
                        <a className='btnCardInicioContainer' target="_blank" href="https://api.whatsapp.com/send?phone=+541156137641&text=¡Hola!%20¿Cómo%20podemos%20ayudarte?">
                            <button className="btnCardInicio" aria-label="Contactar estudio jurídico vía WhatsApp">Contáctanos</button>
                        </a>
                    )}
                </div>
            </div>
        </article>
    )
}

export default ItemInicio

//La tarea de Item simplemente es la vista de una card. 


