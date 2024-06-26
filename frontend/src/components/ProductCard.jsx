// src/ProductCard.jsx
import React from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const ProductCard = ({ product, cartId, userId }) => {
  console.log(product);

  const handleAddToCart = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/cart/1/items`, {
        product: { id: product.id },
        quantity: 1,
      });
      console.log("Product added to cart:", response.data);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  const handleAddToWishlist = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/wishlist/add`, {
        user: {
          id: 1,
        },
        product: {
          id: product.id,
        },
      });
      console.log("Product added to wishlist:", response.data);
    } catch (error) {
      console.error("Error adding product to wishlist:", error);
    }
  };

  return (
    <Card>
      <CardMedia
        component="img"
        alt={product.productName}
        height="140"
        image={product.imageURL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.productDescription}
        </Typography>
        <Typography variant="h6" component="div">
          ${product.price.toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          In Stock: {product.inventory}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleAddToCart}>
          Add to Cart
        </Button>
        <Button size="small" onClick={handleAddToWishlist}>
          Add to Wishlist
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
