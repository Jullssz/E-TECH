import React, { useState } from 'react'
import { AlmacenContext } from '../../context/AlmacenContext'

export default function ContextProvider({ children }) {
    const [almacen, setAlmacen] = useState([])

    return (
        <AlmacenContext.Provider value={{ almacen, setAlmacen }}>
            {children}
        </AlmacenContext.Provider>
    )
}
