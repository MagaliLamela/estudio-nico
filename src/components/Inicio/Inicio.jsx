import React from 'react'
import ItemListContainer from "../ItemList/ItemListContainer"
import ItemInicio from "../ItemList/ItemInicio"
import banner from "../../assets/banner.jpg"
import "./inicio.css"
import obtenerDatosCardsInicio from '../../data/data-inicio.js'
import { Helmet } from 'react-helmet';

const Inicio = () => {
  return (
    <div className='inicio'>
        <Helmet>
                <title>Estudio Berraondo, Galarza & Rocha</title>
                <meta name="description" content="Somos un estudio jurídico especializado en derecho laboral, accidentes de tránsito, derecho penal y sucesiones. Más de 15 años defendiendo los derechos de nuestros clientes." />
                <meta name="keywords" content="ESTUDIO, JURIDICO, ABOGADOS, PENAL, LABORAL, CIVIL, SUCESIONES, ACCIDENTES" />
            </Helmet>
      <section className='imgBannerContainer'>
        <img className="imgBanner" src={banner} alt="Banner del Estudio Berraondo, Galarza y Rocha" loading="lazy" />
        <div className='textoBanner'>
          <h1>Estudio Berraondo, <br /><span>Gala</span>rza & Rocha</h1>
          <p>Somos un estudio jurídico comprometido con la excelencia, que ofrece un servicio con enfoque personalizado, combinando conocimiento, estrategia y un profundo compromiso con nuestros clientes.</p>
        </div> 
      </section>
      <h2 className='h2Inicio'>Razon<span className='spanInicio1'>es para el</span><span className='spanInicio2'>egirn</span>os</h2>
      <ItemListContainer fetchData={obtenerDatosCardsInicio} ItemComponent={ItemInicio} containerClass="cardsContainerInicio" />
    </div>
  )
}

export default Inicio