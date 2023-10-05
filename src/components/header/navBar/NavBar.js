import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

export default function NavBar() {
  return (
    <ul className='ulHeader'>
      <li className={"navBarLinks"} ><NavLink to={"/"} className={"navBarLinksV2"} activeclassname={"activeNavBarLinks"}>Inicio</NavLink> </li>
      <li className={"navBarLinks"} ><NavLink to={"/productos"} className={"navBarLinksV2"} activeclassname={"activeNavBarLinks"}>Productos</NavLink> </li>
      <li className={"navBarLinks"} ><NavLink to={"/nosotros"} className={"navBarLinksV2"} activeclassname={"activeNavBarLinks"}>Nosotros</NavLink> </li>
      <li className={"navBarLinks"} ><NavLink to={"/contacto"} className={"navBarLinksV2"} activeclassname={"activeNavBarLinks"}>Contacto</NavLink> </li>
    </ul>
  )
}
