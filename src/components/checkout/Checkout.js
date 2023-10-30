import React, { useContext, useState } from 'react'
import { AlmacenContext } from '../../context/AlmacenContext'
import { db } from '../../index'
import { collection, addDoc, Timestamp } from '@firebase/firestore'
import { Link } from 'react-router-dom'
import './style.css';

export default function Checkout() {
  const { carrito, setCarrito } = useContext(AlmacenContext)
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [nombreError, setNombreError] = useState('')
  const [telefonoError, setTelefonoError] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [mostrarMensaje, setMostrarMensaje] = useState(false)
  const [idOperacion, setIdOperacion] = useState('')


  const handleNombreChange = (e) => {

    setNombre(e.target.value)
    if (e.target.value.length >= 2) {
      setNombreError('')
    } else {
      setNombreError('El nombre debe tener al menos 2 caracteres.')
    }
  };

  const handleTelefonoChange = (e) => {
    setTelefono(e.target.value)
    if (/^\d+$/.test(e.target.value) && e.target.value.length >= 8) {
      setTelefonoError('')
    } else {
      setTelefonoError('El número de teléfono debe contener al menos 8 dígitos y solo números.')
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    const fechaActual = new Date()
    fechaActual.setHours(fechaActual.getHours() - 3)

    if (nombre.length < 2 || telefono.length < 8) {
      setMensaje('Por favor, completa todos los campos correctamente.')
      setMostrarMensaje(true)
      return
    }

    const ordenRef = collection(db, 'ordenes')
    const nuevaOrden = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      fecha: Timestamp.fromDate(fechaActual),

      productos: carrito.map((producto) => ({
        id: producto.id,
        titulo: producto.titulo,
        precio: producto.precio,
      })),
    }

    try {
      const docRef = await addDoc(ordenRef, nuevaOrden)
      const idOperacion = docRef.id
      setIdOperacion(idOperacion)

      setCarrito([])
    } catch (e) {
      console.error('Error al agregar la orden: ', e)
    }
  }

  return (
    <div>
      <h2 className='tituloCheckout'>Checkout</h2>
      <form className="formContainer" onSubmit={handleFormSubmit}>
        <label className="formLabel" htmlFor="nombre">
          Nombre:
        </label>
        <input
          className="formInput"
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={handleNombreChange}
        />
        {nombreError && <p className="errorText">{nombreError}</p>}

        <label className="formLabel" htmlFor="email">
          Email:
        </label>
        <input
          className="formInput"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="formLabel" htmlFor="telefono">
          Teléfono:
        </label>
        <input
          className="formInput"
          type="tel"
          id="telefono"
          name="telefono"
          value={telefono}
          onChange={handleTelefonoChange}
        />
        {telefonoError && <p className="errorText">{telefonoError}</p>}

        <button className="formButton" type="submit">
          Crear Orden
        </button>
      </form>

      {mostrarMensaje && (
        <div>
          <p>{mensaje}</p>
        </div>
      )}
      {idOperacion && <Link className='irConfirmacion' to={`/confirmacion/${idOperacion}`}>Haz Click para ir a la confirmación</Link>}
    </div>
  )
}
