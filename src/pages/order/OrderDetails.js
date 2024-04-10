import React from "react";
import TextInput from "../../components/order/TextInput";
import { useCart } from "../../context/CartContext";
import { GrLinkNext } from "react-icons/gr";

const OrderDetails = () => {
  const { getTotalPrice } = useCart();
  const totalPrice = getTotalPrice();
  const tax = totalPrice * 0.18;
  const deliveryFee = 3.5;

  let grandTotal =
    parseFloat(totalPrice) + parseFloat(tax) + parseFloat(deliveryFee);
  let discount = 0;

  if (grandTotal > 100) {
    discount = grandTotal * 0.2;
    grandTotal -= discount;
  } else if (grandTotal > 50 && grandTotal <= 100) {
    discount = grandTotal * 0.15;
    grandTotal -= discount;
  } else {
    discount = 0;
  }

  grandTotal = grandTotal.toFixed(2);
  return (
    <div className="bg-gray-100 px-8 py-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6 underline">Order Details</h2>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2 md:pr-4">
          <h3 className="text-xl font-semibold mb-4">Delivery Information</h3>
          <div className="space-y-4">
            <div className="flex flex-wrap -mx-2">
              <div className="w-1/2 px-2">
                <TextInput placeholder="First Name" type="text" required />
              </div>
              <div className="w-1/2 px-2">
                <TextInput placeholder="Last Name" type="text" required />
              </div>
            </div>
            <TextInput placeholder="Email" type="email" required />
            <TextInput placeholder="Street Address" type="text" required />
            <div className="flex flex-wrap -mx-2">
              <div className="w-1/2 px-2">
                <TextInput placeholder="City" type="text" required />
              </div>
              <div className="w-1/2 px-2">
                <TextInput placeholder="State" type="text" required />
              </div>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="w-1/2 px-2">
                <TextInput placeholder="Zipcode" type="number" required />
              </div>
              <div className="w-1/2 px-2">
                <TextInput placeholder="Country" type="text" required />
              </div>
            </div>
            <TextInput placeholder="Phone Number" type="number" required />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-4">
          <h3 className="text-xl font-semibold mb-4 underline">Cart Total</h3>
          {totalPrice > 0 ? (
            <div className="space-y-4">
              <div className="flex justify-between">
                <p>Sub Total:</p>
                <p>${totalPrice}</p>
              </div>
              <hr className="border-t-2" />
              <div className="flex justify-between">
                <p>Delivery Charge:</p>
                <p>${deliveryFee}</p>
              </div>
              <hr className="border-t-2" />
              <div className="flex justify-between">
                <p>Tax:</p>
                <p>${tax.toFixed(2)}</p>
              </div>
              <hr className="border-t-2" />
              <div className="flex justify-between">
                <p>Discount:</p>
                <p>${discount.toFixed(2)}</p>
              </div>
              <hr className="my-2 border-t-4 border-green-500" />
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold">Grand Total:</p>
                <p className="text-lg font-semibold">${grandTotal}</p>
              </div>
              <div className="proceed-btn">
                Proceed To Payment
                <GrLinkNext />
              </div>
            </div>
          ) : (
            <p className="text-lg">No items added to cart.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
