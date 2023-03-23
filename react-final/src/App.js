// import { useState } from "react";
import { useEffect, useState } from 'react';
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { routes } from './models/routes';
import Navbar from './components/NavBar/NavBar.js';
import Inicio from './components/Inicio/Inicio';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  {/* API-- CODIGO */}
  // const [pokemons, setPokemos] = useState([])

  // useEffect (() => {
  //   fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
  //   .then ((response) => response.json())
  //   .then ((response) => setPokemos(response.results))
  //   .catch ((error) => console.log(error))
  // }, 2000)

  const HeaderLayout = () => (
    <>
      <header>
        <Navbar />
      </header>
      <Outlet />
    </>
  );
  
  const router = createBrowserRouter([
    {
      element: <HeaderLayout />,
      children: [
        {
          path: routes.home,
          element: <Inicio/>,
        },
      
        {
          path: routes.category+"/:id",
          element: <div>categoria</div>,
        },
      
        {
          path: routes.cart,
          element: <div>Cart</div>,
        },
      
        {
          path: routes.checkout,
          element: <div>Checkout</div>,
        },
      
        {
          path: routes.products+"/:id?",
          element: <ItemListContainer/>
        },
        
        {
          path: routes.productDetail + "/:id",
          element: <ItemDetail/>
        }
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* API */}
      {/* <ul>
        {pokemons.map ((poke, index) =>
          <li key={poke.id}>{poke.name}</li>
        )}
      </ul> */}
    </div>
  );

  
}

export default App;
