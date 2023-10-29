import React from 'react'
import ItemListContainer from '../itemListContainer/ItemListContainer';
import './style.css'

export default function Inicio() {

  return (
    <div>
      <h2 className='tituloInicio'>Bienvenido a E-TECH</h2>
      <ItemListContainer />
    </div>
  )
}