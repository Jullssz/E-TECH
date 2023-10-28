import React from 'react'
import Cardd from '../card/Card'
import './style.css'
import { productos } from '../almacenProductos/AlmacenProductos'

export default function Cards() {

  return (
    <div className='d-flex flex-row justify-content-center'>
      {productos.map((producto, index) => (
        <Cardd key={index} producto={producto} />
      ))}
    </div>
  )
}