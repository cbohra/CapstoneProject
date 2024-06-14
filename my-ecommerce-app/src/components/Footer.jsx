import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <p>Contact Us: contact@example.com</p>
      </div>
      <div className="social-media">
        <p>Follow Us: Facebook | Twitter | Instagram</p>
      </div>
      <div className="terms-conditions">
        <a href="/terms">Terms and Conditions</a> |{" "}
        <a href="/privacy">Privacy Policies</a>
      </div>
    </footer>
  );
};

export default Footer;
