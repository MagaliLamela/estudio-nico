import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import obtenerDatosCardsAreas from "../../data/data-areas.js";
import icono from "../../assets/icono-detalle.png";
import { Helmet } from 'react-helmet';

const DetalleAreas = () => {
    const [area, setArea] = useState({});
    const { idArea } = useParams();
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        obtenerDatosCardsAreas()
            .then((data) => {
                const areaEncontrada = data.find((areaData) => areaData.id === idArea);
                setArea(areaEncontrada);
            })
            .catch((error) => {
                console.error("Error al obtener los datos:", error);
            });
    }, [idArea]);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const obtenerParteMedia = (tituloCompleto = '') => {
        // Verifica si el título es "Asesoramiento Empresarial" y el ancho de pantalla es menor a 420px
        if (tituloCompleto.toLowerCase() === 'asesoramiento empresarial' && screenWidth < 408) {
            const indexPresar = tituloCompleto.indexOf('presar');
            if (indexPresar !== -1) {
                return {
                    antes: tituloCompleto.slice(0, indexPresar),
                    media: tituloCompleto.slice(indexPresar, indexPresar + 'presar'.length),
                    despues: tituloCompleto.slice(indexPresar + 'presar'.length),
                    subrayarMedia: true // Subrayar la palabra "presar"
                };
            }
        }

        // Lógica normal para otros títulos (subrayar la parte media)
        const longitudMedia = Math.floor(tituloCompleto.length / 2);
        const inicioSubrayado = Math.max(0, longitudMedia - 2);

        return {
            antes: tituloCompleto.slice(0, inicioSubrayado),
            media: tituloCompleto.slice(inicioSubrayado, inicioSubrayado + 5),
            despues: tituloCompleto.slice(inicioSubrayado + 5),
            subrayarMedia: true // Subrayar la parte media en todos los demás títulos
        };
    };

    const tituloCompleto = `${area.tituloParte1 || ''} ${area.tituloParte2 || ''}`.trim();
    const { antes, media, despues, subrayarMedia } = obtenerParteMedia(tituloCompleto);

    return (
        <div className='contenedorDetalle'>
            <Helmet>
                <title>{`${area.tituloParte1} ${area.tituloParte2} | Estudio Berraondo, Galarza & Rocha`}</title>
                <meta name="description" content={area.descripcion} />
                <meta name="keywords" content="ESTUDIO, JURIDICO, ABOGADOS, PENAL, LABORAL, CIVIL, SUCESIONES, ACCIDENTES" />
            </Helmet>
            <section className='contenedorImagenDetalle1'>
                <img
                    className={`imagenDetalle ${area.tituloParte1 === 'Derecho' && area.tituloParte2 === 'Laboral' ? 'imagenDetalleDerechoLaboral' : ''}`}
                    src={area.imagenDetalle}
                    alt={`Imagen de ${area.tituloParte1} ${area.tituloParte2}`}
                    loading='lazy'
                />
            </section>

            <section className='contenedorDetalleTexto'>
                <h1>
                    {antes}
                    {subrayarMedia ? <span className="tituloSubrayado">{media}</span> : media}
                    {despues}
                </h1>
                <div className='contenedorImagenDetalle2'>
                    <img
                        className={`imagenDetalle ${area.tituloParte1 === 'Derecho' && area.tituloParte2 === 'Laboral' ? 'imagenDetalleDerechoLaboral' : ''}`}
                        src={area.imagenDetalle}
                        alt="Imagen de Derecho Laboral"
                    />
                </div>
                <h2>{area.descripcion}</h2>
                {area.detalles && (
                    <ul>
                        {area.detalles.map((detalle, index) => (
                            <li key={index}>
                                <img src={icono} alt="Viñetas para listar elementos de una lista" className='iconoLista' />
                                <p><span>{detalle.titulo}</span> {detalle.texto}</p>
                            </li>
                        ))}
                    </ul>
                )}
                <a className='contenedorBtnDetalle' target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=+541156137641&text=¡Hola!%20¿Cómo%20podemos%20ayudarte?">
                    <button className="btnContactoDetalle" aria-label="Contáctanos por WhatsApp">Contáctanos</button>
                </a>
            </section>
        </div>
    );
};

export default DetalleAreas;
