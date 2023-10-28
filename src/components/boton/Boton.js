import React from 'react'

const Boton = ({ titulo, funcion }) => {
  return (
    <div>
      <button onClick={() => funcion()}>{titulo}</button>
    </div>
  )
}

export default Boton