import React from 'react'
import "./NavBar.css"
import Carrito from './Carrito/Carrito'
import mufa from "../../assets/image/logo1.png"
import {routes} from "../../models/routes"
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
    <div className= "div-main">

        <div className="div-buttons">

            <div className='container-navbar'>
                
                <div>
                    <img className="img" src={mufa}></img>
                </div>

                <div className='buttons' >
                    <Link  to={routes.home} className='button'>Incio</Link>
                    <Link  to={routes.products} className='button'>Productos</Link>
                    <Link  to={routes.cart} className='button'>Carrito</Link>
                </div>

                <Carrito></Carrito>

            </div>


        </div>


    </div>
    )
}

export default NavBar