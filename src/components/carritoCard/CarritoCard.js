import React from 'react'
import './style.css'

export default function CarritoCard({ producto }) {
    const { titulo, descripcion, imagen, precio } = producto;

    return (
        <div className="carritoCard">
            <div className="carritoCardContent">
                <div className="carritoCardImagen">
                    <img src={imagen} alt={titulo} />
                </div>
                <div className="carritoCardInfo">
                    <h3 className="carritoCardTitulo">{titulo}</h3>
                    <p className="carritoCardDescripcion">{descripcion}</p>
                    <p className="carritoCardPrecio">${precio}</p>
                </div>
            </div>
        </div>
    );
}