import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import categorias from "../../mocks/categorias";
import "./Item.css";
import { CartContext } from "../../Context/CartContext";

const Item = ({
	imgSrc,
	name,
	descripcion,
	precio,
	productLink,
	categoriaParam,
	id,
}) => {
	const { addItem } = useContext(CartContext);
	// CONTADOR
	const [contador, setContador] = useState(1);

	const sumar = () => {
		setContador(contador + 1);
	};

	const restar = () => {
		if (contador > 1) {
			setContador(contador - 1);
		}
	};

	const agregarAlCarrito = () => {
		addItem(id, contador);
	};

	//busco la categoria
	const categoria = categorias.find(
		(categoria) => categoria.id === categoriaParam
	);

	return (
		<div className="itemContainer">
			<Link to={productLink} className="item">
				<div className="imgContainer">
					<img src={imgSrc}></img>
				</div>
				<div className="itemInfo">
					<div className="itemName">{name}</div>
					<div className="itemDesc">{descripcion}</div>
					<div className="itemPrice">{"$" + precio}</div>
				</div>
			</Link>
			<div className="itemCategory">
				<p>{categoria.name}</p>
			</div>
			<div className="bottomContainer">
				<div className="itemCount">
					<button onClick={restar} className="botonItem">
						-
					</button>
					<div className="cantidad">{contador}</div>
					<button onClick={sumar} className="botonItem">
						+
					</button>
				</div>
				<button onClick={agregarAlCarrito} className="botonItem">
					Comprar
				</button>
			</div>
		</div>
	);
};

export default Item;
