// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// const products = [
//   {
//     imageUrl:
//       "https://target.scene7.com/is/image/Target/GUEST_4ec9745e-f7c6-4847-a035-19cd992b2676?wid=1200&hei=1200&qlt=80&fmt=webp",
//     productName: "Apple AirPods Max",
//     productDescription:
//       "AirPods Max reimagine over-ear headphones. An Apple-designed driver provides high-fidelity audio. Every detail, from canopy to cushions, has been designed for an exceptional fit. Industry-leading Active Noise Cancellation blocks outside noise, while Transparency mode lets it in.",
//     price: 99.99,
//     inventory: 50,
//   },
//   {
//     imageUrl:
//       "https://ss7.vzw.com/is/image/VerizonWireless/apple-iphone-15-pro-256gb-blue-titanium-mtqv3ll-a-a?wid=700&hei=700&fmt=webp",
//     productName: "Apple iPhone 15 Pro Max",
//     productDescription:
//       "iPhone 15 Pro Max. Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever.",
//     price: 699.99,
//     inventory: 30,
//   },
//   {
//     imageUrl:
//       "https://i5.walmartimages.com/seo/Asus-G814JICS94-18-inch-ROG-Strix-G18-Gaming-Laptop-Intel-i9-13980HX-16GB-1TB-Eclipse-Gray_71fba2d2-7cea-4894-9dcb-ca9deb905358.d1bf129b3792dc63d27e1c657ad78ffe.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
//     productName:
//       "Asus G814JICS94 18 inch ROG Strix G18 Gaming Laptop - Intel i9-13980HX - 16GB/1TB - Eclipse Gray",
//     productDescription:
//       " Asus ROG Strix G18 G814 G814JI-CS94 18inch Gaming Notebook, QHD+, 2560 x 1600, Intel Core i9 13th Gen i9-13980HX Tetracosa-core (24 Core) 2.20 GHz, 16 GB Total RAM, 1 TB SSD, Eclipse Gray, Intel HM770 Express Chip, Windows 11 Home, NVIDIA GeForce RTX 4070 with 8 GB, Intel UHD Graphics, In-plane Switching (IPS) Technology, Nebula, Front Camera/Webcam, IEEE 802.11ax Wireless LAN Standard",
//     price: 2049.99,
//     inventory: 20,
//   },
//   {
//     imageUrl:
//       "https://www.att.com/scmsassets/global/devices/other/apple/apple-watch-se-2nd-gen-2022-40mm/defaultimage/midnight-aluminum-midnight-sport-s-m-hero-zoom.png",
//     productName: "AppleWatch SE 2nd Gen (2022) 40mm",
//     productDescription:
//       "Stylish smart watch with fitness tracking and message notifications.",
//     price: 199.99,
//     inventory: 75,
//   },
//   {
//     imageUrl:
//       "https://i5.walmartimages.com/seo/JBL-Xtreme-2-Portable-Bluetooth-Speaker-Blue-JBLXTREME2BLUAM_345747d1-1c3c-4977-8d9b-b102381ec58f_1.fea2276f5e468e57fa5c320b61d6e28c.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
//     productName:
//       "JBL Xtreme 2 Portable Bluetooth Speaker, Blue, JBLXTREME2BLUAM",
//     productDescription:
//       "JBL Xtreme 2 is the ultimate portable Bluetooth speaker that effortlessly delivers dynamic and immersive stereo sound. The speaker is fully loaded with four drivers, two JBL Bass Radiators, a rechargeable 10,000mAh Li-ion battery which supports up to 15 hours of playtime, and a convenient USB charge out. It's IPX7 rated, featuring a waterproof design, with rugged fabric in exclusive colors. Together with JBL Connect+, it can wirelessly link with more than 100 JBL Connect+ enabled speakers to elevate your listening experience and making the party even bigger. The speaker carries integrated hooks, a durable metal base, an added bottle opener, and even includes a carrying strap to elevate the consumer convenience level whilst on the go. Whether in the living room, poolside, or tailgating for the big game, the JBL Xtreme 2 brings bold sound whenever and wherever.",
//     price: 49.99,
//     inventory: 100,
//   },
//   {
//     imageUrl:
//       "https://i5.walmartimages.com/seo/Canon-EOS-Rebel-T7-Double-Zoom-Lens-Kit_582017b8-f410-4387-8739-475b360dfd96_1.51e5cfcc4f90195461094df38a020619.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
//     productName: "Canon EOS Rebel T7 Double Zoom Lens Kit",
//     productDescription:
//       "The camera with the quality your photos deserve, the EOS Rebel T7 can be ideal for smartphone or digital point-and-shoot camera users looking to step up their imaging game. It's equipped with a 24. 1 Megapixel CMOS image sensor for highly detailed, vibrant photos and videos even in low light. Whether you're out on an adventure Hike or snapping candid's of your friends during a late night out, The EOS Rebel T7 can help you take photos you'll want to show off. Built-in Wi-Fi* and NFC** connectivity makes it easy to share, print, or get your favorite pictures up on select social media sites for your friends, family and the world to see. If you're new to DSLRs, scene intelligent auto mode can conveniently and automatically adjust the camera's settings to suit your subject. Easy to use and simple to share with, the EOS Rebel T7 delivers high image quality that's sure to catch the audience's eye.",
//     price: 599.0,
//     inventory: 15,
//   },
// ];

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/products/getlisting"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

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
