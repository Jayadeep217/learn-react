import React from "react";
import ReactDOM from "react-dom/client";

//images
import img_logo from "./assets/images/logo.png";
import img_restaurant from "./assets/images/res-img.png";

/*
 * * Header
 * * - Logo
 * * - nav items [home, contact us ...]
 * * Body
 * * - search
 * * - restaurant container
 * * - - restaurant card
 * * - - - Food Img
 * * - - - Restaurant Name
 * * - - - star rating, cuisine, ETA(delivery time)
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
        <img className="logo" src={img_logo} alt="bitebazaar logo" />
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

const RestaurantCard = (props) => {
  const {resName, cuisine, rating} = props;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-card-img"
        src={img_restaurant}
        alt="bitebazaar logo"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating} ★</h4>
    </div>
  );
};

const MainBody = () => {
  return (
    <div className="main">
      <div className="search">
        <input
          type="text"
          className="search"
          placeholder="type restaurant name"
        />
      </div>
      <div className="restaurant-container">
        <RestaurantCard resName="Dominos" cuisine="Pizza" rating="3.9" />
        <RestaurantCard resName="pizzeria" cuisine="Pizza" rating="3.7" />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <MainBody />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
