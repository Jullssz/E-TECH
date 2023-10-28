import React, { useContext } from 'react';
import { AlmacenContext } from '../../context/AlmacenContext';
import { Link } from 'react-router-dom';
import './style.css';

export default function CarritoDeCompras() {
    const { productos } = useContext(AlmacenContext);
    const totalPrecio = productos.reduce((total, producto) => total + producto.precio, 0);
    const confirmarCompra = () => {

    };
    return (
        <div className='divCarritoDeCompras'>
            <h2 className='tituloCarritoDeCompras'>Tu Carro</h2>
            <div className='tarjetasContainer'>
                {productos.map((producto, index) => (
                    <div key={index} className='tarjetaProducto'>
                        <img className='imagenCarritoDeCompras' src={producto.imagen} alt={producto.titulo} />
                        <p className='nombreProducto'>{producto.titulo}</p>
                        <p className='precioProducto'>${producto.precio}</p>
                    </div>
                ))}
            </div>
            <div className='totalPrecio'>
                <p>Total: ${totalPrecio.toFixed(2)}</p>
                <Link to="/checkout">
                <button className='botonConfirmarCompra' onClick={confirmarCompra}>Confirmar Compra</button>
                </Link>
            </div>
        </div>
    );
}