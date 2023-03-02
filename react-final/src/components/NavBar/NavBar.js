import React from 'react'
import "./NavBar.css"
import Carrito from './Carrito/Carrito'

const NavBar = () => {

    const src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYevRbSPlkzBNcoaOcGeKnvY6nhYCQGZY0PA&usqp=CAU"
    return (
    <div className= "div-main">

        <div className="div-buttons">

            <div className='container-navbar'>
                
                <div>
                    <img className="img" src={src}></img>
                </div>

                <div className='buttons' >
                    <button className='button'>Incio</button>
                    <button className='button'>Carrito</button>
 
                </div>

                <Carrito></Carrito>

            </div>


        </div>


    </div>
    )
}

export default NavBar