import React, { useState, useEffect } from "react";
import TextInput from "../../components/order/TextInput";
import { useCart } from "../../context/CartContext";
import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import { FaTasks } from "react-icons/fa";

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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    streetAddress: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phoneNumber: "",
  });

  useEffect(() => {
    const storedFormData = sessionStorage.getItem("orderFormData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePlaceOrder = () => {
    console.log(formData);
    alert("Your order has been placed successfully!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("orderFormData", JSON.stringify(formData));
    sessionStorage.setItem("paidAmount", JSON.stringify(grandTotal));
    handlePlaceOrder();
  };

  return (
    <div className="bg-gray-100 px-8 py-6 rounded-lg shadow-md">
      <div className="flex justify-between">
        <h2 className="text-3xl font-semibold mb-6 underline">Order Details</h2>
        <Link
          to="/summary"
          className="mt-8 flex align-middle justify-center items-center gap-4 bg-green-300 text-xl text-purple-400 hover:bg-white font-bold p-2"
        >
          Check Order Summary <FaTasks />
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2 md:pr-4">
            <h3 className="text-xl font-semibold mb-4">Delivery Information</h3>
            <div className="space-y-4">
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2">
                  <TextInput
                    placeholder="First Name"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 px-2">
                  <TextInput
                    placeholder="Last Name"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="w-full px-2">
                  <TextInput
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="w-full px-2">
                  <TextInput
                    placeholder="Street Address"
                    type="text"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="flex flex-wrap ">
                  <div className="w-full md:w-1/2 px-2">
                    <TextInput
                      placeholder="City"
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-2">
                    <TextInput
                      placeholder="State"
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-2">
                  <TextInput
                    placeholder="Zipcode"
                    type="number"
                    name="zipcode"
                    value={formData.zipcode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 px-2">
                  <TextInput
                    placeholder="Country"
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="w-full px-2">
                  <TextInput
                    placeholder="Phone Number"
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
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
                <button type="submit" className="proceed-btn">
                  Proceed To Payment
                  <GrLinkNext />
                </button>
              </div>
            ) : (
              <>
                {" "}
                <p className="text-lg">No items added to cart.</p>
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default OrderDetails;
