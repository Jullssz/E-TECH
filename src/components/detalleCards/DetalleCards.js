import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AlmacenContext } from '../../context/AlmacenContext';
import Boton from '../boton/Boton';
import Card from 'react-bootstrap/Card';
import './style.css'

export default function DetalleCards() {
    const { productos, setProductos } = useContext(AlmacenContext)
    const { id } = useParams()
    const producto = productos.find((producto) => producto.id === id)

    if (!producto) {
        return <div>No se encontró el producto.</div>
    }

    const Comprar = () => {
        setProductos([...productos, producto])
    }

    return (
        <div className='detalleDiv'>
            <h2 className='detalleTitulo'>{producto.titulo}</h2>
            <Card className='m-4' style={{ width: '40%' }}>
                <Card.Body className='detalleDiv'>
                    <Card.Img className='detalleImagen' variant="top" style={{ width: '50%' }} src={producto.imagen} alt={producto.titulo} />
                    <div className='detalleDivDescripcion'>
                        <Card.Text className='detalleDescripcion'>
                            {producto.descripcion}
                        </Card.Text>
                    </div>
                    <Card.Text className='detallePrecio'>
                        ${producto.precio}
                    </Card.Text>
                </Card.Body>
            </Card>
            <div className='detalleDivBoton'>
                <Link to="/carrito">
                    <Boton className='detalleBoton' titulo="Comprar" funcion={Comprar} />
                </Link>
            </div>
        </div>
    );
}