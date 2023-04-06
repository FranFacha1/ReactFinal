import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import "./Carrito.css";

function Carrito() {
	const ftoCarrito = "https://cdn-icons-png.flaticon.com/512/834/834526.png";
	const { TotalCartItems } = useContext(CartContext);

	return (
		<div className="div-carrito">
			<img className="carrito" src={ftoCarrito}></img>
			<p className="p">{TotalCartItems}</p>
		</div>
	);
}

export default Carrito;
