import React from "react";

const ProductListing = () => {
  return (
    <div>
      <h1>Product Listing</h1>
      <ProductList>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductList>
    </div>
  );
};
export default ProductListing;
