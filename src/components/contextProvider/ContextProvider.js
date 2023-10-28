import React, { useState, useEffect } from 'react'
import { AlmacenContext } from '../../context/AlmacenContext'
import { obtenerProductosDesdeFirebase } from '../obtenerProductosDeFB/ObtenerProductosDeFB'

export default function ContextProvider({ children }) {
    const [productos, setProductos] = useState([])

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
        <AlmacenContext.Provider value={{ productos, setProductos }}>
            {children}
        </AlmacenContext.Provider>
    )
}