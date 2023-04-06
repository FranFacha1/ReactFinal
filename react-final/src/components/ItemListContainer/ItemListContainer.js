import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { routes } from "../../models/routes";
import Productos from "../../mocks/productos";
import categorias from "../../mocks/categorias";
import Item from "../Item/Item";
import "./ItemListContainer.css";

const ItemListContainer = () => {
	const { id } = useParams();
	let filteredProducts = Productos;
	if (id !== undefined) {
		filteredProducts = Productos.filter(
			(product) => product.categoria === parseInt(id)
		);
	}

	return (
		<div className="productsContainer">
			<div className="products">
				<h1 className="title">Productos</h1>
				<div className="productsFilter">
					<Link to={routes.products} className="botonItem">
						Todos
					</Link>
					{categorias.map((categoria) => (
						<Link
							to={routes.products + "/" + categoria.id}
							className="botonItem"
						>
							{categoria.name}
						</Link>
					))}
				</div>
				<div className="productsList">
					{filteredProducts.map((producto) => (
						<Item
							key={producto.id}
							productLink={routes.productDetail + "/" + producto.id}
							imgSrc={producto.imagen}
							name={producto.nombre}
							descripcion={producto.descripcionCorta}
							precio={producto.precio}
							categoriaParam={producto.categoria}
							id={producto.id}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ItemListContainer;
