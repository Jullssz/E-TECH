import React from 'react'
import ItemListContainer from '../itemListContainer/ItemListContainer'
import './style.css'

const productos = [
  {
    titulo: 'PC GAMER',
    descripcion: 'Descripcion',
    imagen: './url',
    botonComprar: 'Comprar',
  },
  {
    titulo: 'Silla Gamer',
    descripcion: 'Descripcion',
    imagen: './url',
    botonComprar: 'Comprar',
  },
  {
    titulo: 'Teclado Nisuta',
    descripcion: 'Descripcion',
    imagen: './url',
    botonComprar: 'Comprar',
  }, 
]

export default function Cards() {
  return (
    <div className='d-flex flex-row justify-content-center'>
      {productos.map((producto, index) => (
        <ItemListContainer key={index} producto={producto} />
      ))}
    </div>
  )
}

