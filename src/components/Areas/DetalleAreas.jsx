import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from "react"
import obtenerDatosCardsAreas from "../../data/data-areas.js"
import icono from "../../assets/icono-detalle.png"
import { Helmet } from 'react-helmet';

const DetalleAreas = () => {
    const [area, setArea] = useState({})
    const { idArea } = useParams(); // Obtiene el parámetro de la URL

    useEffect(() => {
        obtenerDatosCardsAreas()
            .then((data) => {
                const areaEncontrada = data.find((areaData) => areaData.id === (idArea))
                setArea(areaEncontrada)
            })
            .catch((error) => {
                console.error("Error al obtener los datos:", error);
                // Manejar el error de forma adecuada
            });
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
            <Helmet>
                <title>{`${area.tituloParte1} ${area.tituloParte2} | Estudio Berraondo, Galarza & Rocha`}</title>
                <meta name="description" content={area.descripcion} />
                <meta name="keywords" content="ESTUDIO, JURIDICO, ABOGADOS, PENAL, LABORAL, CIVIL, SUCESIONES, ACCIDENTES" />
            </Helmet>
            <section className='contenedorImagenDetalle1'>
                <img className={`imagenDetalle ${area.tituloParte1 === 'Derecho' && area.tituloParte2 === 'Laboral' ? 'imagenDetalleDerechoLaboral' : ''}`} src={area.imagenDetalle} alt={`Imagen de ${area.tituloParte1} ${area.tituloParte2}`} loading='lazy' />
            </section>

            <section className='contenedorDetalleTexto'>
                <h1>
                    {antes}
                    <span className="tituloSubrayado">{media}</span>
                    {despues}
                </h1>
                <div className='contenedorImagenDetalle2'>
                    <img className={`imagenDetalle ${area.tituloParte1 === 'Derecho' && area.tituloParte2 === 'Laboral' ? 'imagenDetalleDerechoLaboral' : ''}`} src={area.imagenDetalle} alt="Imagen de Derecho Laboral" />
                </div>
                <h2> {area.descripcion} </h2>
                {area.detalles && (
                    <ul>
                        {area.detalles.map((detalle, index) => (
                            <li key={index}>
                                <img src={icono} alt="Viñetas para listar elementos de una lista" className='iconoLista' />
                                <p><span>{detalle.titulo}</span> {detalle.texto} </p>
                            </li>
                        ))}
                    </ul>
                )}
                <a className='contenedorBtnDetalle' target="_blank" href="https://api.whatsapp.com/send?phone=+541156137641&text=¡Hola!%20¿Cómo%20podemos%20ayudarte?">
                    <button className="btnContactoDetalle" aria-label="Contáctanos por WhatsApp">Contáctanos</button>
                </a>
            </section>
        </div>
    )
}

export default DetalleAreas