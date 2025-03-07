import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/images/logo.png";

/*
 * * Header
 * * - Logo
 * * - nav items [home, contact us ...]
 * * Body
 * * - search
 * * - restaurant container
 * * - - restaurant card
 * * Footer
 * * - Copyright
 * * - links
 * * - Address
 * * - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="bitebazaar logo" />
        <h1 className="site-name">bitebazaar</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
