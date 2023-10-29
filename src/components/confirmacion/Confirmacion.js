import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Boton from '../boton/Boton'
import './style.css'

export default function Confirmacion() {
    const { idOperacion } = useParams()

    const Volver = () => {

    }

    return (
        <div className='divConfirmacion'>
            <h2 className='h2Confirmacion'>Confirmación de Orden</h2>
            <p className='idConfirmacion'>ID de Operación: {idOperacion}</p>
            <p className='pConfirmacion'>Gracias por confiar en E-TECH!</p>
            <div className='botonConfirmacionDiv'>
                <Link to={"/"} exact>
                    <Boton className='botonConfirmacion' titulo="Volver a Inicio" funcion={Volver} />
                </Link>
            </div>
        </div>
    )
}
