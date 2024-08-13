import "./itemlist.css"

const ItemList = ({ datosCards, ItemComponent }) => {
    return (
        <div className="row">
            {datosCards.map((datoCard) => (
                <ItemComponent key={datoCard.id} datoCard={datoCard} />
            ))}
        </div>
    )
}

export default ItemList

//La tarea de ItemList es recibir estos datos y mapearlos, e iterar sobre cada uno de los elementos que tengamos dentro de nuestro array.