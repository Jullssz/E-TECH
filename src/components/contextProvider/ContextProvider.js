import React, { useState, useEffect } from 'react'
import { AlmacenContext } from '../../context/AlmacenContext'
import { obtenerProductosDesdeFirebase } from '../obtenerProductosDeFB/ObtenerProductosDeFB'


export default function ContextProvider({ children }) {
  const [productos, setProductos] = useState([])
  const [carrito, setCarrito] = useState([])
  const [font, setFont] = useState('roboto, san-serif')

  useEffect(() => {
    obtenerProductosDesdeFirebase()
      .then((productosObtenidos) => {
        setProductos(productosObtenidos)
      })
      .catch((error) => {
        console.error('Error al obtener productos desde Firebase:', error)
      })
  }, [])

  return (
    <AlmacenContext.Provider value={{ productos, setProductos, carrito, setCarrito, font, setFont }}>
      {children}
    </AlmacenContext.Provider>
  )
}