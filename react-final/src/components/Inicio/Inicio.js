import React from 'react'
import mufa from "../assets/image/logo1.png"
import "./Incio.css"


const Inicio = () => {
  return (
    <div className='incio'>
        <div className='inicio-div'>
            <img className='mufa' src={mufa}></img>
            <p className='titulo'>Tienda Online</p>
        </div>
    </div>
  )
}

export default Inicio