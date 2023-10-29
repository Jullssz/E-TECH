import { createContext } from "react"
import '../assets/style.css'

export const AlmacenContext = createContext({ productos: [], setProductos: () => { } })