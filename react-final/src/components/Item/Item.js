import React, { useState, useEffect } from "react";
import "./Item.css"



const Item = ({ imgSrc, name, descripcion, precio, productLink }) => {


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

  // UseEffect

  useEffect(() => {
    // montar || cuando termina de cargar

    console.log("el componente esta listo");

    if (contador > 0) {
      console.log("contador es mayor");
    } else {
      console.log("contador es menor");
    }

    return () => {
      // desmontar o cuando muere

      console.log("el componente murio");
    };
  }, [
    contador,
    // Cuando hay algun cambio || mostrar cambios
  ]);

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