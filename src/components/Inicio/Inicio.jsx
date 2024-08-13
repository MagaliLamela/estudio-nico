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
          <h1>Estudio Rocha <br /> <span>& Asoc</span>iados</h1>
          <p>Una descripción o subtítulo hola como estas escribi algo nico que sino ya no se con que rellenar</p>
        </div>
      </div>
      <h2 className='h2Inicio'>Razon<span>es para el</span>egirnos</h2>
      <ItemListContainer fetchData={obtenerDatosCardsInicio} ItemComponent={ItemInicio} containerClass="cardsContainerInicio" />
    </div>
  )
}

export default Inicio