// src/WishlistItems.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Wishlist = ({ userId }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const fetchWishlistItems = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/wishlist/user/1`
        );
        setWishlistItems(response.data);
      } catch (error) {
        console.error("Error fetching wishlist items:", error);
      }
    };
    fetchWishlistItems();
  }, [userId]);

  const handleRemoveFromWishlist = async (itemId) => {
    try {
      await axios.delete(`http://localhost:8080/wishlist/remove/${itemId}`);
      setWishlistItems(wishlistItems.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("Error removing item from wishlist:", error);
    }
  };

  return (
    <div>
      {wishlistItems.map((item) => (
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
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => handleRemoveFromWishlist(item.id)}
            >
              Remove from Wishlist
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Wishlist;
