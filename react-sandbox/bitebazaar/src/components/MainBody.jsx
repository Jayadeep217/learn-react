import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const MainBody = () => {
  const [restaurantsList, setRestaurantsList] = useState(resList);

  return (
    <div className="main">
      <div className="search">
        <button
          className="btn-filter"
          onClick={() => {
            const filteredRestaurantsList = restaurantsList.filter(
              (restaurant) => restaurant.data.avgRating > 4.2
            );
            setRestaurantsList(filteredRestaurantsList);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {restaurantsList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default MainBody;
