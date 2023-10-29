import { collection, getDocs } from "firebase/firestore"
import { db } from "../../index"

export async function obtenerProductosDesdeFirebase() {
  const productosCollection = collection(db, "productos")
  const querySnapshot = await getDocs(productosCollection)
  const productos = []

  querySnapshot.forEach((doc) => {
    const producto = doc.data()
    productos.push(producto)
  })

  return productos
}