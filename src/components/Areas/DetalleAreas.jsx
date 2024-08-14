import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react"
import obtenerDatosCardsAreas from "../../data/data-areas.js"

const DetalleAreas = () => {
    const [area, setArea] = useState({})
    const { idArea } = useParams(); // Obtiene el parámetro de la URL

    useEffect(() => {
        obtenerDatosCardsAreas()
            .then((data) => {
                const areaEncontrada = data.find((areaData) => areaData.id === parseInt(idArea)) //Esta comparación sirve cuando tengo strings en los id de mis productos en data. Si yo tuviera id númericos en lugar de string, entonces no funcionaría, porque el parametro dinamico no es un número, siempre llega como un string. Entonces no serían estrictamente iguales, porque no son iguales en tipo de dato. Para solucionar esto, se podría parsear el parametro dinamico, con parseInt(idProducto).
                setArea(areaEncontrada)
            })
    }, [])

    return (
        <div>
            <img src={area.imagen} alt="" />
            <h2> {area.tituloParte1} {area.tituloParte2} </h2>
        </div>
    )
}

export default DetalleAreas