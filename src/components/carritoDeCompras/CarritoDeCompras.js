import React, { useContext, useState } from 'react'
import { AlmacenContext } from '../../context/AlmacenContext'
import { Link } from 'react-router-dom'
import CarritoCard from '../carritoCard/CarritoCard'
import Boton from '../boton/Boton'
import './style.css'

export default function CarritoDeCompras() {
    const { carrito } = useContext(AlmacenContext)
    const [mensaje, setMensaje] = useState('')
    const [mostrarMensaje, setMostrarMensaje] = useState(false)

    const totalPrecio = carrito.reduce((total, producto) => total + producto.precio, 0)
    const confirmarCompra = () => {
        if (carrito.length > 0) {

        } else {
            setMensaje('No hay productos en el carrito. Agrega productos antes de confirmar la compra.');
            setMostrarMensaje(true);
        }
    }

    return (
        <div className='divCarritoDeCompras'>
            <h2 className='tituloCarritoDeCompras'>Tu Carro</h2>
            <div className='tarjetasContainer'>
                {carrito.map((producto, index) => (
                    <CarritoCard key={index} producto={producto}>
                    </CarritoCard>
                ))}
            </div>
            {mostrarMensaje && (
                <div>
                    <p>{mensaje}</p>
                </div>
            )}
            <div className='totalPrecio'>
                <Link to={"/checkout"}>
                    <p>Total: ${totalPrecio.toFixed(2)}</p>
                    <Boton className='botonConfirmarCompra' titulo="Confirmar Compra" funcion={confirmarCompra} />
                </Link>
            </div>
        </div>
    );
}