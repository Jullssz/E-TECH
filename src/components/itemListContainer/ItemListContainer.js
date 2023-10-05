import React from 'react'
import './style.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function ItemListContainer({titulo, descripcion, imagen, botonComprar}) {
  const id = encodeURIComponent(titulo)
  return (

    <div>
    <Link to={`/productos/${id}`}>
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
    </Link>
    </div>
  );
}