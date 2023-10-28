import React from 'react'
import './style.css'

export default function Checkout() {
  return (
    <div>
    <h2 className='tituloCheckout'>Checkout</h2>
    <form className="formContainer">
      <label className="formLabel" htmlFor="nombre">
        Nombre:
      </label>
      <input className="formInput" type="text" id="nombre" name="nombre" />

      <label className="formLabel" htmlFor="email">
        Email:
      </label>
      <input className="formInput" type="email" id="email" name="email" />

      <label className="formLabel" htmlFor="telefono">
        Teléfono:
      </label>
      <input className="formInput" type="tel" id="telefono" name="telefono" />

      <button className="formButton" type="submit">
        Crear Orden
      </button>
    </form>
  </div>
  )
}