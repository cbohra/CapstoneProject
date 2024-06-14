import { View, Text } from "react-native";
import React from "react";

const Checkout = () => {
  return (
    <div>
      <h1>Checkout</h1>
      <form>
        <h2>Shipping Details</h2>
        <label>
          Address:
          <input type="text" name="address" />
        </label>
        <h2>Payment Information</h2>
        <label>
          Card Number:
          <input type="text" name="cardNumber" />
        </label>
        <h2>Order Summary</h2>
        <p>Total: </p>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
