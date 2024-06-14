import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">Main-Logo</Link>
      </div>

      <nav classNmae="container">
        <Link to="/">Home</Link>
        <Link to="/products">Men</Link>
        <Link to="/products">Women</Link>
        <Link to="/products">Kids</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/login">Login/Signup</Link>
      </nav>

      <SearchBar />
    </header>
  );
};

export default Header;
