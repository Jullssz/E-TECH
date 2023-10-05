import React from 'react'
import { useParams } from 'react-router-dom'
import { productos } from '../almacenProductos/AlmacenProductos';

export default function DetalleCards({titulo}) {
    const {id} = useParams()
  
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
