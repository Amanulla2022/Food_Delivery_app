import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [
      ...prevCart,
      {
        ...item,
        quantity: 1,
      },
    ]);
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const getTotalItemCount = () => {
    const totalCount = cart.reduce((total, item) => {
      const quantity = parseInt(item.quantity, 10);
      console.log(item.quantity, quantity); // Log quantity and its parsed value
      return (total += quantity);
    }, 0);
    return totalCount;
  };

  const getTotalPrice = () => {
    const totalPrice = cart.reduce((total, item) => {
      const quantity = parseInt(item.quantity, 10);
      const price = parseFloat(item.price);
      return total + quantity * price;
    }, 0);
    return totalPrice.toFixed(2);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        getTotalItemCount,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
