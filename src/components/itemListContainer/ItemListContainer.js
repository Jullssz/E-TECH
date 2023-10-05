import React from 'react'
import './style.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function ItemListContainer({ producto }) {
  const { titulo, descripcion, imagen, botonComprar } = producto

  return (

    <div>
    <Link to={`/productos/${encodeURIComponent(titulo)}`}>
      <Card className='m-4' border='primary' style={{ width: '20rem' }}>
          <Card.Img variant="top" src={imagen} />
          <Card.Body>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text>
              {descripcion}
            </Card.Text>
          <Button variant="primary">{botonComprar}</Button>
        </Card.Body>
      </Card>
    </Link >
    </div> 
  ); 
}