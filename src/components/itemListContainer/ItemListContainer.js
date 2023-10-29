import React, { useContext, useEffect, useState } from "react"
import Cardd from "../card/Card"
import { AlmacenContext } from "../../context/AlmacenContext"
import { obtenerProductosDesdeFirebase } from "../obtenerProductosDeFB/ObtenerProductosDeFB"

export default function ItemListContainer() {
  const { productos, setProductos } = useContext(AlmacenContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    obtenerProductosDesdeFirebase()
      .then((productosObtenidos) => {
        setProductos(productosObtenidos)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error al obtener productos desde Firebase:", error)
        setLoading(false)
      })
  }, [setProductos])

  if (loading) {
    return <p>Cargando productos...</p>
  }

  return (
    <div className="d-flex flex-row justify-content-center">
      {productos.map((producto, index) => (
        <Cardd key={index} producto={producto} />
      ))}
    </div>
  )
}