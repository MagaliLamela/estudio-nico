import React from 'react'
import ItemListContainer from "../ItemList/ItemListContainer"
import ItemInicio from "../ItemList/ItemInicio"
import banner from "../../assets/banner.jpg"
import "./inicio.css"
import obtenerDatosCardsInicio from '../../data/data-inicio.js'

const Inicio = () => {
  return (
    <div className='inicio'>
      <div className='imgBannerContainer'>
        <img className="imgBanner" src={banner} alt="Banner" />
        <div className='textoBanner'>
          <h1>Estudio Berraondo, <br /><span>Gala</span>rza & Rocha</h1>
          <p>Somos un estudio jurídico comprometido con la excelencia, que ofrece un servicio con enfoque personalizado, combinando conocimiento, estrategia y un profundo compromiso con nuestros clientes.</p>
        </div>
      </div>
      <h2 className='h2Inicio'>Razon<span>es para el</span>egirnos</h2>
      <ItemListContainer fetchData={obtenerDatosCardsInicio} ItemComponent={ItemInicio} containerClass="cardsContainerInicio" />
    </div>
  )
}

export default Inicio