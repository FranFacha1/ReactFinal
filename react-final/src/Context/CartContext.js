import { createContext, useState } from "react";

export const CartContext = createContext({
	CartItems: [],
	addItem: () => {},
	removeItem: () => {},
	TotalCartItems: 0,
});

export const CartProvider = ({ children }) => {
	const [CartItems, setCartItems] = useState([]);

	const addItem = (itemId, quantity) => {
		const existingItem = CartItems.find((cartItem) => cartItem.id === itemId);

		if (existingItem) {
			setCartItems(
				CartItems.map((item) =>
					item.id === itemId
						? { ...item, quantity: item.quantity + quantity }
						: item
				)
			);
		} else {
			setCartItems([...CartItems, { id: itemId, quantity: quantity }]);
		}
	};

	const removeItem = (itemId) => {
		const newItems = CartItems.filter((item) => item.id !== itemId);
		setCartItems(newItems);
	};

	const TotalCartItems = CartItems.reduce(
		(acc, currentItem) => acc + currentItem.quantity,
		0
	);

	return (
		<CartContext.Provider
			value={{ CartItems, addItem, removeItem, TotalCartItems }}
		>
			{children}
		</CartContext.Provider>
	);
};
