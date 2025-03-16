import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { SWIGGY_API_HEADERS, SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./shimmer";

const MainBody = () => {
  const [allRestaurantsList, setAllRestaurantsList] = useState([]);
  const [restaurantsList, setRestaurantsList] = useState([]);

  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const response = await fetch(SWIGGY_API_URL, SWIGGY_API_HEADERS);
        const data = await response.json();
        const restaurantData =
          data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        setAllRestaurantsList(restaurantData);
        setRestaurantsList(restaurantData);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
        setRestaurantsList([]);
      }
    };
    fetchRestaurantData();
  }, []);

  return allRestaurantsList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main">
      <div className="search">
        <button
          className="btn-filter"
          onClick={() => {
            const filteredRestaurantsList = allRestaurantsList.filter(
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
            setRestaurantsList(allRestaurantsList);
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
