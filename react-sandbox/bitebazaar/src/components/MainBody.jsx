import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import { SWIGGY_API_HEADERS, SWIGGY_API_URL } from "../utils/constants";

const MainBody = () => {
  const [restaurantsList, setRestaurantsList] = useState(resList);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const response = await fetch(SWIGGY_API_URL);
    const data = await response.json();

    console.log(data.data.cards);
  };

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
        <button
          className="btn-clear-filter"
          onClick={() => {
            setRestaurantsList(resList);
          }}
        >
          Clear
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
