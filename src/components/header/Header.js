import React from 'react'
import Carrito from './carrito/Carrito'
import NavBar from './navBar/NavBar'
import "./style.css"

export default function Header() {
  return (
    <header className='header'>
      <h1>E-TECH</h1>
      <NavBar />
      <Carrito />
    </header>
  )
}
