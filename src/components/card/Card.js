import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import './style.css'

export default function Cardd({ producto }) {
  const { titulo, descripcion, imagen, precio } = producto
  return (
    <div>
      <Card className='m-4' border='primary' style={{ width: '320px', height: '335px' }}>
        <Card.Body>
          <Link to={`/productos/${encodeURIComponent(titulo)}`}>
            <Card.Title> <span className='titulo'>{titulo}</span></Card.Title>
          </Link>
          <div className='imagen'>
            <Card.Img variant="top" style={{ width: '50%' }} src={imagen} />
          </div>
          <div className='descripcionPrecioDiv'>
            <Card.Text className='descripcion'>
              {descripcion}
            </Card.Text>
            <Card.Text className='precio'>
              ${precio}
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}