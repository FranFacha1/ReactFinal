import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import Productos from "../../mocks/productos"
import './ItemListContainer.css'
import { routes } from '../../models/routes'

const ItemListContainer = () => {

  return (
    <div>
      <div className='productsContainer'>
        {Productos.map((producto) => (
          <Item
            key={producto.id}
            productLink= {routes.productDetail + "/" + producto.id}
            imgSrc={producto.imagen}
            name={producto.nombre}
            descripcion={producto.descripcionCorta}
            precio={producto.precio}
          />
        ))}
      </div>
          
    </div>
  )
}

export default ItemListContainer