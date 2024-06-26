// src/CartItems.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Cart = ({ cartId }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/cart/1/items`);
        setCartItems(response.data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };
    fetchCartItems();
    console.log(cartItems);
  }, [cartId]);

  const handleRemoveFromCart = async (itemId) => {
    try {
      await axios.delete(`http://localhost:8080/cart/1/items/${itemId}`);
      setCartItems(cartItems.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  return (
    <div>
      {cartItems.map((item) => (
        <Card key={item.id}>
          <CardContent>
            <Typography variant="h5" component="div">
              {item.productName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.productDescription}
            </Typography>
            <Typography variant="h6" component="div">
              ${item.price.toFixed(2)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Quantity: {item.quantity}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleRemoveFromCart(item.id)}>
              Remove from Cart
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Cart;
