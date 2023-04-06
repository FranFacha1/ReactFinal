import React, { useState, useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../Context/CartContext";
import productos from "../../mocks/productos";

const Cart = () => {
	// const [total, setTotal] = useState(0);

	// const sumatoriaTotal = (total) => {
	// 	setTotal(total + producto.precio * item.quantity);
	// };

	const { CartItems, removeItem } = useContext(CartContext);
	const ft =
		"https://w7.pngwing.com/pngs/56/35/png-transparent-computer-icons-delete-button-miscellaneous-text-rectangle-thumbnail.png";

	const eliminarDelCarrito = (id) => {
		removeItem(id);
	};

	const comprar = () => {
		alert("!Gracias por su Compra!");
	};
	return (
		<div>
			<div className="div-cointaner-cart">
				{CartItems.map((item) => {
					const producto = productos.find((product) => product.id === item.id);
					return (
						<div>
							<div className="cart-item" key={item.id}>
								<img className="img-cart" src={producto.imagen}></img>
								<h1 className="titulo-cart">{producto.nombre}</h1>
								<p className="cantida-cart">Cantidad: {item.quantity}</p>
								<p>{producto.precio * item.quantity}</p>
								<button onClick={comprar} className="botonItem">
									Comprar
								</button>
								<button
									onClick={() => eliminarDelCarrito(item.id)}
									className="button-cart"
								>
									<img className="img-button" src={ft}></img>
								</button>
							</div>
						</div>
					);
				})}

				{/* <h2 className="total">Total: {sumatoriaTotal}</h2> */}
			</div>
		</div>
	);
};

export default Cart;
