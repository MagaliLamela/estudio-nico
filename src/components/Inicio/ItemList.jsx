import Item from "./Item"
import "./inicio.css"

const ItemList = ({ datosCards }) => {
    return (
        <div className="container-fluid row cardsDatosInicio">
            {datosCards.map((datoCard) => (
                <Item key={datoCard.id} datoCard={datoCard} />
            ))}
        </div>
    )
}

export default ItemList

//La tarea de ItemList es recibir estos datos y mapearlos, e iterar sobre cada uno de los elementos que tengamos dentro de nuestro array.