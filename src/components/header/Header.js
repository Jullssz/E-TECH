import React from 'react'
import "./style.css"
import Carrito from './carrito/Carrito'
import NavBar from './navBar/NavBar'

export default function Header() {
  return (
    <header className='header'>
      <h1>E-TECH</h1>
      <NavBar/>
      <Carrito/>
    </header>
  )
}
