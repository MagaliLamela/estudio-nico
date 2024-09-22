import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from "react"
import obtenerDatosCardsAreas from "../../data/data-areas.js"
import icono from "../../assets/icono-detalle.png"

const DetalleAreas = () => {
    const [area, setArea] = useState({})
    const { idArea } = useParams(); // Obtiene el parámetro de la URL

    useEffect(() => {
        obtenerDatosCardsAreas()
            .then((data) => {
                const areaEncontrada = data.find((areaData) => areaData.id === (idArea)) 
                setArea(areaEncontrada)
            })
    }, [idArea])


    const obtenerParteMedia = (titulo1 = '', titulo2 = '') => {
        // Unir los títulos, incluyendo un espacio solo si titulo2 no está vacío
        const tituloCompleto = titulo2 ? `${titulo1} ${titulo2}` : titulo1;
        const longitudMedia = Math.floor(tituloCompleto.length / 2);
        const inicioSubrayado = Math.max(0, longitudMedia - 2); // Inicia 2 posiciones antes del centro

        return {
            antes: tituloCompleto.slice(0, inicioSubrayado),
            media: tituloCompleto.slice(inicioSubrayado, inicioSubrayado + 5), // Abarca 5 caracteres
            despues: tituloCompleto.slice(inicioSubrayado + 5),
        };
    };

    // Asegurarse de que `tituloParte1` y `tituloParte2` existan antes de pasarlos a `obtenerParteMedia`
    const { antes, media, despues } = obtenerParteMedia(area.tituloParte1 || '', area.tituloParte2 || '');


    return (
        <div className='contenedorDetalle'>
            <div className='contenedorImagenDetalle1'>
                <img className={`imagenDetalle ${area.tituloParte1 === 'Derecho' && area.tituloParte2 === 'Laboral' ? 'imagenDetalleDerechoLaboral' : ''}`} src={area.imagenDetalle} alt="" />
            </div>
            <div className='contenedorDetalleTexto'>
                <h2>
                    {antes}
                    <span className="tituloSubrayado">{media}</span>
                    {despues}
                </h2>
                <div className='contenedorImagenDetalle2'>
                <img className={`imagenDetalle ${area.tituloParte1 === 'Derecho' && area.tituloParte2 === 'Laboral' ? 'imagenDetalleDerechoLaboral' : ''}`} src={area.imagenDetalle} alt="" />
            </div>
                <p> {area.descripcion} </p>
                {area.detalles && (
                    <ul>
                        {area.detalles.map((detalle, index) => (
                            <li key={index}>
                                <img src={icono} alt="Icono" className='iconoLista' />
                                <p><span>{detalle.titulo}</span> {detalle.texto} </p>
                            </li>
                        ))}
                    </ul>
                )}
                <Link className='contenedorBtnDetalle' target="_blank" to="https://api.whatsapp.com/send?phone=1156137641&text=¡Hola!%20¿Cómo%20podemos%20ayudarte?">
                    <button className="btnContactoDetalle">Contáctanos</button>
                </Link>
            </div>
        </div>
    )
}

export default DetalleAreas