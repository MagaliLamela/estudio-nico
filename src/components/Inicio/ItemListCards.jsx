import React from 'react'
import { useEffect, useState } from 'react';
import obtenerDatosCards from '../../data/data';
import "./inicio.css"
import ItemList from "./ItemList"

const ItemListCards = () => {

  const [datosCards, setDatosCards] = useState([])

  useEffect(() => {
    obtenerDatosCards()
      .then((dataCards) => {

        setDatosCards(dataCards)

      })
      .catch((error) => {
        console.error(error)
      })
  }, [])


  return (
    <div>
      <ItemList datosCards={datosCards} />
    </div>
  )
}

export default ItemListCards