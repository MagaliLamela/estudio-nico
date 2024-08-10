import React from 'react'
import ItemListCards from "./ItemListCards"
import banner from "../../assets/banner.jpg"
import "./inicio.css"

const Inicio = () => {
  return (
    <div className='inicio'>
      <div className='imgBannerContainer'>
        <img className="imgBanner" src={banner} alt="Banner" />
        <div className='textoBanner'>
          <h1>Estudio Rochota <br /> <span>& Asoc</span>iados</h1>
          <p>Una descripción o subtítulo hola como estas escribi algo nico que sino ya no se con que rellenar</p>
        </div>
      </div>
      <h2 className='h2Inicio'>Razon<span>es para el</span>egirnos</h2>
      <ItemListCards />
    </div>
  )
}

export default Inicio