import React from 'react'
import "./NavBar.css"
import Carrito from './Carrito/Carrito'
import mufa from "../assets/image/logo1.png"
import {routes} from "../../models/routes"

const NavBar = () => {

    return (
    <div className= "div-main">

        <div className="div-buttons">

            <div className='container-navbar'>
                
                <div>
                    <img className="img" src={mufa}></img>
                </div>

                <div className='buttons' >
                    <a  href={routes.home} className='button'>Incio</a>
                    <a  href={routes.products} className='button'>Productos</a>
                    <a  href={routes.cart}className='button'>Carrito</a>
                </div>

                <Carrito></Carrito>

            </div>


        </div>


    </div>
    )
}

export default NavBar