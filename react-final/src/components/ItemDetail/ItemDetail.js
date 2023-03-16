import React from 'react'
import { useParams } from 'react-router-dom'
import productos from '../../mocks/productos';
import './ItemDetail.css'

const ItemDetail = () => {
    const productoParam = useParams();
    let producto = productos.find(
        (productoResultado) => productoResultado.id === productoParam.id
    )

  return (
        <div className='itemDetail'>
          <div className='itemImageContainer'>
              <img src={producto.imagen} />
          </div>
          <div className='itemDetailContainer'>
            <div className='itemDetailcontainerInfo'>
                <div className='itemDetailContainerHeader'>
                    <h1>{producto.nombre}</h1>
                    <p>{producto.descripcionCorta}</p>
                </div>
                <div className='itemDetailContainerBody'>
                    <h3>Características</h3>
                    {producto.especificaciones.map((especificacion, index) => (
                        <p key={index}>■ {especificacion}</p>
                    ))}
                </div>   
                </div>
                
                <div className='itemDetailContainerFooter'>
                    <h2>${producto.precio}</h2>
                    <button className='botonItem'>Agregar al carrito</button>
                </div>
            </div>
        
        </div>
  )
}

export default ItemDetail