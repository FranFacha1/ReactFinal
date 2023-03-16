import React from 'react'
import "./Item.css"


const Item = ({ imgSrc, name, descripcion, precio, productLink }) => {

  return (
    <div className='itemContainer'>
            <a href={productLink} className='item'>
      <div className='imgContainer'>
        <img src={imgSrc}></img>
      </div>
      <div className='itemInfo'>
        <div className='itemName'>{name}</div>
        <div className='itemDesc'>{descripcion}</div>
          <div className='itemPrice'>{"$" + precio}</div>
      </div>
      </a>

<div className='bottomContainer'>
          <div className='itemCount'>
            <button className='botonItem'>-</button>
            <div className='cantidad'>1</div>
            <button className='botonItem'>+</button>
          </div>
            <button className='botonItem'>Comprar</button>
        </div>
      
    </div>

  )
}

export default Item