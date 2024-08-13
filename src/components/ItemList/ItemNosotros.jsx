import "./itemlist.css"

const ItemNosotros = ({ datoCard }) => {

    return (
        <div className={`col-xl-4 col-lg-4 col-md-6 col-sm-12`}>
            <div className="cardAreaWrapper">
                <div className="card cardIndividual cardNosotros ">
                    <img src={datoCard.imagen} alt="Fotos Abogados" className="imagenCardsNosotros" />
                    <h2 className="card-title cardTitulo"> {datoCard.tituloParte1} <br /> {datoCard.tituloParte2} </h2>
                    <p> {datoCard.descripcion} </p>
                </div>
            </div>
        </div>
    )
}

export default ItemNosotros

//La tarea de Item simplemente es la vista de una card. 
