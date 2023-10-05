import React from 'react'
import Header from '../header/Header'
import './style.css'

export default function HeaderConFooter({ children }) {
    return (
        <>
            <Header />

            {children}
            <footer className='footer'>
                <span className='footerSpan'>
                    Todos los derechos reservados - Desarrollado por Jullss
                </span>
            </footer>
        </>
    )
}
