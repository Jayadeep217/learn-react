import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import { SWIGGY_API_HEADERS, SWIGGY_API_URL } from "../utils/constants";

const MainBody = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const response = await fetch(SWIGGY_API_URL, SWIGGY_API_HEADERS);
    const data = await response.json();
    const restaurantData =
      data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    setRestaurantsList(restaurantData);
  };

  return (
    <div className="main">
      <div className="search">
        <button
          className="btn-filter"
          onClick={() => {
            const filteredRestaurantsList = restaurantsList.filter(
              (restaurant) => restaurant.info.avgRating > 4.2
            );
            setRestaurantsList(filteredRestaurantsList);
          }}
        >
          Top rated restaurants
        </button>
        <button
          className="btn-clear-filter"
          onClick={() => {
            setRestaurantsList(restaurantsList);
          }}
        >
          Clear
        </button>
      </div>
      <div className="restaurant-container">
        {restaurantsList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default MainBody;
