import React from 'react'
import "./Carrito.css"

function Carrito() {
  const ftoCarrito = "https://cdn-icons-png.flaticon.com/512/834/834526.png" 
  return (
    <div className='div-carrito'>
      <img className='carrito' src={ftoCarrito}></img>
      <p>10</p>
    </div>
  )
}

export default Carrito