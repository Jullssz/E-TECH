import React, { useContext } from 'react'
import Cardd from '../card/Card'
import { AlmacenContext } from '../../context/AlmacenContext';

export default function Cards() {
  const { productos } = useContext(AlmacenContext);

  return (
    <div className='d-flex flex-row justify-content-center'>
      {productos.map((producto, index) => (
        <Cardd key={index} producto={producto} />
      ))}
    </div>
  )
}