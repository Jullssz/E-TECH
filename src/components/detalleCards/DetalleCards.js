import React from 'react'
import { useParams } from 'react-router-dom'

export default function DetalleCards({titulo}) {
    const {id} = useParams()

    const productos = [
        {
          id: 'PC GAMER',
          titulo: 'PC GAMER',
          descripcion: 'Descripción de PC GAMER',
          imagen: './url',
          botonComprar: 'Comprar',
        },
        {
          id: 'Silla Gamer',
          titulo: 'Silla Gamer',
          descripcion: 'Descripción de la Silla Gamer',
          imagen: './url',
          botonComprar: 'Comprar',
        },
        {
            id: 'Teclado Nisuta',
            titulo: 'Teclado Nisuta',
            descripcion: 'Descripción de la Silla Gamer',
            imagen: './url',
            botonComprar: 'Comprar',
          },
        
      ]
  
      const producto = productos.find((producto) => producto.id === id);
  
      if (!producto) {
        return <div>No se encontró el producto.</div>;
      }
  
    return (

    <div>

        <h2>{producto.titulo}</h2>
        <img src={producto.imagen} alt={producto.titulo}></img>
        <p>{producto.descripcion}</p>
    </div>
  )
}
