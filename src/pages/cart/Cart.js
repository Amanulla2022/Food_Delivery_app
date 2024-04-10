import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { GrLinkNext } from "react-icons/gr";

const Cart = () => {
  const { cart, removeFromCart, getTotalPrice } = useCart();

  const groupedCart = cart.reduce((acc, item) => {
    if (acc[item.id]) {
      acc[item.id].quantity += 1;
    } else {
      acc[item.id] = {
        ...item,
        quantity: 1,
      };
    }
    return acc;
  }, {});

  const totalPrice = Object.values(groupedCart).reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-end item-end">
      <div className="bg-white p-4  shadow-md w-3/5 z-50 relative overflow-auto">
        <Link
          to="/categories"
          className="absolute top-2 right-2 text-3xl text-gray-600 hover:text-gray-800"
        >
          &times;
        </Link>
        <h2 className="text-3xl font-semibold mb-4 uppercase text-green-600">
          Cart
        </h2>

        {Object.values(groupedCart).length > 0 ? (
          <div>
            {Object.values(groupedCart).map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-4"
              >
                <div className="flex items-center">
                  <img
                    className="h-20 w-20 rounded-lg mr-4"
                    src={item.imgSrc}
                    alt={item.name}
                  />
                  <div>
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-gray-600">
                      ${item.price} x {item.quantity}
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 justify-center items-center align-middle">
                  <p className="text-green-400 font-semibold">
                    <span className="text-gray-500">Product Total: </span>
                    <span className="text-red-400">$</span>
                    {parseFloat(item.price) * item.quantity}
                  </p>
                  <button
                    className="text-white font-semibold focus:outline-none bg-red-400 p-2 rounded-xl hover:bg-red-800"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-center mt-4 gap-4 text-teal-600">
              <p className="text-xl font-semibold underline">Total:</p>
              <p className="text-xl font-semibold text-green-400">
                <span className="text-red-400">$</span>
                {totalPrice.toFixed(2)}
                <span className="text-gray-500"> Only...</span>
              </p>
            </div>

            <Link
              to={{
                pathname: "/order",
                state: { totalPrice: totalPrice },
              }}
              className="proceed-btn"
            >
              Proceed To Checkout
              <GrLinkNext />
            </Link>
          </div>
        ) : (
          <div className="flex justify-center items-center h-2/3 text-5xl font-semibold text-gray-600 underline uppercase">
            Your cart is empty!!!
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
