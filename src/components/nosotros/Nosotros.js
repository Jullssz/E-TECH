import React, { useState } from 'react'
import './style.css'

export default function Nosotros() {
  const [respuestasVisibles, setRespuestasVisibles] = useState([])
  const datosPreguntas = [
    {
      pregunta: 'E-TECH',
      respuesta: 'E-TECH es una reciente emprendedora con años de experiencia en el ambito de tecnologia, hardware y todo lo necesario.',
    },
    {
      pregunta: 'Pregunta 2',
      respuesta: 'Respuesta a la pregunta 2.',
    },
    {
      pregunta: 'Pregunta 2',
      respuesta: 'Respuesta a la pregunta 2.',
    },
    {
      pregunta: 'Pregunta 2',
      respuesta: 'Respuesta a la pregunta 2.',
    },
    {
      pregunta: 'Pregunta 2',
      respuesta: 'Respuesta a la pregunta 2.',
    },
  ];

  if (respuestasVisibles.length !== datosPreguntas.length) {
    setRespuestasVisibles(new Array(datosPreguntas.length).fill(false))
  }

  const alternarRespuesta = (index) => {
    setRespuestasVisibles((prev) => {
      const nuevasRespuestasVisibles = [...prev]
      nuevasRespuestasVisibles[index] = !nuevasRespuestasVisibles[index]
      return nuevasRespuestasVisibles
    });
  }

  return (
    <div className="faq">
      <h2 className="tituloInicio">Sobre Nosotros</h2>
      {datosPreguntas.map((dato, index) => (
        <div key={index}>
          <div className="pregunta" onClick={() => alternarRespuesta(index)}>
            <div className="textoPregunta">
              <h2>{dato.pregunta}</h2>
            </div>
            <div className="flecha">
              {respuestasVisibles[index] ? (
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              )}
            </div>
          </div>
          <div className={`respuesta ${respuestasVisibles[index] ? 'visible' : ''}`}>
            <p>{dato.respuesta}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
