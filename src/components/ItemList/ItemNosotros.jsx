import "./itemlist.css"

const ItemNosotros = ({ datoCard }) => {

    return (
        <article className={`col-xl-4 col-lg-4 col-md-6 col-sm-12`}>
            <div className="cardAreaWrapper">
                <div className="card cardIndividual cardNosotros ">
                    <img src={datoCard.imagen} alt={`Foto de ${datoCard.tituloParte1} ${datoCard.tituloParte2}`} className="imagenCardsNosotros" loading="lazy"/>
                    <h3 className="card-title cardTitulo"> {datoCard.tituloParte1} <br /> {datoCard.tituloParte2} </h3>
                    <p> {datoCard.descripcion} </p>
                </div>
            </div>
        </article>
    )
}

export default ItemNosotros

//La tarea de Item simplemente es la vista de una card. 
