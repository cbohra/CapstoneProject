// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
const products = [
  {
    imageUrl:
      "https://target.scene7.com/is/image/Target/GUEST_4ec9745e-f7c6-4847-a035-19cd992b2676?wid=1200&hei=1200&qlt=80&fmt=webp",
    productName: "Wireless Headphones",
    productDescription:
      "High-quality wireless headphones with noise cancellation.",
    price: 99.99,
    inventory: 50,
  },
  {
    imageUrl:
      "https://ss7.vzw.com/is/image/VerizonWireless/apple-iphone-15-pro-256gb-blue-titanium-mtqv3ll-a-a?wid=700&hei=700&fmt=webp",
    productName: "Smartphone",
    productDescription:
      "Latest model smartphone with advanced features and high resolution camera.",
    price: 699.99,
    inventory: 30,
  },
  {
    imageUrl:
      "https://i5.walmartimages.com/seo/Asus-G814JICS94-18-inch-ROG-Strix-G18-Gaming-Laptop-Intel-i9-13980HX-16GB-1TB-Eclipse-Gray_71fba2d2-7cea-4894-9dcb-ca9deb905358.d1bf129b3792dc63d27e1c657ad78ffe.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
    productName: "Gaming Laptop",
    productDescription:
      "Powerful gaming laptop with high-end graphics and fast processor.",
    price: 1299.99,
    inventory: 20,
  },
  {
    imageUrl:
      "https://www.att.com/scmsassets/global/devices/other/apple/apple-watch-se-2nd-gen-2022-40mm/defaultimage/midnight-aluminum-midnight-sport-s-m-hero-zoom.png",
    productName: "Smart Watch",
    productDescription:
      "Stylish smart watch with fitness tracking and message notifications.",
    price: 199.99,
    inventory: 75,
  },
  {
    imageUrl:
      "https://i5.walmartimages.com/seo/JBL-Xtreme-2-Portable-Bluetooth-Speaker-Blue-JBLXTREME2BLUAM_345747d1-1c3c-4977-8d9b-b102381ec58f_1.fea2276f5e468e57fa5c320b61d6e28c.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
    productName: "Bluetooth Speaker",
    productDescription:
      "Portable Bluetooth speaker with excellent sound quality and long battery life.",
    price: 49.99,
    inventory: 100,
  },
  {
    imageUrl:
      "https://i5.walmartimages.com/seo/Canon-EOS-Rebel-T7-Double-Zoom-Lens-Kit_582017b8-f410-4387-8739-475b360dfd96_1.51e5cfcc4f90195461094df38a020619.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
    productName: "Digital Camera",
    productDescription:
      "High-resolution digital camera with multiple shooting modes and Wi-Fi connectivity.",
    price: 399.99,
    inventory: 15,
  },
];

const Home = () => {
  // const [products, setProducts] = useState([]);

  //   useEffect(() => {
  //     const fetchProducts = async () => {
  //       try {
  //         const response = await axios.get(
  //           "http://localhost:8080/products/getlisting"
  //         );
  //         setProducts(response.data);
  //       } catch (error) {
  //         console.error("Error fetching products:", error);
  //       }
  //     };

  //     fetchProducts();
  //   }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
