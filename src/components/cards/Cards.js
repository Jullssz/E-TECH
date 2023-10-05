import React from 'react'
import ItemListContainer from '../itemListContainer/ItemListContainer'
import './style.css'

export default function Cards() {
  return (
    <div className='d-flex flex-row justify-content-center'>
        <ItemListContainer
          titulo="PC GAMER"
          descripcion="descripcion"
          imagen="./url"
          botonComprar="Comprar"
        />
        <ItemListContainer
          titulo="Silla Gamer"
          descripcion="descripcion"
          imagen="./url"
          botonComprar="Comprar"
        />
        <ItemListContainer
          titulo="Teclado Nisuta"
          descripcion="descripcion"
          imagen="./url"
          botonComprar="Comprar"
        />
    </div>
  )
}

