import React, { useState } from "react";
import { Link } from "react-router-dom";
import categorias from "../../mocks/categorias";
import "./Item.css"



const Item = ({ imgSrc, name, descripcion, precio, productLink, categoriaParam}) => {

  // CONTADOR
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  //busco la categoria
  const categoria = categorias.find((categoria) => categoria.id === categoriaParam);

  return (
    <div className='itemContainer'>
      <Link to={productLink} className='item'>
      <div className='imgContainer'>
        <img src={imgSrc}></img>
      </div>
      <div className='itemInfo'>
        <div className='itemName'>{name}</div>
        <div className='itemDesc'>{descripcion}</div>
          <div className='itemPrice'>{"$" + precio}</div>
      </div>
      </Link>
      <div className='itemCategory'>
        <p>{categoria.name}</p>
      </div>
<div className='bottomContainer'>
          <div className='itemCount'>
            <button onClick={restar} className='botonItem'>-</button>
            <div className='cantidad'>{contador}</div>
            <button onClick={sumar} className='botonItem'>+</button>
          </div>
            <button className='botonItem'>Comprar</button>
        </div>
      
    </div>

  )
}

export default Item