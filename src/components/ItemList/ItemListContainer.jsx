import React from 'react'
import { useEffect, useState } from 'react';
import "./itemlist.css"
import ItemList from "./ItemList"

const ItemListContainer = ({fetchData, ItemComponent, containerClass}) => {

  const [datosCards, setDatosCards] = useState([])

  useEffect(() => {
    fetchData()
      .then((data) => {
        setDatosCards(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [fetchData])


  return (
    <div className={`container-fluid ${containerClass}`}>
      <ItemList datosCards={datosCards} ItemComponent={ItemComponent} />
    </div>
  )
}

export default ItemListContainer