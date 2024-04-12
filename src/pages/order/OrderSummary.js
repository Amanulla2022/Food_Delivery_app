import React, { useState, useEffect } from "react";

const OrderSummary = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [paidAmount, setPaidAmount] = useState(0);

  useEffect(() => {
    // Retrieve order details from local storage
    const storedOrderDetails = sessionStorage.getItem("orderFormData");
    const storedPaidAmount = sessionStorage.getItem("paidAmount");

    if (storedOrderDetails) {
      setOrderDetails(JSON.parse(storedOrderDetails));
    }

    if (storedPaidAmount) {
      setPaidAmount(parseFloat(JSON.parse(storedPaidAmount)));
    }
  }, []);

  return (
    <div className="bg-gray-100 px-8 py-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6 underline">Order Summary</h2>
      {orderDetails ? (
        <div>
          <h3 className="text-xl font-semibold mb-4">Delivery Information</h3>
          <div className="grid grid-cols-2 gap-x-6">
            <div className="mb-4">
              <p className="font-semibold">First Name:</p>
              <p>{orderDetails.firstName}</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold">Last Name:</p>
              <p>{orderDetails.lastName}</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold">Email:</p>
              <p>{orderDetails.email}</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold">Street Address:</p>
              <p>{orderDetails.streetAddress}</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold">City:</p>
              <p>{orderDetails.city}</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold">State:</p>
              <p>{orderDetails.state}</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold">Zipcode:</p>
              <p>{orderDetails.zipcode}</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold">Country:</p>
              <p>{orderDetails.country}</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold">Phone Number:</p>
              <p>{orderDetails.phoneNumber}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>No order details found.</p>
      )}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Payment Information</h3>
        <div>
          <p className="font-semibold">Paid Amount:</p>
          <p>${paidAmount.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
